const express=require("express");
const sv=express();
const{
    db
}=require("./db")
const cart=require("./routes/cart");
const products=require("./routes/products");
const shopping=require("./routes/shopping");
const vendor=require("./routes/vendors");
sv.use(express.json())
sv.use(express.urlencoded({extended:true}))
sv.use('/',express.static(__dirname+'/public'))
sv.use('/',shopping);
sv.use('/',vendor);
sv.use('/',products);
sv.use('/',cart);
sv.use((req,res)=>{res.send(`<h1>Something went wrong</h1>`)});

db.sync().then(()=>{
    const port=process.env.PORT||4444
    sv.listen(port);
})
