import { Schema, Model } from "mongoose";

const GameSchema = new Schema({
    pic: {
        type: String
    },
    name: {
        type: String
    },
    release_date: {
        type: Date
    },
    user_id: [ // connect common user owner game
        {
            type: Schema.Types.ObjectId,
            ref: 'UserModel',
        }
    ],
    rent_id: [
        {
            type: Schema.Types.ObjectId,
            ref: 'RentModel'
        }
    ],
    sale_id: [
        {
            type: Schema.Types.ObjectId,
            ref: 'SaleModel',
        }
    ],
    swap_id: [
        {
            type: Schema.Types.ObjectId,
            ref: 'SwapModel'
        }
    ]
}, {
    timestamps: true
});
const GameModel = Model("GameModel", GameSchema);
export default GameModel;
