import {addUser, findUserById, listAllUsers} from '../models/user-model.js';

const getUser = (req, res) => {
  res.json(listAllUsers());
};

const getUserById = (req, res) => {
  const user = findUserById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
};

const postUser = (req, res) => {
  const result = addUser(req.body);
  if (result.user_id) {
    res.status(201);
    res.json({message: 'New user added.', result});
  } else {
    res.status(400);
    res.json({message: 'Error adding user.'});
  }
};

const putUser = (req, res) => {
  res.status(200);
  res.json({message: 'User item updated'});
};

const deleteUser = (req, res) => {
  res.status(200);
  res.json({message: 'User item deleted'});
};

export {getUser, getUserById, postUser, putUser, deleteUser};
