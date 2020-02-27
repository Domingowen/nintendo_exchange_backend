const SwitchGameType = `
    type SwitchGame = {
        id: ID!
        pic: String!
        name: String!
        exchange: String
        rent_price: Int
    }
`;

const SwitchGameQuery = `
    type SwitchGameQuery = {
        list: [SwitchGame]
    }
`;
export default SwitchGameType;
