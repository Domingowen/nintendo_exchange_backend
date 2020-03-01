import { Schema, model } from "mongoose";

const GroupListSchema = new Schema({
    name: {
        type: String
    },
    we_chat: {
        type: String
    },
    qq: {
        type: String
    },
    
});
const GroupListModel = model("GroupListModel", GroupListSchema);
export default GroupListModel;
