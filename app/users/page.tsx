import Link from "next/link";
import UserTable from "./UserTable";

export interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  searchParams: { sortOrder: string };
}

const UsersList = async ({searchParams: {sortOrder}}: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <Link href="users/new" className="btn">New User</Link>
      <UserTable users={users} sortOrder={sortOrder} />
    </>
  );
};

export default UsersList;
