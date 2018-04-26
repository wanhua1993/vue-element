const client = require('../config/client');
const Model = client.Factory("system_docking");
const Model1 = client.Factory('personnel_management');
// 连接 apiCloud 数据库 
var query = {
    // 请求 数据
    get_system_docking_data(callback) {
        Model.query({
            filter: {
                "order": "id DESC",
                "limit": 1000
            }
        }, function (ret, err) {
            if (err) {
                console.log(err);
            } else {
                //处理数据 ret
                callback(ret);
            }
        })
    },
    // 编辑保险公司数据
    sys_update_data(req, res, callback) {
        var val = req.body.params;
        var id = val[0];
        var company_name = val[1];
        var company_Introduction = val[2];
        var business_owner = val[3];
        var docking_owner = val[4];
        var business_phone = val[5];
        var docking_phone = val[6];
        var status = val[7];
        var note = val[8];
        Model.save({"_id":id},{
            company_name: company_name,
            company_Introduction: company_Introduction,
            business_owner: business_owner,
            docking_owner: docking_owner,
            business_phone: business_phone,
            docking_phone: docking_phone,
            status: status,
            note: note
        },function(ret,err){
            if (err) {
                console.log(err);
            } else {
                //处理数据 ret
                callback(ret);
            }
        });
    },
    // 请求人员数据
    logistics_data(req, res, callback) {
        Model1.query({
            filter: {
                "order": "id DESC",
                "limit": 1000,
                "where": {
                    "type": '1'
                }
            }
        }, function (ret, err) {
            if (err) {
                console.log(err);
            } else {
                //处理数据 ret
                callback(ret);
            }
        })
    }
}
module.exports = query;