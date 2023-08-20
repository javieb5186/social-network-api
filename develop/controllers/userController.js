const { User, Thought} = require('../models');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateUser(req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.params._id, 
        {$set: req.body},
        {runValidators: true, new: true},
      );

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteUser(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params._id);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async addFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.params.userId,
        {$addToSet: {friends: req.params.friendId}},
      );

      if(!user) {
        return res.status(404).json({message: 'No user found with that id'});
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.params.userId);
      user.friends.pull(req.params.friendId);
      await user.save();
      console.log('Successfully removed');
      if(!user) {
        return res.status(404).json({message: 'No user found with that id'});
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
}