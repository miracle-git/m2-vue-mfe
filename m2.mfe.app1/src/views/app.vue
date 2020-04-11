<template>
  <div id="app">
    <m2-router-view/>
  </div>
</template>

<script>
  import { EVENT_BUS_KEYS } from 'config/app.conf'
  import { DataEvent } from 'm2-core'

  export default {
    name: 'app',
    mounted() {
      window.addEventListener('resize', () => {
        this.resize(this)
      })
    },
    methods: {
      resize: DataEvent.debounce((_this) => {
        _this.$bus.$emit(EVENT_BUS_KEYS.resize, document.body.clientWidth)
      })
    }
  }
</script>

<style lang="less">
  @import "~assets/css/base.less";
</style>
