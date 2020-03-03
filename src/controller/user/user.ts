import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { AuthenticationError } from 'apollo-server';


class User {
    async login (prent, {id}, {models: {userModel}, me}, info) {
        
    }

    async resigter() {

    }
}

export default new User();