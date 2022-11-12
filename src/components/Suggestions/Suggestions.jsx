import { ProfileHeader } from "../index";

function Suggestions({ users }) {
  return users.map((user) => <ProfileHeader key={user._id} user={user} />);
}

export { Suggestions };
