const SwitchGameType = `
    type SwitchGame = {
        id: ID!
        pic: String!
        name: String!
        exchange: Int!
        rent_price: Number
    }

`;

const SwitchGameQuery = `
    type SwitchGameQuery = {
        list: [SwitchGame]
    }
`;
export default SwitchGameType;
