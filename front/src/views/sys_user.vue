<template>
    <div class="wh_sys_user">
        <div class="wh_sys_add">
          <el-button type="primary" icon="el-icon-edit" @click='add'>添加保险公司</el-button>
        </div>
        <wh-table :tableData='tableData' :value='value' @tableSubmit='table_submit'></wh-table>
    </div>
</template>

<script>
import whTable from "@/components/table.vue";
export default {
  components: {
    whTable
  },
  mounted() {
    this.load_data();
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    // 加载 数据
    load_data() {
      this.axios
        .get("/sys_data")
        .then(res => {
          // 响应成功回调
          console.log(res);
          this.tableData = res.data.result;
          for (var i = 0; i < this.tableData.length; i++) {
            this.tableData[i].number = i + 1;
          }
        })
        .catch(e => {
          // 打印一下错误
          console.log(e);
        });
    },
    // add 添加保险公司
    add() {},
    // 编辑保险公司数据
    table_submit(val) {
      this.axios
        .post("/sys_update_data",{
          params: val
        })
        .then(res => {
          // 响应成功回调
          this.$router.push('/index/sys_user');
        })
        .catch(e => {
          // 打印一下错误
          console.log(e);
        });
    }
  },
  data() {
    return {
      value: [
        {
          name: "保险公司名称",
          key: "company_name"
        },
        {
          name: "保险公司简介",
          key: "company_Introduction"
        },
        {
          name: "业务负责人",
          key: "business_owner"
        },
        {
          name: "联系电话",
          key: "business_phone"
        },
        {
          name: "对接负责人",
          key: "docking_owner"
        },
        {
          name: "联系电话",
          key: "docking_phone"
        },
        {
          name: "系统介入状态",
          key: "status"
        },
        {
          name: "备注",
          key: "note"
        }
      ],
      tableData: []
    };
  }
};
</script>
<style scoped>
.wh_sys_user {
  margin: 20px;
  padding: 10px;
}
.wh_sys_add {
  text-align: left;
  margin-left: 20px;
  padding: 10px;
  border: 1px solid #ddd;
}
</style>
