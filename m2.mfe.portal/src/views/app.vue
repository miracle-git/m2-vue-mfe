<template>
  <div id="container">
    <div class="m2-app-layout" :key="layoutKey">
      <m2-header :config="headerConfig" @search="search" :show-menu="false"/>
      <!--    <m2-header :config="headerConfig" show-menu="false" :show-search="false">-->
      <!--      <div class="header-links" slot="links">-->
      <!--        这里添加右侧的自定义链接-->
      <!--      </div>-->
      <!--      <div class="header-extra-links" slot="extra-links">-->
      <!--        这里新增右侧的自定义链接（保留原来的链接）-->
      <!--      </div>-->
      <!--    </m2-header>-->
      <m2-main :config="mainConfig" :show-menu="true" v-if="showMain">
        <fragment slot="content">
          <div class="app-view-box" v-html="content"></div>
          <div v-if="loading" class="subapp-loading"></div>
          <m2-router-view v-if="!content"/>
        </fragment>
      </m2-main>
    </div>
  </div>
</template>

<script>
  import { EVENT_BUS_KEYS } from 'config/app.conf'
  import { DataEvent } from 'm2-core'
  import { refresh } from 'm2-vue'
  import { getMenus } from 'm2-mfe'

  export default {
    name: 'app',
    mixins: [refresh],
    props: {
      loading: Boolean,
      content: String
    },
    created() {
      this.initNavMenu()
      getMenus().then(res => this.initSidebar(res))
    },
    data: () => ({
      headerConfig: {
        menus: {}
      },
      mainConfig: {
        menus: {}
      }
    }),
    computed: {
      showMain() {
        const { menus } = this.mainConfig
        return menus.data && menus.data.length > 0
      }
    },
    mounted() {
      window.addEventListener('resize', this.resize(this))
    },
    methods: {
      search(val) {
        // 输入关键字执行搜索
        console.log(val)
      },
      resize: DataEvent.debounce((_this) => {
        _this.$bus.$emit(EVENT_BUS_KEYS.resize, document.body.clientWidth)
      }),
      initNavMenu() {
        this.headerConfig = { ...this.headerConfig,
          menus: {
            active: 'tn-01',
            map: {
              key: 'id',
              text: 'name',
              url: 'link',
              // level: 'level',
              // children: 'children',
              pid: 'parentId',
              root: '0'
            },
            data: [
              { id: 'tn-01', name: '办事大厅', link: 'http://hr.oa.com/', icon: 'place', parentId: '0', level: 1 },
              { id: 'tn-02', name: '个人信息', link: 'http://hrstaff.oa.com/hr/HRStaff', icon: 'user', parentId: '0', level: 1 },
              {
                id: 'tn-03',
                name: '组织发展',
                icon: 'coordinate',
                parentId: '0',
                level: 1,
                children: [
                  { id: 'tn-03-01', name: '首页', link: 'http://od.oa.com/organization/default.aspx', parentId: 'tn-03', level: 2 },
                  { id: 'tn-03-02', name: '360度评估', link: 'http://yunassess.oa.com/yunassess/taskList', parentId: 'tn-03', level: 2 },
                  { id: 'tn-03-03', name: '组织人才盘点', link: 'http://od.oa.com/organization/OrgPages/MyOrgTask.aspx', parentId: 'tn-03', level: 2 },
                  { id: 'tn-03-04', name: '任职资格测算', link: 'http://od.oa.com/HRQualification/', parentId: 'tn-03', level: 2 }
                ]
              },
              {
                id: 'tn-4',
                name: '人事管理',
                parentId: '0',
                level: 1,
                children: [
                  { id: 'tn-04-01', name: '首页', link: 'http://hm.oa.com/hrmove/', parentId: 'tn-04', level: 2 },
                  { id: 'tn-04-02',
                    name: '我的任务箱',
                    level: 2,
                    parentId: 'tn-04',
                    children: [
                      { id: 'tn-04-02-01', name: '我的待办', link: 'http://hm.oa.com/HRMove/task/todo', parentId: 'tn-04-02', level: 3 },
                      { id: 'tn-04-02-02', name: '委托待办', link: 'http://hm.oa.com/HRMove/task/delegate', parentId: 'tn-04-02', level: 3 },
                      { id: 'tn-04-02-03', name: '我的已办', link: 'http://hm.oa.com/HRMove/task/history', parentId: 'tn-04-02', level: 3 },
                      { id: 'tn-04-02-04', name: '我的异动单', link: 'http://hm.oa.com/HRMove/task/movelist', parentId: 'tn-04-02', level: 3 }
                    ]
                  },
                  { id: 'tn-04-03',
                    name: '提出申请',
                    level: 2,
                    parentId: 'tn-04',
                    children: [
                      { id: 'tn-04-03-01', name: '员工调动', link: 'http://hm.oa.com/HRMoveTransfer', parentId: 'tn-04-03', level: 3 },
                      { id: 'tn-04-03-02', name: '员工离职', link: 'http://hm.oa.com/hrmovedimission/Request/DimissionApply.aspx', parentId: 'tn-04-03', level: 3 }
                    ]
                  }
                ]
              },
              {
                id: 'tn-05', name: '招聘选拔', link: 'http://zhaopin.oa.com/resume/default.aspx', parentId: '0', level: 1
              },
              {
                id: 'tn-06',
                name: '评估管理',
                parentId: '0',
                level: 1,
                children: [
                  { id: 'tn-06-01', name: '首页', link: 'http://assess.oa.com/assess/Home/Index', parentId: 'tn-06', level: 2 },
                  { id: 'tn-06-02', name: '人才评估', link: 'http://assess.oa.com/assess/Flow/MyTask/AssessPending', parentId: 'tn-06', level: 2 },
                  { id: 'tn-06-03', name: '目标管理', link: 'http://tps.oa.com/goal/MyGoalList', parentId: 'tn-06', level: 2 },
                  { id: 'tn-06-04', name: '周边反馈', link: 'http://feedback.tps.oa.com/todoList', parentId: 'tn-06', level: 2 },
                  { id: 'tn-06-05', name: '职级评定', link: 'http://hrppe.oa.com/', parentId: 'tn-06', level: 2 },
                  { id: 'tn-06-06', name: '360度评估', link: 'http://yunassess.oa.com/', parentId: 'tn-06', level: 2 },
                  { id: 'tn-06-07', name: '转正评估', link: 'http://formal.oa.com/', parentId: 'tn-06', level: 2 }
                ]
              },
              { id: 'tn-07', name: '休假管理', link: 'http://holiday.oa.com/index', parentId: '0', level: 1 },
              {
                id: 'tn-08',
                name: '薪酬福利',
                parentId: '0',
                level: 1,
                children: [
                  { id: 'tn-08-01', name: '首页', link: 'https://pay.oa.com/staff', parentId: 'tn-08', level: 2 },
                  { id: 'tn-08-02', name: '员工薪酬自助', link: 'https://pay.oa.com/Staff/StaffSalary', parentId: 'tn-08', level: 2 },
                  { id: 'tn-08-03', name: '管理者查询', link: 'http://test.pay.oa.com/hradmin/admin/salarylist', parentId: 'tn-08', level: 2 },
                  { id: 'tn-08-04', name: '年终奖管理', link: 'http://test.pay.oa.com/sbcv2asi/bonus', parentId: 'tn-08', level: 2 },
                  { id: 'tn-08-05', name: '年度调薪', link: 'http://test.pay.oa.com/sbcv2asi/raise', parentId: 'tn-08', level: 2 },
                  { id: 'tn-08-06', name: '个人调薪', link: 'http://test.pay.oa.com/sbcv2singleraise/SingleRaiseRuntime/GetAssignments', parentId: 'tn-08', level: 2 },
                  { id: 'tn-08-07', name: 'LTI分配', link: 'https://lti.oa.com/hrltiassign', parentId: 'tn-08', level: 2 },
                  { id: 'tn-08-08', name: '系统设置', link: 'http://test.pay.oa.com/sbcex/sysconfig/adminsetlist.aspx?fromsubnavigator=true', parentId: 'tn-08', level: 2 }
                ]
              },
              { id: 'tn-09', name: '报表分析', link: 'http://tbi.oa.com/', parentId: '0', level: 1 }
            ]
          }
        }
      },
      initSidebar(data = []) {
        this.mainConfig = { ...this.mainConfig,
          menus: {
            map: {
              key: 'id',
              // text: 'name',
              url: 'link',
              // level: 'level',
              // children: 'children',
              pid: 'parent',
              root: '0'
            },
            data
          }
        }
      }
    }
  }
</script>

<style lang="less">
  @import "~assets/css/base.less";
</style>
