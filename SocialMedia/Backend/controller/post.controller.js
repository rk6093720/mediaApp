const {PostModal} = require("../model/Post.model");
let posts =[];
//get
const social=async(req,res)=>{
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
}
//post
const socialpost=async(req,res)=>{
    const { user_id, content } = req.body;
    const post = { id: posts.length + 1, user_id, content, likes: 0 };
    posts.push(post);
    res.status(201).json(post);
}
//put
const socialput=async(req,res)=>{
    const id = parseInt(req.params.id);
    const { content } = req.body;
    const post = posts.find(post => post.id === id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    post.content = content;
    res.json(post);
}
//delete
const socialdelete=async(req,res)=>{
    const id = parseInt(req.params.id);
    const index = posts.findIndex(post => post.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Post not found' });
    }
    posts.splice(index, 1);
    res.status(204).end();
}

const likepost =async(req,res)=>{
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    post.likes++;
    res.json(post);
}
const unlikepost= async(req,res)=>{
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    post.likes = Math.max(post.likes - 1, 0);
    res.json(post);
}

const analyticsget1=async(req,res)=>{
    const totalPosts = posts.length;
  res.json({ totalPosts });
}
const analyticsget2= async(req,res)=>{
    const topLikedPosts = posts.sort((a, b) => b.likes - a.likes).slice(0, 5);
    res.json(topLikedPosts);
}
module.exports={
    social,
    socialpost,
    socialput,
    socialdelete,
    likepost,
    unlikepost,
    analyticsget1,
    analyticsget2
}