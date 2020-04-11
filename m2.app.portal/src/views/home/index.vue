<template>
  <div class="home-page" style="height: 800px;">
    <home-header/>
    <home-flavor/>
  </div>
</template>

<script>
  import { HomeHeader, HomeFlavor } from './children'

  export default {
    name: 'home-page', // 组件名称(对于外围页面可不配置),
    components: { // 外部组件引用
      HomeHeader,
      HomeFlavor
    },
    mixins: [], // 外部mixin
    props: {}, // 外部传参
    data() { return {} }, // 初始化数据
    computed: {}, // 计算属性
    watch: {}, // 数据监控
    methods: {}, // 页面操作(数据请求逻辑等)
    created() {}, // 异步请求数据(这里只提供调用，具体方法放在methods中）
    mounted() {}, // 执行DOM操作，获取refs等
    activated() {}, // 当开启keep-alive时，页面再次进入时调用
    deactivated() {}, // 当开启keep-alive时，页面离开时调用
    destroyed() {} // 当页面离开执行操作(清除定时器等)
  }
</script>
