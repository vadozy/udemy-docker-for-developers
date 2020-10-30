import Note from '../models/notes-model.js';

export async function findAllNotes(req, res) {
  let data;
  try {
    data = await Note.find();
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: 'Something went wrong',
      success: false,
    });
    return;
  }

  res.send(data);
}

export async function createNote(req, res) {
  if (!req.body) {
    res.status(400).send({ message: 'Note cannot be empty', success: false });
    return;
  }

  const note = new Note({
    title: req.body.title,
    description: req.body.description,
  });

  let data;
  try {
    data = await note.save();
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: 'Something went wrong',
      success: false,
    });
    return;
  }

  res.status(201).send({
    message: 'Note created',
    success: true,
    data: data,
  });
}
