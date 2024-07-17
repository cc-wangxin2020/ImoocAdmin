<template>
  <el-sub-menu v-if="route.children.length > 0" :index="route.path">
    <template #title>
      <menu-item :icon="route.meta.icon" :title="route.meta.title"></menu-item>
    </template>
    <sidebar-item
      v-for="item in route.children"
      :key="item.path"
      :route="item"
    ></sidebar-item>
  </el-sub-menu>
  <el-menu-item v-else :index="route.path">
    <menu-item :icon="route.meta.icon" :title="route.meta.title"></menu-item>
  </el-menu-item>
</template>

<script setup>
import MenuItem from './MenuItem.vue'
import { defineProps } from 'vue'
defineProps({
  route: {
    type: Object,
    required: true
  }
})
</script>

<style></style>
