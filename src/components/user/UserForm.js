import { useState, useEffect } from "react";

function UserForm({ addUser, updateUser, editingUser }) {

  // form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: ""
  });

  // edit mode madhe data fill karto
  useEffect(() => {
    if (editingUser) {
      setForm(editingUser);
    }
  }, [editingUser]);

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingUser) {
      updateUser(editingUser._id, form);
    } else {
      addUser(form);
    }

    // form reset
    setForm({ name: "", email: "", age: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        placeholder="Age"
        value={form.age}
        onChange={(e) => setForm({ ...form, age: e.target.value })}
      />

      <button type="submit">
        {editingUser ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default UserForm;