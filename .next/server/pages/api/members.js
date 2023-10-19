"use strict";
(() => {
var exports = {};
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 661:
/***/ ((module) => {

module.exports = require("sqlite3");

/***/ }),

/***/ 801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var sqlite3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(661);
/* harmony import */ var sqlite3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sqlite3__WEBPACK_IMPORTED_MODULE_0__);

async function initializeDatabase() {
    return new Promise((resolve, reject)=>{
        const db = new sqlite3__WEBPACK_IMPORTED_MODULE_0__.Database("./mwl.db", (error1)=>{
            if (error1) {
                reject(error1);
            } else {
                db.exec(`
          CREATE TABLE IF NOT EXISTS members (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            memberCount INTEGER NOT NULL
          );
        `, (error)=>{
                    if (error) {
                        reject(error);
                    } else {
                        resolve(db);
                    }
                });
            }
        });
    });
}
async function handler(req, res) {
    /**
   * @type boolean
   */ const added = Boolean(req.query.added);
    try {
        const db = await initializeDatabase();
        let members = await new Promise((resolve, reject)=>{
            db.get("SELECT * FROM members", (error, row)=>{
                if (error) {
                    reject(error);
                } else {
                    resolve(row);
                }
            });
        });
        if (added) {
            const increment = 1;
            await new Promise((resolve, reject)=>{
                db.run("UPDATE members SET memberCount = memberCount + ?", increment, (error)=>{
                    if (error) {
                        reject(error);
                    } else {
                        resolve();
                    }
                });
            });
            members = await new Promise((resolve, reject)=>{
                db.get("SELECT * FROM members", (error, row)=>{
                    if (error) {
                        reject(error);
                    } else {
                        resolve(row);
                    }
                });
            });
            res.status(200).json({
                success: true,
                message: `${members.memberCount}`
            });
            return;
        }
        if (!members) {
            await new Promise((resolve, reject)=>{
                db.run("INSERT INTO members (memberCount) VALUES (0)", (error)=>{
                    if (error) {
                        reject(error);
                    } else {
                        resolve();
                    }
                });
            });
            members = await new Promise((resolve, reject)=>{
                db.get("SELECT * FROM members", (error, row)=>{
                    if (error) {
                        reject(error);
                    } else {
                        resolve(row);
                    }
                });
            });
        }
        if (Math.random() < 0.2) {
            const increment = Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
            await new Promise((resolve, reject)=>{
                db.run("UPDATE members SET memberCount = memberCount + ?", increment, (error)=>{
                    if (error) {
                        reject(error);
                    } else {
                        resolve();
                    }
                });
            });
            members = await new Promise((resolve, reject)=>{
                db.get("SELECT * FROM members", (error, row)=>{
                    if (error) {
                        reject(error);
                    } else {
                        resolve(row);
                    }
                });
            });
        }
        res.status(200).json({
            success: true,
            message: `${members.memberCount}`
        });
    } catch (error) {
        console.error(error);
        res.status(200).json({
            success: false,
            message: error
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(801));
module.exports = __webpack_exports__;

})();