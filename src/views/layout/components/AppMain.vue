<template>
  <div class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { generateNewStyle, writeNewStyle } from '@/utils/theme'
import { generateTitle, watchSwitchLang } from '@/utils/i18n'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { isTags } from '@/utils/tags'

const store = useStore()
generateNewStyle(store.getters.mainColor).then((newStyleText) => {
  writeNewStyle(newStyleText)
})

const route = useRoute()
const getTitle = (route) => {
  let title = ''
  if (!route.meta) {
    const pathArr = route.path.split('/')
    title = pathArr[pathArr.length - 1]
  } else {
    title = generateTitle(route.meta.title)
  }
  return title
}
watch(route, (to, from) => {
  if (!isTags(to.path)) return
  const { fullPath, meta, name, params, path, query } = to
  store.commit(
    'app/addTagsViewList',
    {
      fullPath,
      meta,
      name,
      params,
      path,
      query,
      title: getTitle(to)
    },
    {
      immediate: true
    }
  )
})
watchSwitchLang(() => {
  store.getters.tagsViewList.forEach((route, index) => {
    store.commit('app/changeTagsView', {
      index,
      tag: {
        ...route,
        title: getTitle(route)
      }
    })
  })
})
</script>

<style scoped>
.app-main {
  min-height: calc(100vh - 50px - 43px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 104px 20px 20px 20px;
  box-sizing: border-box;
}
</style>
