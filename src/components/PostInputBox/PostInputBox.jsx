function PostInputBox() {
  const user = {
    firstName: "Tony",
    username: "tonymike",
    profilePic: require("../../assets/images/cristiano_ronaldo.png").default,
  };

  return (
    <div className="post-messsage-box">
      <img src={user.profilePic} alt={user.username} className="profile-pic" />
      <div className="post-messsage">
        <textarea
          className="postTextArea"
          id="postTextArea"
          placeholder={`Hi ${user.firstName}, how's the day like?`}
        ></textarea>
        <div className="post-message-footer">
          <div>
            <i className="fa-solid fa-image fa-xl"></i>
            <i className="fa-solid fa-face-smile fa-xl"></i>
          </div>
          <button className="btn btn-primary">
            <i className="fa-solid fa-paper-plane fa-lg" /> Post moment
          </button>
        </div>
      </div>
    </div>
  );
}

export { PostInputBox };
