const express = require('express');
const router = express.Router();
let system_docking = require('../model/system_docking');
/* GET home page. */
router.get('/sys_data', (req, res, next) =>{
  system_docking.get_system_docking_data(function (ret){
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
module.exports = router;
