import mongoose from "mongoose";

interface iMe{
    password?:string;
    email?:string;
    name?:string;
    product?:string;
    brand?:string
}

interface iMeData extends iMe, mongoose.Document{}

const meModel= new mongoose.Schema(
    {
        password:{
            type:String,
            min:6
        },
        email:{
            type:String,
            unique:true,
            trim:true,
            require:true
        },
        brand:{
            type:String
        },
        name:{
            type:String,
            trim:true,
            require:true
        },
        product:{
type:String
        }
    },{timestamps:true}
)

export default mongoose.model<iMeData>("me" , meModel)