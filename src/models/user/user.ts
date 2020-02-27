import { Schema, Model } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String
    },
    hash_password: {
        type: String
    },
    phone: {
        type: String
    },
    wechat: {
        type: String
    },
    switch_game: {
        type: Schema.Types.ObjectId,
        ref: 'SwitchGameModel'
    },
    switch_age: {
        type: Number
    },
    switch_favorite_game: {
        type: Array
    }

}, {
    timestamps: true
});
const UserModel = Model("UserModel", UserSchema);
export default UserModel;
