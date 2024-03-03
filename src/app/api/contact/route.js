import {NextResponse} from "next/server";
import  mongoose  from "mongoose";
import { Contact } from "@/app/lib/model/contact";
export async function GET(){
    let data = [];
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        data = await Contact.find();
        
    } catch (error) {
        data={success:false}
    }

    return NextResponse.json({result:data, success:true})
}

export async function POST(request) {
    const payload = await request.json();
    await mongoose.connect(process.env.MONGODB_URI);
    let contact = new Contact(payload);
    const result = await contact.save();
    return NextResponse.json({result, success:true})
    
}