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
import { ApolloServer, AuthenticationError } from "apollo-server-koa";
// import { typeDefs } from "./schema/index";
import { graphql, buildSchema } from "graphql";
import KoaBodyParser from 'koa-bodyparser';
import routerCombine from './route/index';
import mongodb from './mongodb/index';
import UserType from './graphql/types/user';
import UserResolves from './graphql/resolvers/user'
import UserModel from './models/user/user';
console.log(UserResolves)
const app = new Koa();
mongodb();

app.use(helmet());
app.use(Cors());
app.use(KoaBodyParser());

const getUser = async (req) => {
    const token = req.headers['token'];

    if (token) {
        try {
            return await jwt.verify(token, 'riddlemethis');
        } catch (e) {
            throw new AuthenticationError('Your session expired. Sign in again.');
        }
    }
};


const server = new ApolloServer({
    typeDefs: UserType,
    resolvers: UserResolves,
    rootValue: (value) => {
        // console.log(value) 
    },
    context: ({ ctx }) => {
        // console.log(ctx.req.headers, 'req');
        return {
            ctx,
            models: {
                UserModel
            }
        }

    },
    playground: true,
    introspection: true,
});
server.applyMiddleware({ app, path: '/graphql' });
routerCombine(app);
// router.post("/graphql", ApolloServer({ typeDefs, resolvers }));
// router.get("/graphql", ApolloServer({ schema: myGraphQLSchema }));

// app.use(router.routes());
// app.use(router.allowedMethods());

app.listen(3000, ip.address(), () => {
    console.log("node sever is starting!!!!" + ip.address() + ":" + "3000" + `${server.graphqlPath}`);
});