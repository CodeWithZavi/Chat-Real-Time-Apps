const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    conversationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation',
        required: true,
        index: true
    },
    messageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    },
    reportedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    reportType: {
        type: String,
        enum: ['conversation', 'message'],
        default: 'conversation'
    },
    reason: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500
    },
    messagePreview: {
        type: String,
        trim: true,
        maxlength: 500
    },
    status: {
        type: String,
        enum: ['open', 'reviewing', 'resolved'],
        default: 'open'
    }
}, {
    timestamps: true
});

reportSchema.index({ conversationId: 1, createdAt: -1 });

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
