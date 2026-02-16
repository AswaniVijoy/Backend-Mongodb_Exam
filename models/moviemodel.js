import { model, Model,Schema } from "mongoose";

const movieschema=new Schema(
    {
        movie:String,
        genre:String
    }
)

const Movie=model("Movie",movieschema)

export {Movie}