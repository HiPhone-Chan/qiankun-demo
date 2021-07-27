<template>
  <el-container>
    <el-header>
      <app-header></app-header>
    </el-header>
    <el-main>
      <div id="content" class="app-view-box">123</div>
      <router-view />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import AppHeader from "./Header"

export default {
  components: {
    AppHeader
  }
};
</script>

<style>
</style>