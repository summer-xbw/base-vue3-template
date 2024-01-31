<template>
  <div>home-view</div>
</template>

<script lang="ts">
import { useUserStore } from '@/store'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const userStore = useUserStore()
    console.log(userStore)
  }
})
</script>
