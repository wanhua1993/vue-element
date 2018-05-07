const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');//用来创建和确认用户信息摘要 
const system_docking = require('../model/system_docking');
const token_ware = require('../middleware/token_ware');

/* GET home page. */
router.get('/sys_data', (req, res, next) => {
  system_docking.get_system_docking_data(function (ret) {
    res.send({
      status: '200',
      result: ret
    });
  })
});
// 编辑保险对接公司
router.post('/sys_update_data', (req, res) => {
  system_docking.sys_update_data(req, res, function (ret) {
    res.send({
      status: '200',
      result: ret
    });
  })
});
// 加载物流人员
router.get('/logistics_data', (req, res) => {
  system_docking.logistics_data(req, res, function (ret) {
    res.send({
      status: '200',
      result: ret
    });
  })
});
// 登录 获取token
router.post('/login_in', (req, res) => {
  const password = req.body.params.password;
  system_docking.login_in(req, res, function (ret) {
    if (ret.length) {
      // 说明 该用户存在
      // 则获取token
      if (ret[0].password == password) {
        // 创建token
        var token = jwt.sign(ret[0], 'app.get(superSecret)', {
          'expiresIn': 1440 // 设置过期时间
        });
        res.send({
          status: 200,
          result: ret,
          token: token
        });
      } else {
        res, send({
          status: 100200,
          result: '密码填写错误'
        });
      }

    } else {
      // 说明该用户不存在 应该返回登录
      res.send({
        status: 100100,
        result: '该用户不存在 请返回注册'
      });
    }
  });
});
module.exports = router;
