import { Router } from "express";
import { Movie } from "../models/moviemodel.js";

const admin=Router();


admin.post("/addmovie",async(req,res)=>{
    try{
        const {MovieName,Genre}=req.body
        console.log(MovieName);
        console.log(Genre);
        
        
        
        const movieCheck=await Movie.findOne({movie:MovieName})

        if(movieCheck){
            res.json({msg:"Movie already exist"})
        }

        else{
            const movie=new Movie({
            movie:MovieName,
            genre:Genre
        })
        await movie.save()
        res.status(201).json({msg:"Movie Added Successfully"})
        }      

    }
    catch(error){
        console.log(error);
        
        res.status(500).json({msg:"Something went wrong"})
    }
})

export {admin}