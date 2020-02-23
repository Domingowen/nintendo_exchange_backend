// const koa = require('koa');
// const router = require('koa-router');
import * as Koa from "koa";
import * as Router from "koa-router";
import * as Cors from "@koa/cors";
import * as helmet from "koa-helmet";
import * as koaBody from "koa-body";
import jwt from "koa-jwt";
import ip from "@t6ip";
const app = new Koa();
const router = new Router();
app.use(helmet());
app.use(Cors());
app.use(koaBody());

app.listen(3000, ip(), () => {
    console.log("node sever is starting!! " + ip() + "3000");
});
