import "./RightSideBar.css";
import { Suggestions } from "../index";

function RightSideBar({ users }) {
  return (
    <aside className="right-sidebar">
      <Suggestions users={users} />
    </aside>
  );
}

export { RightSideBar };
