import { gql } from 'apollo-server';
const CreateUserMutation = `
input CreateUser {
    name: String
    phone: String
    
}

    type Mutation {
        create_user(

        )
    }
`