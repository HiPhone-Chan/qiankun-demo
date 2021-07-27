<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <el-menu-item index="/home">
      Home
    </el-menu-item>
    <el-menu-item index="/about">
      About
    </el-menu-item>
    <el-menu-item index="/app-vue">
      Child
    </el-menu-item>
    <el-menu-item index="">
      <a href="https://element.eleme.cn/" target="_blank">element</a>
    </el-menu-item>
  </el-menu>
</template>

<script>

export default {
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(keyPath)
      // this.$router.push(key);
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
}
</style>