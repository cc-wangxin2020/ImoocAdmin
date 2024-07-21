import { ref } from 'vue'
import Sortable from 'sortablejs'
import { articleSort } from '@/api/article'
import { ElMessage } from 'element-plus'
import i18n from '@/i18n'

// 排序相关
export const tableRef = ref(null)

/**
 * 初始化排序
 */
export const initSortable = (tableData, cb) => {
  // 设置拖拽效果
  const el = tableRef.value.$el.querySelectorAll('.el-table__body > tbody')[0]
  // 1. 要拖拽的元素
  // 2. 配置对象
  console.log(el)
  el &&
    Sortable.create(el, {
      // 拖拽时类名
      ghostClass: 'sortable-ghost',
      // 拖拽结束的回调方法
      async onEnd(event) {
        const { newIndex, oldIndex } = event
        await articleSort({
          initRanking: tableData.value[oldIndex].ranking,
          finalRanking: tableData.value[newIndex].ranking
        })
        ElMessage.success({
          message: i18n.global.t('msg.article.sortSuccess'),
          type: 'success'
        })
        tableData.value = []
        cb && cb()
      }
    })
}
