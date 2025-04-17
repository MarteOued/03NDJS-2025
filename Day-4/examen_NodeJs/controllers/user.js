const User = require('../models/user');

exports.getMe = async (req, res) => {
  res.json({ email: req.user.email });
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find({}, { password: 0 });
  res.json(users);
};

exports.deleteUser = async (req, res) => {
  const deleted = await User.findByIdAndDelete(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json({ message: 'User deleted' });
};

