<template>
<el-container>
  <el-aside width='100%'>
    <el-row>
      <el-col :span="24">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" unique-opened background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-submenu v-for='(item, index) in value' :index="String(index)" :key='index' v-if='item.children.length ==0'>
            <template slot="title">
              <i :class="item.icon"></i>
              <router-link :to='item.path'><span>{{item.title}}</span></router-link>
            </template>
          </el-submenu>
          <el-submenu v-for='(item, index) in value' :index="String(index)" :key='index' v-if='item.children.length !=0'>
            <template slot="title">
              <i :class="item.icon"></i>
                <router-link to='item.path'></router-link>
              <span>{{item.title}}</span>
            </template>
            <nav-menu :item='item'></nav-menu>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</el-container>
</template>

<script>
import navMenu from "@/components/include/navmenu.vue";
export default {
  name: "header",
  components: {
    navMenu
  },
  created: function() {},
  mounted: function() {},
  data: function() {
    return {
      value: [
        {
          id: "1",
          icon: "el-icon-tickets",
          title: "管理菜单",
          path: "/index/first",
          children: []
        },
        {
          id: "2",
          icon: "el-icon-news",
          title: "保险公司管理",
          children: [
            {
              pid: "1",
              path: "/index/sys_user",
              title: "系统对接管理"
            },
            {
              pid: "2",
              path: "/index/first",
              title: "定损员管理"
            },
            {
              pid: "3",
              path: "/index/signUp",
              title: "用户注册"
            }
          ]
        },
        {
          id: "3",
          icon: "el-icon-date",
          title: "物流管理",
          children: [
            {
              pid: "1",
              path: "/index/create_emit",
              title: "物流人员备案"
            }
          ]
        },
        {
          id: '4',
          icon: 'el-icon-goods',
          title: '回收单管理',
          children: [
            {
              pid: '1',
              path: '',
              title: '订单编号'
            }
          ]
        },
        {
          id: '5',
          icon: 'el-icon-menu',
          title: '仓储管理',
          children: [
            {
              pid: '1',
              path: '',
              title: '库管人员备案'
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.el-container {
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 60px;
  left: 0;
  width: 15%;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  font-size: 26px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 100%;
}

.hamburger-container {
  line-height: 58px;
  height: 30px;
  float: left;
  padding: 0 10px;
}
</style>
