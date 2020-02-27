import { AuthenticationError } from 'apollo-server';
import UserModel from '../../models/user/user';
export default {
    Query: {
        login: async(parent, {id}, {models: {UserModel}, me}, info) => {
            if(!me) {
                
            }
        }
    }
}