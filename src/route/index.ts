import fs from 'fs';
// import Router from 'koa-router';
import path from 'path';
// console.log(path.join(__dirname));
const routerCombine = app => {
    // console.log(app);
    fs.readdir(path.join(__dirname), (err, res) => {
        res.forEach((val, index) => {
            if (val !== "index.ts") {
                let router = require(`./${val}`);
                app.use(router.routes(), router.allowedMethods());
            }
        });
    });
};
export default routerCombine;