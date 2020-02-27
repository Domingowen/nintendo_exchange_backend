import { Schema, Model } from "mongoose";

const MarketSchema = new Schema({
    category: {
        type: Array
    }
}, {
    timestamps: true
});
const MarketModel = Model("MarketModel", MarketSchema);
export default MarketModel;
