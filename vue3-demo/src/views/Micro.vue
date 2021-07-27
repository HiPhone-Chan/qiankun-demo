<template>
  <div />
</template>

<script>
import { start } from 'qiankun';
import {onMounted} from 'vue'

export default {
  setup() {
    onMounted(() => {
      if (!window.qiankunStarted) {
        window.qiankunStarted = true;
        start();
      }
    })

    return {}
  }
}
</script>

<style>

</style>