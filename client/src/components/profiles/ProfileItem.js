import React from 'react';
import { Link } from 'react-router-dom';
const ProfileItem = ({ profile }) => {
  const {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
  } = profile;
  return(
    <div className="profile bg-light">
    <img
      className="round-img"
      src={avatar}
      alt=""
    />
    <div>
      <h2>{name}</h2>
      <p>{status} {company && <span> at {company}</span>}</p>
      <p>{location}</p>
      <Link to={`/profile/${_id}`} className="btn btn-primary">View Profile</Link>
    </div>
    <ul>
    {skills.map((skill, index) => {
      return(
        <li className="text-primary" key={index}>
        <i className="fas fa-check"></i> {skill}
      </li>
      )
    })}
    </ul>
  </div>
  )
}
export default ProfileItem;