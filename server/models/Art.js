import mongoose from 'mongoose';

const ArtSchema = mongoose.Schema({
    ID: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    pricing: {
        type: Number,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    canvasSize: {
        type: Number,
        required: true,
    },
    image: {
        type: String, // Store image as URL string
        required: true,
    },
});


// Indexing (if ID is supposed to be a unique identifier)
ArtSchema.index({ ID: 1 });

const ArtModel = mongoose.model('Art', ArtSchema);
export default ArtModel;
