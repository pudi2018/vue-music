<template>
    <div class="m-header">
        <div class="icon"></div>
        <div class="text">Chicken Music</div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    @import "~common/stylus/mixin"

    .m-header
        position: relative
        height: 44px
        text-align: center
        color: $color-theme
        font-size: 0
        .icon
            display: inline-block
            vertical-align: top
            margin-top: 6px
            width: 32px
            height: 32px
            margin-right: 9px
            bg-image('logo')
            background-size: 32px 32px
        .text
            font-weight: bold
            display: inline-block
            vertical-align: top
            line-height: 44px
            font-size: $font-size-large
            color: $color-theme
</style>
