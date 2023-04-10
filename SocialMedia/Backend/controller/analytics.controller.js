const {MediaModal} = require("../model/user.model")
const count= async(req,res)=>{
   try {
    const c= await MediaModal.countDocuments();
    res.status(200).json({totalusers: c});
   } catch (error) {
    res.status(500).json({ message: 'Server error' });
   }
}

const mediatotalcount = async(req,res)=>{
   try {
    const topusers= await getTopActiveUser(5);
    res.json(topusers);
   } catch (error) {
    console.log(error);
    res.status(500).json({ msg:" some thing you get Error"})
   }
}

async function getTopActiveUser(limit){
    const users = await Post.aggregate([
        { $group: { _id: '$author', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: limit },
        { $lookup: { from: 'users', localField: '_id', foreignField: '_id', as: 'user' } },
        { $unwind: '$user' },
        { $project: { _id: 0, name: '$user.name', email: '$user.email', postCount: '$count' } }
      ]);
      return users;
}
module.exports={
    count,
    mediatotalcount
}