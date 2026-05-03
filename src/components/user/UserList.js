function UserList({ users, deleteUser, setEditingUser }) {
  return (
    <div>
      <h3>User List</h3>

      {users.map((u) => (
        <div key={u._id}>
          {u.name} | {u.email} | {u.age}

          <button onClick={() => setEditingUser(u)}>
            Edit
          </button>

          <button onClick={() => deleteUser(u._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default UserList;