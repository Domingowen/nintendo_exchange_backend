import {Schema, model} from 'mongoose';

const UserSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    phone: {
        type: Number
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
    trade: [ // post trade and ecommerce
        {
            type: Schema.Types.ObjectId,
            ref: 'TradeModel'
        }
    ],
    checkOnline: {
        type: Boolean
    }
}, {
    timestamps: true
});
const UserModel = model("UserModel", UserSchema);
export default UserModel