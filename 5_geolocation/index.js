const express=require('express');
const app=express();

app.listen(3000,()=>console.log('server 3000 portunu dinliyor.'));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));
app.post('/api',(req,res)=>{
console.log(req.body);
console.log(req.body.lat);
//response.end();
res.json({
    durum:'Başarılı',
    latitude:req.body.lat
})
});
