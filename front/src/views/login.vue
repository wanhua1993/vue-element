<template>
  <div class="wh_back">
    <transition name="form-fade" mode="in-out">
      <section v-show="showLogin" class="form_contianer">
        <p class="wh_title">爱吃番茄柿后台管理</p>
        <div class="wh_inputBox">
          <el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginForm">
            <el-form-item prop="username">
              <span class="fa-tips"><i class="fa fa-user"></i></span>
              <el-input class="area" type="text" placeholder="用户名" v-model="loginForm.username" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <span class="fa-tips"><i class="fa fa-lock"></i></span>
              <el-input class="area" type="password" placeholder="密码" v-model="loginForm.password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="danger" @click="loginIn(loginForm)" class="submit_btn">登陆</el-button>
            </el-form-item>
          </el-form>
          <div class="tiparea">
            <p class="wxtip">温馨提示：</p>
            <p class="tip">未登录过的新用户，自动注册</p>
            <p class="tip">注册过的用户可凭账号密码登录</p>
          </div>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
import * as mUtils from "../utils/mUtils";
import home  from '@/views/home'
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "login",
  data: function() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.loginForm.password !== "") {
          this.$refs.loginForm.validateField("password");
        }
        callback();
      }
    };
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用戶名"));
      } else {
        if (this.loginForm.username !== "") {
          this.$refs.loginForm.validateField("username");
        }
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ],
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          },
          {
            min: 2,
            max: 8,
            message: "长度在 2 到 8 个字符",
            trigger: "blur"
          }
        ]
      },
      showLogin: false
    };
  },
  computed: {
    ...mapGetters(["menuList", "isLoadRoutes"])
  },
  mounted() {
    this.showLogin = true;
  },
  methods: {
    ...mapActions(["addMenu", "loadRoutes"]),
    loginIn: function(loginForm) {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.generateMenuPushIndex();
        } else {
          return false;
        }
      });
    },
    //模拟动态生成菜单并定位到index
    generateMenuPushIndex() {
      const menuList = [
        {
          id: 1,
          path: "/index",
          name: "首页",
          component: "first",
          icon: "el-icon-tickets",
          noDropdown: true,
          children: [{ path: "/index", name: "首页", component: "first" }]
        },
        {
          id: 2,
          path: "/system",
          name: "保险公司管理",
          component: "content",
          icon: "el-icon-menu",
          noDropdown: false,
          children: [
            {
              pid: "1",
              path: "/sys_user",
              name: "系统对接机构",
              component: "sys_user"
            },
            {
              pid: "2",
              path: "/create_emit",
              name: "定损员管理",
              component: "create_emit"
            },
            {
              pid: "3",
              path: "/sign_up",
              name: "用户注册",
              component: "sign_up"
            }
          ]
        },
        {
          id: 3,
          path: "/logis",
          name: "物流管理",
          component: "content",
          icon: "el-icon-goods",
          noDropdown: false,
          children: [
            {
              pid: "1",
              path: "/logistics",
              name: "物流人员备案",
              component: "logistics"
            }
          ]
        }
        
      ];
      mUtils.setStore("menuList", menuList); // 將菜單信息放到緩存中
      this.addMenu(menuList); // 生成菜单,将菜单放入store 。以後在渲染菜單的時候從store中拿即可
      if (!this.isLoadRoutes) {
        // 一個菜單的 狀態 true false
        const routes = mUtils.generateRoutesFromMenu(menuList); //根据菜单生成的路由信息,需要将数据库返回的对象key值转成小写
        const asyncRouterMap = [
          // {
          //   path: "/404",
          //   name: "404",
          //   hidden: true,
          //   component: ''
          // },
          {
            path: "/index",
            name: "name",
            hidden: true,
            // component: require("./index").home,
            component: require("@/views/home.vue").default,
            redirect: "/index",
            children: routes
          }
        ];
        this.$router.addRoutes(asyncRouterMap);
        this.loadRoutes(); // true,第二次进来不用再去加载路由
      }
      // 登录 发送请求 获取 token 值
      this.axios
        .post("/login_in", {
          params: this.loginForm
        })
        .then(res => {
            var token = res.data.token;
            localStorage.token = token;
            this.$router.push("/index");
        })
        .catch(e => {
          // 打印一下错误
          console.log(e);
        });
      
    }
  },
  watch: {
    $route(to, from) {

    }
  }
};
</script>

<style scoped>
.wh_back {
  position: relative;
  background: cornflowerblue;
  width: 100%;
  height: 100%;
  text-align: center;
}
.wh_back .wh_title {
  margin-bottom: 20px;
  width: 400px;
  color: #fff;
  font-size: 30px;
}
.wh_inputBox {
  padding: 20px 10px 10px 10px;
  width: 400px;
  height: 235px;
  border-radius: 4px;
  border: 1px solid #fff;
}
.form_contianer {
  position: absolute;
  top: 40%;
  left: 50%;
  margin-top: -100px;
  margin-left: -200px;
}
.wh_input {
  margin-top: 20px;
}
.wh_row {
  margin-top: 20px;
}
.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s;
}
.form-fade-enter,
.form-fade-leave-active {
  transform: translate3d(0, -50px, 0);
  opacity: 0;
}
.tiparea p {
  padding: 2px 0;
  font-size: 14px;
  text-align: left;
  color: rgb(17, 243, 17);
}
.submit_btn {
  width: 130px;
}
</style>
