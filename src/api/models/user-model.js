const userItems = [
  {
    id: 3609,
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@metropolia.fi',
    role: 'user',
    password: 'password',
  },
  {
    id: 3610,
    name: 'Jane Doe',
    username: 'janedoe',
    email: 'jane@metropolia.fi',
    role: 'admin',
    password: 'password',
  },
];

const listAllUsers = () => {
  return userItems;
};

const findUserById = (id) => {
  return userItems.find((item) => item.id === id);
};

const addUser = (user) => {
  const {name, username, email, role, password} = user;
  const newId = userItems[0].id + 1;
  userItems.unshift({
    id: newId,
    name,
    username,
    email,
    role,
    password,
  });
  return {id: newId};
};

export {listAllUsers, findUserById, addUser};
