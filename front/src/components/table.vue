<template>
    <div class="wh_sys_user">
        <el-table :data="dataList" border style="width: 100%" fit >
            <el-table-column prop="number" label="序号" width="60" align="center"></el-table-column>
            <el-table-column v-for="(item, index) in value" :prop="item.key" :label="item.name" align="center" :key='index'></el-table-column>
            <el-table-column label="操作" align="center" width="150">
                <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="primary" size="small">编辑</el-button>
                                <el-button type="danger" size="small"  @click='deleteClick(scope.row)'>删除</el-button>
</template>
            </el-table-column>
        </el-table>
        <pagination :tableData='tableData' @currentPage='currentPage'></pagination>

        <el-dialog title="详情页" :visible.sync="dialogFormVisible" width='500px'>
            <el-form :model="form">
            <el-form-item v-for='(item,index) in value' :label="item.name" :label-width="formLabelWidth" :key='index'>
                <el-input v-model="formArr[index]" auto-complete="off"></el-input>
            </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirm_update()">确 定</el-button>
            </div>
      </el-dialog>
    </div>
</template>

<script>
import pagination from "@/components/pagination.vue";
export default {
  components: {
    pagination
  },
  props: ["tableData", "value"],
  data() {
    return {
      formLabelWidth: "80px",
      dialogFormVisible: false,
      dataList: [],
      loading: true,
      form: {},
      formArr: [],
      update_id: ""
    };
  },
  mounted() {
    const loading = this.$loading({
      target: ".el-table",
      lock: true,
      text: "拼命加载中",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)"
    });
    setTimeout(() => {
      loading.close();
      this.dataList = this.tableData.slice(0, 10);
    }, 2000);
  },
  methods: {
      // 点击编辑
    handleClick(row) {
      this.update_id = row.id;
      for (let val in row) {
        this.form[val] = row[val];
        this.formArr.push(row[val]);
      }
      this.dialogFormVisible = true;
    },
    // 点击删除
    deleteClick(row) {
        this.update_id = row.id;
        console.log(this.update_id);
        // 这里写删除的请求
    },
    currentPage(val) {
      this.dataList = this.tableData.slice(10 * (val - 1), 10 * val);
    },
    // 修改资料
    confirm_update() {
      this.dialogFormVisible = false;
      console.log(this.update_id);
      // 这里写 更新数据 的请求
    }
  }
};
</script>
<style scoped>
.wh_sys_user {
  margin: 20px;
  padding: 10px;
}
</style>
