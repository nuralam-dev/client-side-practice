import { use } from "react";

const User = ({ UserData }) => {
  const user = use(UserData());
  return (
    <div>
      {user.map((user) => (
        <div key={user.id}>
          <h1>name : {user.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default User;
