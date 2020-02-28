import { Schema, Model } from "mongoose";

const TradeSchema = new Schema({
    trade_id: {
        type: String
    },
    game_id: { // connect game id
        type: Schema.Types.ObjectId
    },
    user_id: { // connect user id
        type: Schema.Types.ObjectId
    },
    status: {
        type: Number, // 0 exchange 1 sales 2 rent
    },
    pic: {
        type: String,
    },
    name: {
        type: String
    },
    self_deposit: {
        type: Number
    },
    other_deposit: { // for exchange need to use
        type: Number
    },
    price: {
        type: Number
    },
    check_stock: { // false on the store shelves true discontinued
        type: Boolean
    },
    description: { // description text
        type: String
    }
}, {
    timestamps: true
});
const TradeModel = Model("TradeModel", TradeSchema);
export default TradeModel;
