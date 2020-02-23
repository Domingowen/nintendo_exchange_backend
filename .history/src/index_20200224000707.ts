// const koa = require('koa');
// const router = require('koa-router');
import Koa from "koa";
import Router from "koa-router";
import Cors from "@koa/cors";
import helmet from "koa-helmet";
import KoaBody from "koa-better-body";
import jwt from "koa-jwt";
import ip from "ip";
const app = new Koa();
const router = new Router();
app.use(helmet());
app.use(Cors());
app.use(KoaBody());

app.listen(3000, ip.address(), () => {
    console.log("node sever is starting!! " + ip.address() + "3000");
});
