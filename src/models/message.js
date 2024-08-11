import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    timeStamp: { type: Date, default: Date.now }
}, { collection: 'message' });

export default mongoose.models.message || mongoose.model('message', messageSchema);
