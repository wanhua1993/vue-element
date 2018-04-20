const client = require('../config/client');
const Model = client.Factory("system_docking");

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
    }
}
module.exports = query;