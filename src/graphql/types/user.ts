import SwitchGame from './switchGame';
const UserType = `
    type User{
        id : ID
        name : String
        phone: Int
        wechat: String
        switch_game: [SwitchGame]
        switch_age: Int
        switch_favorite_game: []
        created_at  : String
        updated_at  : String
    }
`;
export default UserType;