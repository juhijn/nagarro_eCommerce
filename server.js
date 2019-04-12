const express = require('express')
const {
  db,
  Vendors,
  Products,
  Carts
} = require('./db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use('/',
  express.static(__dirname + '/public')
)

//                                        Vendors


app.get('/vendors', async (req, res) => {

  const vendors = await Vendors.findAll()
  res.send(vendors)
})

app.post('/vendors', async (req, res) => {

  try {
    const result = await Vendors.create({
      name: req.body.name
    })
    res.send({ success: true })
  } catch (e) {
    res.send({ success: false, err: e.message })
  }


})

app.get('/vendors/:pqr', async (req, res) => {
  try {
    const result = await Vendors.destroy({
      where: {
        name: req.params.pqr
      }
    })
    const prodresult = await Products.destroy({
      where: {
        vendorname: req.params.pqr
      }
    })
    res.redirect('/vendors.html');
  } catch (e) {
    // res.redirect('/');
    res.send({ success: false, err: e.message })
  }
})



//                                                 shopping

app.get('/shopping', async (req, res) => {

  const users = await Products.findAll()
  res.send(users)
})

app.post('/shopping', async (req, res) => {

  try {
    const result = await Users.create({
      name: req.body.name
    })
    res.send({ success: true })
  } catch (e) {
    res.send({ success: false, err: e.message })
  }


})

// app.get('/products/:pqr', async (req, res) => {
// try{
// const result = await Products.destroy({
// where: {
// id:req.params.pqr}
// })
// res.redirect('/products.html');
// } catch(e){
//   // res.redirect('/');
//   res.send({success: false,err:e.message})
// }
// }) 



//                                                 products

app.get('/products', async (req, res) => {

  const users = await Products.findAll()
  res.send(users)
})

app.post('/products', async (req, res) => {

  try {
    const result = await Products.create({
      name: req.body.name,
      price: req.body.price,
      vendorname: req.body.vendorname,
      quantity: req.body.quantity
    })
    res.send({ success: true })
  } catch (e) {
    res.send({ success: false, err: e.message })
  }


})

app.get('/products/:pqr', async (req, res) => {
  try {
    const result = await Products.destroy({
      where: {
        id: req.params.pqr
      }
    })
    res.redirect('/products.html');
  } catch (e) {
    // res.redirect('/');
    res.send({ success: false, err: e.message })
  }
})

app.get('/carts/:pqr', async (req, res) => {

  try {
    const result = await Carts.create({
      pId: req.params.pqr
    })
    
   // res.send({ success: true })
    res.redirect('/shopping.html');
  } catch (e) {
    res.send({ success: false, err: e.message })
  }
})

app.get('/cart', async (req, res) => {
  try {
    const result = await Carts.findAll()
    res.send(result)
  } catch (e) {
    // res.redirect('/');
    res.send({ success: false, err: e.message })
  }
})

db.sync()
  .then(() => {
  
  const PORT = process.env.PORT || 4444
  
  app.listen(PORT)
  })
  
 