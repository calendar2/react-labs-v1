type User = {
  name: string;
  age: number;
};

function Profile(user: User) {
  const { name, age } = user;

  return (
    <div>
      <h1>이름: {name}</h1>
      <h1>나이: {age}</h1>
    </div>
  );
}

export default Profile;
