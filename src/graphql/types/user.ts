import { gql } from 'apollo-server';
export default gql`
    type User{
        id: ID
        name: String
        phone: Int
        wechat: [User.wechat]
        share_wechat: User.share_wechat
        trade: User.trade
        checkOnline: Boolean
        created_at: String
        updated_at: String
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