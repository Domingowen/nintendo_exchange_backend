// const koa = require('koa');
// const router = require('koa-router');
import * as Koa from "koa";
import * as Router from "koa-router";
import Cors from "@koa/cors";
import helmet from "koa-helmet";
import * as koaBody from "koa-better-body";
import jwt from "koa-jwt";
import ip from "ip";
const app = new Koa();
const router = new Router();
app.use(helmet({}));
app.use(Cors());
app.use(koaBody());

app.listen(3000, ip.address(), () => {
    console.log("node sever is starting!! " + ip.address() + "3000");
});
