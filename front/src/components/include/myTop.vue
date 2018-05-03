<template>
  <el-container>
    <el-header>
      <hamburger class="hamburger-container"></hamburger>
      后台运营管理系统
      <div class="wh_drop">
        <el-dropdown trigger="click" @command='handleCommand'>
          <span class="el-dropdown-link">
                                       爱吃西红柿<i class="el-icon-arrow-down el-icon--right"></i>
                                      </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command='0'>修改密码</el-dropdown-item>
            <el-dropdown-item command='1'>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width='500px'>
        <el-form :model="form">
          <el-form-item label="旧密码" :label-width="formLabelWidth">
            <el-input v-model="form.old_password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="新密码" :label-width="formLabelWidth">
            <el-input v-model="form.new_password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" :label-width="formLabelWidth">
            <el-input v-model="form.confirm_password" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </el-header>
  </el-container>
</template>

<script>
import hamburger from "@/components/hamburger.vue";
export default {
  name: "header",
  components: {
    hamburger
  },
  data: function() {
    return {
      dialogFormVisible: false,
      form: {
        old_password: "",
        new_password: "",
        confirm_password: ""
      },
      formLabelWidth: "80px",
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 退出登录
    handleCommand(val) {
      if (val == "0") {
        console.log("修改密码");
        this.dialogFormVisible = true;
      }
      if (val == "1") {
        this.$confirm("确定要退出系统么？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$router.push("/");
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消"
            });
          });
      }
    }
  }
};
</script>

<style scoped>
.el-container {
  width: 100%;

  height: 100%;
  overflow: hidden;
}
.el-header,
.el-footer {
  background-color: #b5cdf0;
  color: #333;
  text-align: center;
  line-height: 60px;
  font-size: 26px;
  position: fixed;
  z-index: 1000;
  width: 100%;
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
.wh_drop {
  position: absolute;
  right: 40px;
  top: 0;
  height: 60px;
  line-height: 60px;
  cursor: pointer;
}
</style>
