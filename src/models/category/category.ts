import { Schema, Model } from "mongoose";

const CategorySchema = new Schema({
    name: {
        type: String
    },
    list: {
        type: Schema.Types.ObjectId,
        ref: 'SwitchGameModel'
    }

}, {
    timestamps: true
});
const CategoryModel = Model("CategoryModel", CategorySchema);
export default CategoryModel;