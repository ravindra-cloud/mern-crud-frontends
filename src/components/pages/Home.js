import { useEffect, useState } from "react";

// API functions import
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} from "../services/userService";

// components import
// import UserForm from "../components/user/UserForm";
// import UserList from "../components/user/UserList";

import UserForm from "../user/UserForm";
import UserList from "../user/UserList";
    
function Home() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // users fetch karto
  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  // page load zalyavar call karto
  useEffect(() => {
    fetchUsers();
  }, []);

  // add user
  const handleAdd = async (data) => {
    await createUser(data);
    fetchUsers();
  };

  // update user
  const handleUpdate = async (id, data) => {
    await updateUser(id, data);
    setEditingUser(null);
    fetchUsers();
  };

  // delete user
  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>MERN CRUD App</h2>

      <UserForm
        addUser={handleAdd}
        updateUser={handleUpdate}
        editingUser={editingUser}
      />

      <UserList
        users={users}
        deleteUser={handleDelete}
        setEditingUser={setEditingUser}
      />
    </div>
  );
}

export default Home;