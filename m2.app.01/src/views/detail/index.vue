<template>
  <div class="detail">
    <h2>{{$t('title.detail')}}({{$route.params.id}})</h2>
  </div>
</template>

<script>
  export default {
    name: 'detail',
    created() {
      console.log(this.$route.params)
    }
  }
</script>
