import { gql } from 'apollo-server';
export default gql`
    type User{
        id: ID
        username: String
        phone: Float
        wechat: wechat
        share_wechat: share_wechat
        trade: [trade]
        checkOnline: Boolean
        created_at: String
        updated_at: String
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
        data: User
    }
    input loginParameter {
        username: String,
        password: String,
    }
    input registerParameter {
        username: String,
        password: String,
        phone: Float
    }
    type Query {
        login(loginParameter: loginParameter): Token
    }
    type Mutation {
        register(registerParameter: registerParameter): Token
    }
`;