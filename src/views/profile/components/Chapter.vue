<template>
  <el-timeline>
    <el-timeline-item
      v-for="item in chapterData"
      :key="item.id"
      :timestamp="item.timestamp"
      placement="top"
    >
      <el-card>
        <h4>{{ item.content }}</h4>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<script setup>
import { getChapter } from '@/api/user'
import { ref, onMounted } from 'vue'
import { watchSwitchLang } from '@/utils/i18n'
const chapterData = ref([])
onMounted(async function () {
  console.log('onMounted')
  const res = await 123
  console.log(res)
})
const getChapterData = async () => {
  console.log('hhhhhh')
  chapterData.value = await getChapter()
  console.log('wwww')
}
getChapterData()
watchSwitchLang(getChapterData)
</script>

<style></style>
