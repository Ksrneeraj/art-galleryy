import express from 'express';
import { createArt, getArts, getArtById, updateArt, deleteArt } from '../controllers/artControllers.js';

const router = express.Router();

router.post('/', createArt);
router.get('/', getArts);
router.get('/:id', getArtById);
router.put('/:id', updateArt);
router.delete('/:id', deleteArt);

export default router;
