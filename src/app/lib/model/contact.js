import  mongoose  from "mongoose";

const contactModel = new mongoose.Schema({
    email:String,
    subject:String,
    message:String
});

export const Contact = mongoose.models.mails || mongoose.model("mails",contactModel);