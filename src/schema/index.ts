import { gql } from "apollo-server-koa";
const typeDefs = gql`
    type Rocket {
        id: ID!
        name: String
        type: String
    }

    type Query {
        hello: String
    }

    type Mission {
        name: String
        missionPatch(size: PatchSize): String
    }

    enum PatchSize {
        SMALL
        LARGE
    }
`;
export { typeDefs };

