import { Schema, Model } from "mongoose";

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
const GroupListModel = Model("GroupListModel", GroupListSchema);
export default GroupListModel;
