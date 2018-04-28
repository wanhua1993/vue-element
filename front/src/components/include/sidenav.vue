<template>
<el-container :style='sidebar.width_0'>
  <el-aside width='100%'>
    <el-row>
      <el-col :span="24">
        <el-menu default-active="0" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" unique-opened background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-submenu v-for='(item, index) in menu' :index="String(index)" :key='index' v-if='item.children.length ==0'>
            <template slot="title">
              <i :class="item.icon"></i>
              <router-link :to='item.path'><span>{{item.name}}</span></router-link>
            </template>
          </el-submenu>
          <el-submenu v-for='(item, index) in menu' :index="String(index)" :key='index' v-if='item.children.length !=0'>
            <template slot="title">
              <i :class="item.icon"></i>
                <router-link to='item.path'></router-link>
              <span>{{item.name}}</span>
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
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "header",
  components: {
    navMenu,
    menu: []
  },
  created() {
    this.menu = this.menuList;

  },
  mounted: function() {

  },
  computed: {
    ...mapGetters(["menuitems", "sidebar", "menuList"])
  },
  data: function() {
    return {
      
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
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 1000;
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
