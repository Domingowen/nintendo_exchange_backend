import {gql} from 'apollo-server';
import SwitchGame from './switchGame';
const UserType = gql`
    type User{
        id : ID
        name : String
        phone: Int
        wechat: {}
        share_wechat: []
        trade: []
        checkOnline: Boolean
        created_at  : String
        updated_at  : String
    }
    
    type Query {
        getUserInfo: User
    }
    type Mutation {
        login(post: userInput):User
    }
    
`;
export default UserType;