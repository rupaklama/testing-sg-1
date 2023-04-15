import { useState } from "react";

const UserForm = ({ onUserAdd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    onUserAdd({ name, email });

    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>

      <button>Add User</button>
    </form>
  );
};
export default UserForm;
