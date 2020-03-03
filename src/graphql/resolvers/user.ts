import { AuthenticationError, gql } from "apollo-server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const privateKey = "./certificate/Nintendo";
export default {
    Query: {
        login: async (parent, payload, { ctx, models }, info) => {
            console.log(payload);
            const parameter = payload.loginParameter;
            const result = await models.UserModel.findOne({ username: parameter.username });
            console.log(result);
            if (result) {
                const checkPassword = await bcrypt.compare(parameter.password, result.password);
                // console.log(checkPassword);
                if (checkPassword) {
                    const token = await jwt.sign({ username: parameter.username }, privateKey, { expiresIn: "30d" });
                    return {
                        token,
                        data: result
                    };
                }
                ctx.throw(401, "密码错误");
            } else {
                ctx.throw(401, '账号错误');
            }
        }
    },
    Mutation: {
        register: async (parent, payload, { ctx, models }, info) => {
            const saltRounds = 5;
            const parameter = payload.registerParameter;
            const password = await bcrypt.hash(parameter.password, saltRounds);
            const checkUser = await models.UserModel.findOne({ username: parameter.username });
            console.log(checkUser);
            if (!checkUser) {
                const result = await models.UserModel.create({
                    username: parameter.username,
                    password,
                    phone: parameter.phone,
                    wechat: {
                        name: "domingo",
                        date: new Date()
                    },
                    checkOnline: true
                });
                const token = await jwt.sign({ username: parameter.username }, privateKey, { expiresIn: "30d" });
                return {
                    token,
                    data: result
                };
            } else {
                ctx.throw(401, "该账号已被注册");
            }
        }
    }
};
// https://dev.to/alvarojsnish/graphql-mongodb-the-easy-way-ngc
