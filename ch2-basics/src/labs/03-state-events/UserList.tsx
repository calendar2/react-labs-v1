import { useState } from "react";
import UserItem from "./UserItem";

type UserType = {
  id: number;
  name: string;
};

function UserList() {
  const [users, setUsers] = useState<UserType[]>([
    { id: 1, name: "윤유저" },
    { id: 2, name: "김유저" },
  ]);
  const [inputText, setInputText] = useState("");

  const addUser = () => {
    const len = users.length;
    setUsers([
      ...users,
      {
        id: users[len - 1].id + 1,
        name: inputText,
      },
    ]);
    setInputText("");
  };

  const deleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="유저 추가하는 곳"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <button onClick={addUser}>추가</button>
      {users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          onClick={deleteUser}
        />
      ))}
    </div>
  );
}

export default UserList;
