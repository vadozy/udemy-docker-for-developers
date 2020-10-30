import express from 'express';
import * as notes from '../controllers/notes-controller.js';
const router = express.Router();

router.get('/notes', notes.findAllNotes);
router.get('/notes/:id', (req, res) => {
  res.send(`You requested note ${req.params.id}`);
});
router.post('/notes', notes.createNote);
router.delete('/notes/:id', () => {});
router.patch('/notes/:id', () => {});

export default router;
