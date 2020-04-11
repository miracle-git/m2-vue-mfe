<template>
  <div class="home-lang">
    <p class="btn-group">
      <el-dropdown size="medium" split-button type="success" @command="handleSwitchLang">
        {{$t('button.lang')}}
        <el-dropdown-menu slot="dropdown" class="switch-drop-menu">
          <el-dropdown-item command="zh">{{$t('lang.zh')}}</el-dropdown-item>
          <el-dropdown-item command="en">{{$t('lang.en')}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown size="medium" split-button type="success" @command="handleSwitchTheme">
        {{$t('button.theme')}}
        <el-dropdown-menu slot="dropdown" class="switch-drop-menu">
          <el-dropdown-item command="skyblue"><span class="blue"></span>{{$t('theme.blue')}}</el-dropdown-item>
          <el-dropdown-item command="grassgreen"><span class="green"></span>{{$t('theme.green')}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </p>
  </div>
</template>

<script>
  import { changeLang, changeTheme } from 'm2-vue'

  export default {
    name: 'home-flavor',
    methods: {
      // 切换语言
      handleSwitchLang(lang) {
        changeLang(this, lang)
      },
      // 切换主题
      handleSwitchTheme(theme) {
        changeTheme(this, theme)
      }
    }
  }
</script>

<style lang="less">
  @import "./index.less";
</style>
