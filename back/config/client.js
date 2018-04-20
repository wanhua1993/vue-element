var Resource = require("APICloud").Resource;
const app = require('../config/database').client;

const client = new Resource(app.appId, app.appToken);

module.exports = client;