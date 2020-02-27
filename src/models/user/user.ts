import { Schema, Model } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    phone: {
        type: String
    },
    wechat: { // basic wechat info
        type: Object,
    },
    share_wechat: [ // can share wechat contact with want to trade user
        {
            type: Schema.Types.ObjectId,
            ref: 'UserModel',
        }
    ],
    trade: [
        {
            type: Schema.Type.ObjectId,
            ref: 'TradeModel'
        }
    ],
    checkOnline: {
        type: Boolean
    }
}, {
    timestamps: true
});
const UserModel = Model("UserModel", UserSchema);
export default UserModel;
