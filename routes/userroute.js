import { Router } from "express";
import { Review } from "../models/reviewmodel.js";
import { Movie } from "../models/moviemodel.js";

const user=Router();


user.post("/addreview",async(req,res)=>{
    
        const {Film,Comment,Rating}=req.body
        
    if (await Movie.find({movie:Film })) {
      const review=new Review({
            film:Film,
            comment:Comment,
            rating:Rating
        })
        await review.save()
        res.status(201).json({msg:"Review Added Successfully"})
    }
       
        
        else{
        res.status(400).json({msg:"Movie Not Found"})

            
        }
        

    
  
})

user.put("/updatereview/:id",async(req,res)=>{
try{
    console.log(req.params.id);
    console.log(req.body);

    
    const updated=await Review.findByIdAndUpdate(
        req.params.id,
        req.body
        // {new:true}
    )
    res.status(200).json("updated",updated)

    
}
catch(error){
        res.status(500).json({msg:"Something went wrong"})
    }   

})

user.get("/showreview",async(req,res)=>{
    try{
        const review=await Review.find()
        res.status(200).json(review)  
    }
    catch(error){
        res.status(500).json({msg:"Something went wrong"})
    } 
    
})

user.delete("/deletereview/:id",async(req,res)=>{

    await Review.findByIdAndDelete(
        req.params.id
    )
    res.status(200).json("Deleted")



})

user.get("/showmovie",async(req,res)=>{
    try{
        console.log("hi");
        
        const show=await Movie.find()
        res.status(200).json(show)  
        console.log("hi");
        
    }
    catch(error){
        console.log(error);
        
        res.status(500).json({msg:"Something went wrong"})
    } 
    
})

export {user}