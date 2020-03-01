import { Schema, model } from "mongoose";

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
const GameModel = model("GameModel", GameSchema);
export default GameModel;
