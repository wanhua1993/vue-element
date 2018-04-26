<template>
    <div class="wh_sys_user">
        <div class="wh_sys_add">
          <el-button type="primary" icon="el-icon-edit" @click='add'>添加物流人员</el-button>
        </div>
        <wh-table :tableData='tableData' :value='value' @tableSubmit='table_submit' :addCompany='addCompany' @cancel='cancel'></wh-table>
    </div>
</template>

<script>
import whTable from "@/components/table.vue";
import {formatDate} from '@/date.js';
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
        .get("/logistics_data")
        .then(res => {
          // 响应成功回调
          this.tableData = res.data.result;
          console.log(this.tableData);
          for (var i = 0; i < this.tableData.length; i++) {
            this.tableData[i].number = i + 1;
            this.tableData[i].updatedAt = formatDate(new Date(Date.parse(this.tableData[i].updatedAt)), "yyyy-MM-ddhh:mm:ss");
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
          name: "姓名",
          key: "name"
        },
        {
          name: "所属物流公司",
          key: "company"
        },
        {
          name: "工号",
          key: "work_number"
        },
        {
          name: "联系方式",
          key: "phone_number"
        },
        {
          name: "分管负责人",
          key: "responsible_person"
        },
        {
          name: "最近登录时间",
          key: "updatedAt"
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
