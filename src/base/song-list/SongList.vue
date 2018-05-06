<template>
  <div class="song-list">
    <ul>
      <li v-for="item in songs" :key="item.id" class="item">
        <div class="content">
          <h2 class="name">{{item.name}}</h2>
          <p class="desc">{{getDesc(item)}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="textecmascript-6">
export default {
  props: {
    songs: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getDesc(song) {
      return `${song.singer} - ${song.album}`
    }
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .song-list
    .item
      display: flex
      align-item: center
      box-sizing: border-box
      height: 56px
      font-size: $font-size-medium
      .content
        flex: 1
        line-height: 20px
        overflow:hidden
        .name
          no-wrap()
          color: $color-text
        .desc
          no-wrap()
          color: $color-text-d
</style>
