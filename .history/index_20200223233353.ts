// const koa = require('koa');
// const router = require('koa-router');
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as Cors from '@koa/cors';
import * as helmet from 'koa-helmet';
import * as body from 'koa-body';
const app = new Koa();
const router = new Router();
app.use(helmet());
app.use(Cors());
app.u
