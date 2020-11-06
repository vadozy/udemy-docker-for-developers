import Note from '../models/notes-model.js';
import mongoose from 'mongoose';

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

  console.log('Sending all notes');

  res.send({
    data,
    success: true,
  });
}

export async function findOneNote(req, res) {
  const { id } = req.params;
  const valid = mongoose.Types.ObjectId.isValid(id);
  if (!valid) {
    const errMsg = `Invalid Request. Note id type is NOT valid: id: ${id}`;
    console.error(errMsg);
    res.status(400).send({
      message: errMsg,
      success: false,
    });
    return;
  }

  let data;
  try {
    data = await Note.findById(id);
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: 'Something went wrong',
      success: false,
    });
    return;
  }

  res.send({
    data,
    success: true,
  });
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

export async function deleteOneNote(req, res) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId(id)) {
    const errMsg = `Invalid Request. Note id type is NOT valid: id: ${id}`;
    console.error(errMsg);
    res.status(400).send({
      message: errMsg,
      success: false,
    });
    return;
  }

  let data;
  try {
    // data = await Note.deleteOne(Note.findById(id));
    data = await Note.deleteOne({ _id: id });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: 'Something went wrong',
      success: false,
    });
    return;
  }

  res.send({
    data,
    success: true,
  });
}

export async function updateOneNote(req, res) {
  const { id } = req.params;
  const isIdValid = mongoose.Types.ObjectId.isValid(id);
  if (!req.body || !isIdValid) {
    const errMsg = 'Invalid Request';
    console.error(errMsg);
    res.status(400).send({
      message: errMsg,
      success: false,
    });
    return;
  }

  let data;
  try {
    data = await Note.findByIdAndUpdate(
      id,
      {
        title: req.body.title,
        description: req.body.description,
      },
      {
        new: true,
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: 'Something went wrong',
      success: false,
    });
    return;
  }

  res.send({
    data,
    success: true,
  });
}
