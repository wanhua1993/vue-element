<template>
<el-menu-item-group>
    <el-menu-item v-for='(val, index) in item.children' :index="String(index)" :key='index' >
        <router-link :to='val.path'>
          <i class="el-icon-more"></i>
          {{val.title}}
          </router-link>
    </el-menu-item>
</el-menu-item-group>
</template>

<script>
export default {
  name: "header",
  components: {},
  props: ['item', 'navIndex'],
  created: function() {},
  mounted: function() {},
  data: function() {
    return {
     
    };
  },
  methods: {
    
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
</style>
