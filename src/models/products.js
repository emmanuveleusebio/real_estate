const mongoose = require ('mongoose')

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: String,
    location: String,
    seller: {type: mongoose.Schema.Types.ObjectId, ref: 'usersDetails'},
    categories: String,
    createdAt:{type:Date, default:Date.now},
    updatedAt: {type: Date, default: Date.now}
}, { collection: 'products' })

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
