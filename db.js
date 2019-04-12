const Sequelize = require('sequelize')
const Op = Sequelize.Op

const db = new Sequelize({
  dialect: 'sqlite', // mysql, postgres, mssql
  storage: __dirname + '/ecommerce.db'
  // database : '',
  // host: 'localhost',
  // username: '',
  // password: '',
  // port: ''
})

const Vendors = db.define('vendor', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})


const Carts = db.define('cart', {
  pId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

const Products = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  vendorname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }

})


const Users = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
module.exports = {
  db, Vendors, Products, Users, Carts
}
