const express=require('express');

const router=express.Router()

router.get('/',(req,res)=>{
    res.send('GET handlers')
});

router.post('/',(req,res)=>{
    res.send('POST handlers')
});

router.put('/',(req,res)=>{
    res.send('PUT handlers')
});

router.delete('/',(req,res)=>{
    res.send('DELETE handlers')
});

module.exports=router;