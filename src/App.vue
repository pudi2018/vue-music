<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script type="ecmascript-6">
import MHeader from 'components/m-header/Header'
import Tab from 'components/tab/Tab'
export default {
  name: 'App',
  components: {
    MHeader,
    Tab
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
