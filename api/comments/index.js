import express from 'express';
import Comment from './commentModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line

// Get all contacts, using try/catch to handle errors
router.get('/', async (req, res) => {
  try {
    const comment = await Comment.find();
    res.status(200).json(comment);
  } catch (error) {
    handleError(res, error.message);
  }
});

// Create a contact, using async handler
router.post('/', asyncHandler(async (req, res) => {
  const comment = await Comment.create(req.body);
  res.status(201).json(comment);
}));

// Update a contact
router.put('/:id', asyncHandler(async (req, res) => {
  if (req.body._id) delete req.body._id;
  const comment = await Comment.update({
    _id: req.params.id,
  }, req.body, {
    upsert: false,
  });
  if (!comment) return res.sendStatus(404);
  return res.json(200, comment);
}));

// Delete a contact
router.delete('/:id', asyncHandler(async (req, res) => {
  console.log("HEEEEEEEEEEEEEEEEEEEEEEEEEERE! THE ID TO DELETE IS: " + req.params.id);
  const comment = await Comment.findById(req.params.id);
  if (!comment) return res.send(404);
  await comment.remove();
  return res.status(204).send(comment);
}));


/**
 * Handle general errors.
 * @param {object} res The response object
 * @param {object} err The error object.
 * @return {object} The response object
 */
function handleError(res, err) {
  return res.send(500, err);
};

export default router;