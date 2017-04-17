const path = require('path')
const db = require('../server/db')

const Inventory = db.models.inventory
const Product = db.models.product
const ProductReview = db.models.productReview
const Transaction = db.models.transaction
const User = db.models.user
const Vendor = db.models.vendor
const VendorReview = db.models.vendorReview

const syncDatabase = function () {
  const forceSync = true
  return db.sync({ force: forceSync })
}

const userSeeds = [
  {
    name: 'Foo',
    email: 'Foo@gmail.com',
    password: '123'
  }, {
    name: 'Bar',
    email: 'Bar@yahoo.com',
    password: '456',
    isMember: true
  }, {
    name: 'Jonathan',
    email: 'Jonathan@me.com',
    password: '123',
    isAdmin: true,
    isMember: true
  }, {
    name: 'Foobar',
    email: 'Foo@bar.com',
    password: '123456',
    isMember: true
  }
]

const vendorSeeds = [
  {
    name: 'FooVendor',
    email: 'FooVendor@email.org',
    password: '123'
  }, {
    name: 'BarFoo',
    email: 'Bar@bar.foo',
    password: 'qwe'
  }, {
    name: 'Legit Vendor',
    email: 'Legit@scam.club',
    password: 'hi'
  }
]

const productSeeds = [
  {
    name: 'Cat in a Box',
    image: 'http://thecatapi.com/api/images/get?format=src&id=5kr',
    description: 'It\'s a cat...',
    category: 'Pets',
    tags: ['cat', 'box']
  }, {
    name: 'Cat on a Box',
    image: 'http://thecatapi.com/api/images/get?format=src&id=d0p',
    description: 'It\'s another cat...',
    category: 'Pets',
    tags: ['cat', 'box']
  }, {
    name: 'Pom',
    image: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-15.jpg',
    description: 'This is not a cat',
    category: 'Pets',
    tags: ['puppy', 'nobox']
  }, {
    name: 'Not a real product',
    description: 'Nothing here',
    category: 'none'
  }, {
    name: 'Cat with no box',
    image: 'http://thecatapi.com/api/images/get?format=src&id=bo8',
    category: 'Pets',
    tags: ['cat', 'nobox']
  }, {
    name: 'Another fake thing',
    category: 'none',
    tags: 'test, tag1, tag2, moretag'
  }
]

const inventorySeeds = [
  {
    price: 24.99,
    stock: 3,
    productId: 1,
    vendorId: 1
  }, {
    price: 23.99,
    stock: 2,
    productId: 1,
    vendorId: 2
  }, {
    price: 29.99,
    stock: 1,
    productId: 2,
    vendorId: 2
  }, {
    price: 19.99,
    stock: 5,
    productId: 3,
    vendorId: 1
  }, {
    price: 24.99,
    stock: 6,
    productId: 5,
    vendorId: 2
  }, {
    price: 99.99,
    stock: 25,
    productId: 6,
    vendorId: 3
  }
]

const transactionSeeds = [
  {
    price: 19.99,
    productId: 1,
    userId: 1,
    vendorId: 1
  }, {
    price: 19.99,
    productId: 1,
    userId: 2,
    vendorId: 1
  }, {
    price: 23.99,
    productId: 1,
    userId: 4,
    vendorId: 2
  }, {
    price: 99.99,
    product: 6,
    userId: 1,
    vendorId: 3
  }
]

const productReviewSeeds = [
  {
    rating: 1,
    review: 'it was fake',
    transactionId: 4
  }
]

const vendorReviewSeeds = [
  {
    rating: 1,
    review: 'sold me a fake thing',
    transactionId: 4
  }
]

syncDatabase()
  .then(() => User.bulkCreate(userSeeds))
  .then(() => Vendor.bulkCreate(vendorSeeds))
  .then(() => Product.bulkCreate(productSeeds))
  .then(() => Inventory.bulkCreate(inventorySeeds))
  .then(() => Transaction.bulkCreate(transactionSeeds))
  .then(() => ProductReview.bulkCreate(productReviewSeeds))
  .then(() => VendorReview.bulkCreate(vendorReviewSeeds))
  .then(() => console.log('Successfully synced and seeded database'))
  .catch(err => console.error(err))
