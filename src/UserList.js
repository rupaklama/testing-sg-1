const UserList = ({ users }) => {
  const renderUsers = users.map((user, i) => {
    return (
      <tr key={`user${i}`}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    );
  });

  return (
    <>
      {users.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>{renderUsers}</tbody>
        </table>
      )}
    </>
  );
};
export default UserList;
