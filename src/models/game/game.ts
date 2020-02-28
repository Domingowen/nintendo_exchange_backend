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
    description: {
        type: String
    }
}, {
    timestamps: true
});
const GameModel = Model("GameModel", GameSchema);
export default GameModel;
