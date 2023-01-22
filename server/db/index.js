const db = require('./db')

const User = require('./models/User')
const Product = require('./models/Product')
const Cart = require('./models/Cart')
const Order = require('./models/Order')

//associations could go here!
User.hasMany(Cart)
Product.hasMany(Cart)

Cart.belongsTo(Product)

User.hasMany(Order)
Order.belongsTo(User)
Order.hasMany(Cart)
Cart.belongsTo(Order)
// User.belongsToMany(Product, {through: Cart})
// Product.belongsToMany(User, {through: Cart})

module.exports = {
  db,
  models: {
    User,
    Product,
    Cart,
      Order

  },
}
