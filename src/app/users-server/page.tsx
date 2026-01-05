type UserServer = {
  id: number;
  name: string;
  usename: string;
  email: string;
  password: string;
};

export default async function UserServer() {
  await  new Promise(resolve => setTimeout(resolve, 500))
  const res = await fetch("https://jsonplaceholder.typicode.com/users123");
  const users = await res.json();

  return (
    <div className="py-10">
      <div className="grid grid-cols-4 gap-4 ">
        {users.map((user: UserServer) => (
          <div
            key={user.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700"
          >
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
}
