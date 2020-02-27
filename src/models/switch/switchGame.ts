import { Schema, Model } from "mongoose";

const SwitchGameSchema = new Schema({
    pic: {
        type: String
    },
    name: {
        type: String
    },
    exchange: {
        type: Boolean
    },
    rent_price: {
        type: Number
    }

}, {
    timestamps: true
});
const SwitchGameModel = Model("SwitchGameModel", SwitchGameSchema);
export default SwitchGameModel;
