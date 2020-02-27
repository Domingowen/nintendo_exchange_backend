import { Schema, Model } from "mongoose";

const TradeSchema = new Schema({
    pic: {
        
    }
}, {
    timestamps: true
});
const TradeModel = Model("TradeModel", TradeSchema);
export default TradeModel;
