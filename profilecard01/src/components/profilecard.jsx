import { Loader } from "lucide-react";

const ProfileCard = (props) => {
  return (
    <div className="profile-card">
      <div className="card-header">
        <h1 className="profile-name">{props.name}</h1>
        {
          <div className="connecting-status">
            <Loader className="loader-icon" size={16} />
            <span>{props.status}</span>
          </div>
        }
      </div>

      <div className="profile-image-container">
        <img
          src={props.profileImg}
          alt="Vanshuu"
          className="profile-image"
        />
      </div>

      <div className="card-footer">
        <div className="user-info">
          <img
            src={props.profileImg}
            alt="Vanshuu avatar"
            className="user-avatar"
          />
          <div className="user-details">
            <p className="username">{props.username}</p>
            <p className="timestamp">{props.lastSeen}</p>
          </div>
          <div className="online-indicator"></div>
        </div>

        <button className="add-member-btn">+ Add member</button>
      </div>
    </div>
  );
};

export default ProfileCard;
