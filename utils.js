import fs from "fs";
const getUsers = () => {
  const users = loadUsers();
  console.log(users);

  users.map((user) =>
    console.log(
      `Id : ${user.id} , cash : ${user.cash} , credit : ${user.credit}`
    )
  );
  return users;
};
//add user
const addUser = (newUser) => {
  const users = loadUsers();
  const existingUsers = users.filter((user) => {
    return user.id === newUser.id;
  });
  if (existingUsers.length === 0) {
    users.push(newUser);
    saveUsers(users);
    return `user with id : ${newUser.id} was added to db`;
  } else {
    console.log("there is already user with this id");
  }
};
const removeUser = (user) => {
  const users = loadUsers();
  const updatedUsers = users.filter((u) => {
    return u.email !== user.email;
  });
  if (users > updatedUsers.length) {
    console.log("user removed");
    saveUsers(updatedUsers);
  }
};
const updateUser = (id, user) => {
  const users = loadUsers();
  console.log(users);
  console.log(id, user);

  const userToUpdate = users.find((user) => {
    console.log(user.id, id);
    return user.id == id;
  });
  console.log(userToUpdate);

  user.cash ? (userToUpdate.cash += user.cash) : null;
  user.credit ? (userToUpdate.credit += user.credit) : null;

  console.log(users);
  saveUsers(users);
  return `user with id : ${id} was updated`;
};
const saveUsers = (users) => {
  const dataJSON = JSON.stringify(users);
  fs.writeFileSync("./db/users.json", dataJSON);
};
const loadUsers = () => {
  try {
    const dataBuffer = fs.readFileSync("./db/users.json");
    const dataJSON = dataBuffer.toString();
    console.log(JSON.parse(dataJSON));
    return JSON.parse(dataJSON);
  } catch (err) {
    console.log(err);
    return [];
  }
};
export { getUsers, addUser, updateUser };
