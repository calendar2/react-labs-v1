type UserType = {
  id: number;
  name: string;
  onClick: (id: number) => void;
};

function UserItem(user: UserType) {
  const { id, name, onClick } = user;

  return (
    <li>
      <span>{name}</span>
      <button onClick={() => onClick(id)}>삭제</button>
    </li>
  );
}

export default UserItem;
