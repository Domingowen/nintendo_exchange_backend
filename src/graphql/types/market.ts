import CategoryType from './category'
const MarketType = `
    type market = {
        id: ID
        category: [CategoryType]
    }
`;
export default MarketType;
