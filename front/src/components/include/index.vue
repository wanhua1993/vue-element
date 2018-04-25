<template>
    <div id="wrapper">
        <template class="wh_left">
            <v-top></v-top>
            <v-sidenav></v-sidenav>
        </template>
        <div class="wh_content_box">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import vTop from "@/components/include/myTop.vue";
import vSidenav from "@/components/include/sidenav.vue";
export default {
  name: "home",
  components: {
    vTop,
    vSidenav
  },
  data() {
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
.wh_left {
  width: 15%;
  float: left;
}
.wh_content_box {
  position: absolute;
  top: 60px;
  right: 0;
  width: 85%;
  height: 100%;
}
</style>
