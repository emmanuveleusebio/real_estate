const mongoose = require('mongoose');

const wishlistSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    properties: [{type: mongoose.Schema.Types.ObjectId, ref: 'products'}],
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('wishlist', wishlistSchema);