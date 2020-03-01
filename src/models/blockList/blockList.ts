import { Schema, model } from "mongoose";

const BlockListSchema = new Schema({
    token: {
        type: String
    }
});
const BlockListModel = model("BlockListModel", BlockListSchema);
export default BlockListModel;
