<template>
    <div class="block wh_pagination">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage1" 
        :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length" background>
        </el-pagination>
    </div>
</template>
<script>
// current-page: 当前页数  page-size: 一页多少条   total：总条数
export default {
  props: ["tableData"],
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.$emit('currentPage', val);//select事件触发后，自动触发showCityName事件
    }
  },
  data() {
    return {
      currentPage1: 1, //当前页数
      currentPage2: 2,
      currentPage3: 3,
      currentPage4: 4
    };
  }
};
</script>
<style scoped>
.wh_pagination {
  margin-top: 20px;
}
</style>
