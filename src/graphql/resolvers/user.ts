import { AuthenticationError, gql } from 'apollo-server';

export default {
    Query: {
        login: async (parent, payload, context, info) => {
            // console.log(parent, payload, context, info)
            return {
                token: 'domingo'
            }
        },
    },
    Mutation: {
        register: async (parent, payload, context, info) => {
            // console.log(parent, payload, context, info)
            return {
                name: 'domingo',
                id: 123123,
                phone: 123124123
            }
        }
    }
    // User: {
    //     getUserInfo: async(parent, payload, context, info) => {
    //         console.log(parent, payload)
    //         return {
    //             username: 'domingo'
    //         }
    //     }
    // }
}
// https://dev.to/alvarojsnish/graphql-mongodb-the-easy-way-ngc