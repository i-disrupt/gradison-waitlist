"use strict";
(() => {
var exports = {};
exports.id = 320;
exports.ids = [320];
exports.modules = {

/***/ 661:
/***/ ((module) => {

module.exports = require("sqlite3");

/***/ }),

/***/ 151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "email-validator"
const external_email_validator_namespaceObject = require("email-validator");
var external_email_validator_default = /*#__PURE__*/__webpack_require__.n(external_email_validator_namespaceObject);
;// CONCATENATED MODULE: external "discord.js"
const external_discord_js_namespaceObject = require("discord.js");
// EXTERNAL MODULE: external "sqlite3"
var external_sqlite3_ = __webpack_require__(661);
;// CONCATENATED MODULE: external "moment"
const external_moment_namespaceObject = require("moment");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_namespaceObject);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/join.js





async function handler(req, res) {
    if (!req.body.email) res.status(200).json({
        success: false,
        message: "Email field is empty."
    });
    if (external_email_validator_default().validate(req.body.email)) {
        const db = new external_sqlite3_.Database("./waitlist.db", (err1)=>{
            if (err1) {
                console.error("Error opening database:", err1.message);
            } else {
                // Create the emails table if it doesn't exist
                db.run(`CREATE TABLE IF NOT EXISTS emails (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              email TEXT UNIQUE NOT NULL
          )`, [], (err)=>{
                    if (err) {
                        console.error("Error creating table:", err.message);
                    }
                });
            }
        });
        let error = "Something went wrong.";
        // Send discord webhook here
        try {
            const webhookClient = new external_discord_js_namespaceObject.WebhookClient({
                id: "1154934953805623376",
                token: "HdV87n1LFQKPIWYY-ganfFCaj7Hyf6k0hCHE5M540RHvExJFBBFRHAcNcpQ6b8f-0az3"
            });
            const embed = new external_discord_js_namespaceObject.EmbedBuilder().setTitle("Waitlist | Someone joined!").setDescription(`[${external_moment_default()().format("YYYY-MM-DD")}] - New user entered waitlist!`).addFields({
                name: "Email",
                value: req.body.email,
                inline: true
            }, {
                name: "Valid email?",
                value: "Yes",
                inline: true
            }, {
                name: "Country",
                value: `${req.body.country}`
            }).setColor(external_discord_js_namespaceObject.Colors.Green).setTimestamp();
            const query = "INSERT INTO emails (email) VALUES (?)";
            db.run(query, [
                req.body.email
            ], function(err) {
                if (err) {
                    if (err.code === "SQLITE_CONSTRAINT") {
                        error = "Email already exists!";
                        return res.status(200).json({
                            success: false,
                            message: error
                        });
                    }
                }
            });
            external_axios_default().get("https://gradison.ca/api/members?added=true").then((res)=>{
                console.log("Added member");
            }).catch((err)=>{
                console.log(err);
                console.log("Couldn't add member");
            });
            await webhookClient.send({
                embeds: [
                    embed
                ]
            });
            res.status(200).json({
                success: true,
                message: "You've joined the waitlist!"
            });
        } catch (error1) {
            console.error(error1);
            res.status(200).json({
                success: false,
                message: error1
            });
        }
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(151));
module.exports = __webpack_exports__;

})();