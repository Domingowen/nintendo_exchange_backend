import SwitchGame from './switchGame';
const SwitchType = `
    type Switch{
        id : ID
        switchAge: Int
        switchGame: [SwitchGame]
        created_at  : String
        updated_at  : String
    }
`;

export default SwitchType;