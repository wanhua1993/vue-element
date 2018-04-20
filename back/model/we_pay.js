router.get('/getmyticket', function (req, myres) {
    myres.status(200);
    var token = req.query.token;
    var filename = 'sharet' + token + '.txt';
    var ischeck = '0';
    fs.exists(filename, function (exists) {
        if (exists) {
            // serve file
            ischeck = '1';
            var result1 = JSON.parse(fs.readFileSync('./' + filename));
            var oldtime = result1.time;
            oldtime = parseInt(oldtime);
            var timestamp1 = Date.parse(new Date());
            count = timestamp1 - oldtime;
            // 快要过期重新获得
            count = count / 1000;
            if (count > 7000 || count == 7000 || result1.ticket == undefined || result1.ticket == "undefined") {
                var ischeck = '0'
                var https = require("https");
                var iconv = require("iconv-lite");

                var url = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=' + token + '&type=jsapi';
                https.get(url, function (res) {
                    var datas = [];
                    var size = 0;
                    res.on('data', function (data) {
                        datas.push(data);
                        size += data.length;
                    });
                    res.on("end", function () {
                        var buff = Buffer.concat(datas, size);
                        var result = iconv.decode(buff, "utf8"); //转码//var result = buff.toString();//不需要转编码,直接tostring
                        var json = []
                        json.push(result)
                        result = JSON.parse(result);
                        var myresutl = {}
                        myresutl.ticket = result.ticket
                        myresutl.time = Date.parse(new Date());
                        fs.writeFileSync('./' + filename, JSON.stringify(myresutl));
                        myres.send(myresutl)
                        return false
                    });
                }).on("error", function (err) {
                    Logger.error(err.stack)
                    callback.apply(null);
                });
            } else {
                myres.send(result1)
                return false
            }
        } else {
            // mongodb
            var ischeck = '0'
            var https = require("https");
            var iconv = require("iconv-lite");

            var url = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=' + token + '&type=jsapi';
            https.get(url, function (res) {
                var datas = [];
                var size = 0;
                res.on('data', function (data) {
                    datas.push(data);
                    size += data.length;
                });
                res.on("end", function () {
                    var buff = Buffer.concat(datas, size);
                    var result = iconv.decode(buff, "utf8"); //转码//var result = buff.toString();//不需要转编码,直接tostring
                    var myresutl = {}
                    var json = []
                    json.push(result)
                    result = JSON.parse(result);

                    myresutl.ticket = result.ticket
                    myresutl.time = Date.parse(new Date());
                    fs.writeFileSync('./' + filename, JSON.stringify(myresutl));
                    myres.send(myresutl)
                    return false
                });
            }).on("error", function (err) {
                Logger.error(err.stack)
                callback.apply(null);
            });
        }
    });
    if (ischeck == '1') {
        return false
    }
})

// 
router.get('/getpaytoken', function (req, myres) {
    myres.status(200)
    var appID = req.query.wxid;
    var appSecret = req.query.miyao;
    var appSecret = req.query.miyao;
    var code = req.query.code
    var filename = 'share' + appID + code + '.txt'
    var ischeck = '0'
    fs.exists(filename, function (exists) {
        if (exists) {
            // serve file
            ischeck = '1'
            var result1 = JSON.parse(fs.readFileSync('./' + filename));
            var oldtime = result1.time
            oldtime = parseInt(oldtime)
            var timestamp1 = Date.parse(new Date());

            count = timestamp1 - oldtime
            count = count / 1000

            if (count > 7000 || count == 7000 || result1.access_token == undefined || result1.access_token == "undefined") {
                var ischeck = '0'
                var https = require("https");
                var iconv = require("iconv-lite");

                var url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=" + appID + "&secret=" + appSecret + "&code=" + code + "&grant_type=authorization_code";
                https.get(url, function (res) {
                    var datas = [];
                    var size = 0;
                    res.on('data', function (data) {
                        datas.push(data);
                        size += data.length;
                    });
                    res.on("end", function () {
                        var buff = Buffer.concat(datas, size);
                        var result = iconv.decode(buff, "utf8"); //转码//var result = buff.toString();//不需要转编码,直接tostring
                        var json = []
                        json.push(result)
                        result = JSON.parse(result);
                        var myresutl = {}
                        myresutl.access_token = result.access_token
                        myresutl.openid = result.openid
                        myresutl.time = Date.parse(new Date());
                        fs.writeFileSync('./' + filename, JSON.stringify(myresutl));
                        myres.send(myresutl)
                        return false
                    });
                }).on("error", function (err) {
                    Logger.error(err.stack)
                    callback.apply(null);
                });
            } else {
                myres.send(result1)
                return false
            }
        } else {
            // mongodb
            var ischeck = '0'
            var https = require("https");
            var iconv = require("iconv-lite");

            var url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=" + appID + "&secret=" + appSecret + "&code=" + code + "&grant_type=authorization_code";
            https.get(url, function (res) {
                var datas = [];
                var size = 0;
                res.on('data', function (data) {
                    datas.push(data);
                    size += data.length;
                });
                res.on("end", function () {
                    var buff = Buffer.concat(datas, size);
                    var result = iconv.decode(buff, "utf8"); //转码//var result = buff.toString();//不需要转编码,直接tostring
                    var json = []
                    json.push(result)
                    result = JSON.parse(result);
                    var myresutl = {}
                    myresutl.access_token = result.access_token
                    myresutl.openid = result.openid
                    myresutl.time = Date.parse(new Date());
                    fs.writeFileSync('./' + filename, JSON.stringify(myresutl));
                    myres.send(myresutl)
                    return false
                });
            }).on("error", function (err) {
                Logger.error(err.stack)
                callback.apply(null);
            });
        }
    });
})

//
router.get('/wxpayfor9', function (req, res) {
    res.status(200)
    var wxPayment = require('wx-payment');
    var wxid = req.query.wxid
    var mchid = req.query.mchid
    var apikey = req.query.apikey
    var filename = './' + wxid + '.p12'
    var body = 'junzeng'
    var timestamp = Date.parse(new Date());
    timestamp = timestamp.toString()
    var price = req.query.price
    price = parseInt(price) * 100
    var openid = req.query.openid
    var orderid = req.query.orderid
    var pfx = fs.readFileSync(filename)
    wxPayment.init({
        appid: wxid,
        mch_id: mchid,
        apiKey: apikey, //微信商户平台API密钥
        pfx: pfx, //微信商户平台证书 (optional，部分API需要使用)
    });
    wxPayment.createUnifiedOrder({
        body: body, // 商品或支付单简要描述
        out_trade_no: orderid, // 商户系统内部的订单号,32个字符内、可包含字母
        total_fee: price,
        spbill_create_ip: '101.200.169.185',
        notify_url: 'http://wxpayment_notify_url',
        trade_type: 'JSAPI',
        product_id: orderid,
        openid: openid
    }, function (err, result) {
        res.json(result)
    });
})
//

router.get('/gettoken', function (req, myres) {
    myres.status(200)

    var appID = req.query.wxid;
    var appSecret = req.query.miyao;
    var appSecret = req.query.miyao;

    var filename = 'share' + appSecret + '.txt'
    var ischeck = '0'
    fs.exists(filename, function (exists) {
        if (exists) {
            // serve file
            ischeck = '1'
            var result1 = JSON.parse(fs.readFileSync('./' + filename));
            var oldtime = result1.time
            oldtime = parseInt(oldtime)
            var timestamp1 = Date.parse(new Date());

            count = timestamp1 - oldtime
            count = count / 1000

            if (count > 7000 || count == 7000 || result1.access_token == undefined || result1.access_token == "undefined") {
                var ischeck = '0'
                var https = require("https");
                var iconv = require("iconv-lite");

                var url = "https://api.weixin.qq.com/cgi-bin/token?appid=" + appID + "&secret=" + appSecret + "&grant_type=client_credential";
                https.get(url, function (res) {
                    var datas = [];
                    var size = 0;
                    res.on('data', function (data) {
                        datas.push(data);
                        size += data.length;
                    });
                    res.on("end", function () {
                        var buff = Buffer.concat(datas, size);
                        var result = iconv.decode(buff, "utf8"); //转码//var result = buff.toString();//不需要转编码,直接tostring
                        var json = []
                        json.push(result)
                        result = JSON.parse(result);
                        var myresutl = {}
                        myresutl.access_token = result.access_token
                        myresutl.time = Date.parse(new Date());
                        fs.writeFileSync('./' + filename, JSON.stringify(myresutl));
                        myres.send(myresutl)
                        return false
                    });
                }).on("error", function (err) {
                    Logger.error(err.stack)
                    callback.apply(null);
                });
            } else {
                myres.send(result1)
                return false
            }
        } else {
            // mongodb
            var ischeck = '0'
            var https = require("https");
            var iconv = require("iconv-lite");

            var url = "https://api.weixin.qq.com/cgi-bin/token?appid=" + appID + "&secret=" + appSecret + "&grant_type=client_credential";
            https.get(url, function (res) {
                var datas = [];
                var size = 0;
                res.on('data', function (data) {
                    datas.push(data);
                    size += data.length;
                });
                res.on("end", function () {
                    var buff = Buffer.concat(datas, size);
                    var result = iconv.decode(buff, "utf8"); //转码//var result = buff.toString();//不需要转编码,直接tostring
                    var json = []
                    json.push(result)
                    result = JSON.parse(result);
                    var myresutl = {}
                    myresutl.access_token = result.access_token
                    myresutl.time = Date.parse(new Date());
                    fs.writeFileSync('./' + filename, JSON.stringify(myresutl));
                    myres.send(myresutl)
                    return false
                });
            }).on("error", function (err) {
                Logger.error(err.stack)
                callback.apply(null);
            });
        }
    });
    if (ischeck == '1') {
        return false
    }
})