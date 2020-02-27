import SwitchGameType from './switchGame'
const CategoryType = `
    type category = {
        id: ID
        name: String
        list: [SwitchGameType]
    }
`;

export default CategoryType;