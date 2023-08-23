const {User} = require('../models');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find()
      .populate('thoughts')
      .populate('friends');
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
  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params._id);
      res.json(user);
    } catch (err) {
      console.log(err);
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
      await User.findByIdAndDelete(req.params._id,
          {runValidators: true, new: true},
      );
      res.json({message: 'User Deleted'});
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async addFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.params.userId,
          {$addToSet: {friends: req.params.friendId}},
          {runValidators: true, new: true},
      );

      if (!user) {
        return res.status(404).json({message: 'No user found with that id'});
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
          req.params.userId,
          {runValidators: true, new: true},
      );
      user.friends.pull(req.params.friendId);
      await user.save();
      if (!user) {
        return res.status(404).json({message: 'No user found with that id'});
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
