<template>
  <div class="home-header">
    <h2 class="title">{{$t('message.hello')}}</h2>
    <p class="subtitle">{{$t('message.welcome')}}</p>
  </div>
</template>

<script>
  export default {
    name: 'home-header'
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
