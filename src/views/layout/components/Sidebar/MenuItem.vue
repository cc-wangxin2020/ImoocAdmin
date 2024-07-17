<template>
  <el-icon
    v-if="icon.includes('el-icon')"
    class="el-icon"
    :class="icon"
  ></el-icon>
  <svg-icon v-else :icon="icon"></svg-icon>
  <span>{{ generateTitle(title) }}</span>
</template>

<script setup>
import SvgIcon from '@/components/SvgIcon'
import { defineProps } from 'vue'
import { generateTitle } from '@/utils/i18n'
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<style></style>
