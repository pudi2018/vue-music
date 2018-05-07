<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script type="ecmascript-6">
import MHeader from 'components/m-header/Header'
import Tab from 'components/tab/Tab'
import Player from 'components/player/Player'
export default {
  name: 'App',
  components: {
    MHeader,
    Tab,
    Player
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
