import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
    name: {
        type: String
    },
    list: {
        type: Schema.Types.ObjectId,
        ref: 'GameModel'
    }

}, {
    timestamps: true
});
const CategoryModel = model("CategoryModel", CategorySchema);
export default CategoryModel;
