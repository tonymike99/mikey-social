import { ProfileHeader } from "../index";

function Suggestions({ users }) {
  return (
    <>
      <h2 className="text-center margin-bottom-2">Suggestions</h2>

      {users.map((user) => (
        <ProfileHeader key={user._id} user={user} />
      ))}
    </>
  );
}

export { Suggestions };
