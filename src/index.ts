// const koa = require('koa');
// const router = require('koa-router');
import Koa from "koa";
import Router from "koa-router";
import Cors from "@koa/cors";
import helmet from "koa-helmet";
import KoaBody from "koa-better-body";
import jwt from "koa-jwt";
import ip from "ip";
// import KoaRouter from 'koa-router';
// import { graphqlKoa } from "apollo-server-koa";
import { ApolloServer, gql } from "apollo-server-koa";
import { typeDefs } from "./schema/index";
import { graphql, buildSchema } from "graphql";
import KoaBodyParser from 'koa-bodyparser';
import routerCombine from './route/index';
// const graphqlHTTP = require('koa-graphql');
const app = new Koa();
// const router = new Router();

const resolvers = {
    Query: {
        hello: () => "Hello world!"
    }
};

app.use(helmet());
app.use(Cors());
app.use(KoaBodyParser());

const server = new ApolloServer({ typeDefs, resolvers, playground: true, introspection: true });
server.applyMiddleware({ app });
routerCombine(app);
// router.post("/graphql", ApolloServer({ typeDefs, resolvers }));
// router.get("/graphql", ApolloServer({ schema: myGraphQLSchema }));

// app.use(router.routes());
// app.use(router.allowedMethods());

app.listen(3000, ip.address(), () => {
    console.log("node sever is starting!!!!" + ip.address() + ":" + "3000" + `${server.graphqlPath}`);
});

