// artControllers.js
import multer from 'multer';
import path from 'path';
import Art from '../models/Art.js';
import { nanoid } from 'nanoid';


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // Specify the correct path to the upload directory
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname) // Use a unique filename
    }
});

const upload = multer({ storage: storage });


export async function createArt(req, res) {
    try {
        upload.single('image')(req, res, async (err) => {
            if (err instanceof multer.MulterError) {
                console.error("Error uploading image:", err);
                return res.status(400).json({ message: 'Error uploading image', error: err.message });
            } else if (err) {
                console.error("Unknown error uploading image:", err);
                return res.status(500).json({ message: 'Unknown error uploading image', error: err.message });
            }
            
            const { name, description, pricing, mobileNumber, canvasSize } = req.body;
            const image = req.file.path; // Get the path to the uploaded image
            const id = nanoid();
            const newArt = new Art({
                ID: id, // Set the generated ID
                name,
                description,
                pricing,
                mobileNumber,
                canvasSize,
                image
              });            
            await newArt.save();
            res.status(201).json(newArt);
        });
    } catch (error) {
        console.error("Error creating art:", error); 
        res.status(500).json({ message: 'Error creating art', error: error.toString() });
    }
}

export const getArts = async (req, res) => {
    try {
        // Your code to fetch all artwork
        const arts = await Art.find();
        res.status(200).json(arts);
    } catch (error) {
        console.error('Error fetching artwork:', error);
        res.status(500).json({ error: 'An internal server error occurred' });
    }
};
export async function getArtById(req, res) {
    try {
        const artId = req.params.id;
        const art = await Art.findById(artId);
        if (!art) {
            res.status(404).json({ message: 'Art not found' });
        } else {
            res.json(art);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching art by id', error: error.toString() });
    }
}

export async function updateArt(req, res) {
    try {
        const artId = req.params.id;
        const updatedData = req.body;
        const art = await Art.findByIdAndUpdate(artId, updatedData, { new: true });
        if (!art) {
            res.status(404).json({ message: 'Art not found' });
        } else {
            res.json(art);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating art', error: error.toString() });
    }
}

export async function deleteArt(req, res) {
    try {
        const artId = req.params.id;
        const deletedArt = await Art.findByIdAndRemove(artId);
        if (!deletedArt) {
            res.status(404).json({ message: 'Art not found' });
        } else {
            res.json({ message: 'Art deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting art', error: error.toString() });
    }
}