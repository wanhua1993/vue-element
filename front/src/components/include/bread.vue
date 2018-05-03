<template>
    <div class="wh_bread" id='wh_bread' :style='vStyle'>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in levelList" :key='index' :to="{path: item.path}">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
    export default {
        props: ["vWidth"],
        data() {
            return {
                vStyle: {},
                levelList: []
            };
        },
        created() {
            this.getBreadcrumb();
        },
        methods: {
            getBreadcrumb() {
                // 前三个，只拿数组[0]的值；
                let matched = this.$route.matched.filter(item => item.name);
                const first = matched[0];
                if (first && first.path == "/index") {
                    matched = {};
                } else if (first && (first.path == "/userList" || first.path == "/infoList")) { // 这里判断的是 只有一个的
                    matched = [matched[0]];
                }
                this.levelList = matched;
                console.log(this.levelList);
            }
        },
        watch: {
            vWidth(v) {
                if (v.width == "100%") {
                    this.vStyle = {
                        left: "0"
                    };
                } else {
                    this.vStyle = {
                        left: "15%"
                    };
                }
            },
            $route() {
                this.getBreadcrumb();
            }
        }
    };
</script>
<style scoped>
    .wh_bread {
        position: fixed;
        top: 60px;
        left: 15%;
        padding: 0 10px;
        z-index: 1000;
        width: 100%;
        height: 44px;
        line-height: 44px;
        background: #d3dce6;
        font-size: 16px;
    }
    .el-breadcrumb {
        line-height: 3;
    }
</style>

