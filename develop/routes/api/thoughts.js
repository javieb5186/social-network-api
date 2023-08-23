const router = require('express').Router();
const {
  getThoughts,
  getThoughtsById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);
router.route('/:_id')
    .get(getThoughtsById)
    .put(updateThought)
    .delete(deleteThought);
router.route('/:thoughtId/reactions')
    .post(createReaction)
    .delete(deleteReaction);

module.exports = router;
