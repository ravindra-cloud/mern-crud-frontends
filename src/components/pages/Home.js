import { useEffect, useState } from "react";
import { getUsers, createUser, updateUser, deleteUser } from "../services/userService";
import UserForm from "../user/UserForm";
import UserList from "../user/UserList";

function Home() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await getUsers();
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsers([]);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAdd = async (data) => {
    await createUser(data);
    fetchUsers();
  };

  const handleUpdate = async (id, data) => {
    await updateUser(id, data);
    setEditingUser(null);
    fetchUsers();
  };

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