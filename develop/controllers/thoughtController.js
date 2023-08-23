const {User, Thought} = require('../models');

module.exports = {
  async getThoughts(req, res) {
    try {
      const thought = await Thought.find();
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async getThoughtsById(req, res) {
    try {
      const thought = await Thought.findById(req.params._id);
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOne({username: req.body.username});
      user.thoughts.push(thought._id);
      await user.save();
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(req.params._id,
          {$set: req.body},
          {runValidators: true, new: true},
      );
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findByIdAndDelete(req.params._id);
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createReaction(req, res) {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      thought.reactions.push(req.body);
      await thought.save();
      res.json({message: 'Reaction Created'});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      thought.reactions.pull(req.body.reactionId);
      await thought.save();
      res.json({message: 'Reaction Deleted'});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
