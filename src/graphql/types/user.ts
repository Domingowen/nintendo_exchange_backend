import { gql } from 'apollo-server';
export default gql`
    type User{
        id: ID
        name: String
        phone: Int
        wechat: wechat
        share_wechat: share_wechat
        trade: [trade]
        checkOnline: Boolean
        created_at: String
        updated_at: String
        getUserInfo(id: String): User
    }
    type wechat {
        name: String
    }
    type share_wechat {
        name: String
    }
    type trade {
        name: String
    }
    type Token{
        token: String!
        user_info: User
    }
    input loginParameter {
        username: String,
        password: String,
    }
    input registerParameter {
        username: String,
        password: String,
        phone: String
    }
    type Query {
        login(loginParameter: loginParameter): Token
    }
    type Mutation {
        register(registerParameter: registerParameter): User
    }
`;