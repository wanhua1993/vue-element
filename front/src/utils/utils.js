const utils = {
    // 存储localStorage
    setStore(name, content) {
        if (!name) return;
        if (typeof content !== 'string') {
            content = JSON.stringify(content);
        }
        window.localStorage.setItem(name, content);
    },
    // 获取localStorage
    getStore(name) {
        if (!name) return;
        var value = window.localStorage.getItem(name);
        if (value !== null) {
            try {
                value = JSON.parse(value);
            } catch (e) {
                value = value;
            }
        }
        return value;
    },
    // 删除localStorage
    removeStore(name) {
        if (!name) return;
        window.localStorage.removeItem(name);
    },
    // 時間格式化
    formatDate(date, type) {
        var year = date.getFullYear();//年
        var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;//月
        var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();//日
        var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();//时
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();//分
        var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();//秒
        var milliseconds = date.getMilliseconds() < 10 ? "0" + date.getMilliseconds() : date.getMilliseconds() //毫秒
        if (type == 1) {
            return year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds + "." + milliseconds;
        } else if (type == 2) {
            return year + "" + month + "" + day + "" + hour + "" + minutes + "" + seconds;
        } else if (type == 3) {
            return year + "-" + month + "-" + day;
        } else {
            return year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
        }
    },
    // 时间转换
    parseToDate() {
        var result = "";
        var year = timeValue.substr(0, 4);
        var month = timeValue.substr(4, 2);
        var date = timeValue.substr(6, 2);
        var hour = timeValue.substr(8, 2);
        var minute = timeValue.substr(10, 2);
        var second = timeValue.substr(12, 2);
        result = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
        return result;
    },
    // 判断空值
    isEmpty(keys) {
        if (typeof keys === "string") {
            keys = keys.replace(/\"|&nbsp;|\\/g, '').replace(/(^\s*)|(\s*$)/g, "");
            if (keys == "" || keys == null || keys == "null" || keys === "undefined") {
                return true;
            } else {
                return false;
            }
        } else if (typeof keys === "undefined") {  // 未定义
            return true;
        } else if (typeof keys === "number") {
            return false;
        } else if (typeof keys === "boolean") {
            return false;
        } else if (typeof keys == "object") {
            if (JSON.stringify(keys) == "{}") {
                return true;
            } else if (keys == null) { // null
                return true;
            } else {
                return false;
            }
        }

        if (keys instanceof Array && keys.length == 0) {// 数组
            return true;
        }
    },
    // 返回两位的小数的字符串
    toFixedNum(num) {
        const tonum = Number(num).toFixed(2);
        return tonum;
    },
    //
    showMessage() {
        this.$message({
            showClose: true,
            message: '对不起，您暂无此操作权限~',
            type: 'success'
        });
    },
    // 读取base64
    readFile(file) {
        console.log(file)
        //var file = this.files[0];
        //判断是否是图片类型
        if (!/image\/\w+/.test(file.raw.type)) {
            alert("只能选择图片");
            return false;
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            var filedata = {
                filename: file.name,
                filebase64: e.target.result
            }
            alert(e.target.result)
        }
    },
    // 需要递归循环children,重新赋值component
    generateRoutesFromMenu(menuData = [], routes = [], componentNew) {
        for (var i = 0; i < menuData.length; i++) {
            const menuobj = menuData[i]
            const component = menuData[i].component
            if (component && component !== 'content') {
                componentNew = require('@/views/' + menuData[i].component + '.vue')
            } else {
                componentNew = require('@/components/include/' + menuData[i].component + '.vue');
            }
            menuobj['component'] = componentNew.default;
            routes.push(menuobj);
            this.generateRoutesFromMenu(menuobj.children);
        }
        return routes
    }
}
export default utils