<template>
    <div class="wh_sys_user">
        <div class="wh_sys_add">
          <el-button type="primary" icon="el-icon-edit" @click='add'>添加保险公司</el-button>
        </div>
        <wh-table :tableData='tableData' :value='value' @tableSubmit='table_submit' :addCompany='addCompany' @cancel='cancel'></wh-table>
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
    // 加载 数据 这里加载
    load_data() {
      this.axios
        .get("/sys_data")
        .then(res => {
          // 响应成功回调
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
    add() {
      this.addCompany = true;
    },
    // 编辑保险公司数据
    table_submit(val, bool) {
      this.addCompany = bool;
      var that = this;
      if(val[0] == undefined) {
        console.log('这是在增加');
      } else {
        this.axios
        .post("/sys_update_data", {
          params: val
        })
        .then(res => {
          res.data.result.number = val[11];
          // 响应成功回调
          for (var key in res.data.result) {
            that.tableData[val[11] - 1][key] = res.data.result[key];
          }
        })
        .catch(e => {
          // 打印一下错误
          console.log(e);
        });
      }   
    },
    // 取消
    cancel(bool) {
      this.addCompany = bool;
    }
  },
  data() {
    return {
      addCompany: false,
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
  },
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
      console.log(to);
    }
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
