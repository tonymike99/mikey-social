import "./RightSideBar.css";
import { Suggestions } from "../index";

function RightSideBar({ posts }) {
  return (
    <aside className="right-sidebar">
      <h3 className="margin-bottom-1">Suggestions</h3>
      <Suggestions posts={posts} />
    </aside>
  );
}

export { RightSideBar };
