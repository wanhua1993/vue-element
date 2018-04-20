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

module.exports = router;
