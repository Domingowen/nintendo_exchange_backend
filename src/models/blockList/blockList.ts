import { Schema, Model } from "mongoose";

const BlockListSchema = new Schema({
    token: {
        type: String
    }
});
const BlockListModel = Model("BlockListModel", BlockListSchema);
export default BlockListModel;
