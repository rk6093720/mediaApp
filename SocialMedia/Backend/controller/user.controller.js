const { MediaModal } = require("../model/user.model")

//Retrieve a user by id.
const media =async(req,res)=>{
    try {
    const user = await MediaModal.find(req.params.id);
    console.log(user);
    if(!user){
        return res.status(404).json({error:"User not found "});
    }
    res.json(user);
    // res.send(user)
 } catch (error) {
    res.status(500).json({error: error.message})
 }
}

//post a user 
const postmedia = async(req,res)=>{
    const {name, email ,bio} = req.body;
    var newmedia = new  MediaModal({
        name:name,
        email:email,
        bio:bio
    })
    console.log(newmedia);
    try {
       await newmedia.save();
       res.status(201).json(newmedia);

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"something error"})
    }
    
}

// PUT /users/{id}: Update a user's name or bio by id.
const mediaput = async(req,res)=>{
    const id= req.params.id;
    const {name,bio}= req.body;
    const newmediachange= {
        name:name,
        bio:bio
    }
  try {
    await MediaModal.findOneAndUpdate(id, newmediachange, { new: true});
    res.status(200).json(newmediachange);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg:"successfully updated" })
  }
}
// delete  
 const mediadelete=async(req,res)=>{
   const  id = req.params.id;
   try {
     const socialmedia= await MediaModal.findOneAndDelete(id);
     res.status(202).json(socialmedia)
   } catch (error) {
    console.log(error);
    res.status(500).json({message:"something wentwrong"})
   }
 }

module.exports={
    media,
    postmedia,
    mediaput,
    mediadelete
}

