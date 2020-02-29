import { AuthenticationError , gql} from 'apollo-server';
import UserModel from '../../models/user/user';

export default {
    Query : {
        login: async (parent, {username, password}, {models: {UserModel}, me}, info) => {
            return {
                username: 'domingo'
            }
        },
    },
    Mutation: {
        register: async (parent,{username, password, phone}, {models: {UserModel}, me}, info) => {
            return {
                username: 'domingo'
            }
        }
    }
}