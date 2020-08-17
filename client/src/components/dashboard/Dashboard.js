import React, { useEffect } from "react";
import Education from './Education';
import Experience from './Experience';
import DashboardAction from "./DashboardAction";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "../../action/profile";
const Dashboard = ({
  profile: { profile, loading },
  auth: { user },
  getCurrentProfile,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [loading, getCurrentProfile])
  return loading && profile === null ? (
    <h1>Loading ...</h1>
  ) : (
    <React.Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>

      {profile !== null ? (
        <React.Fragment>
        <DashboardAction />
        {profile.education.length > 0 && <Education education={profile.education}/>}
        {profile.experience.length > 0 && <Experience experience={profile.experience}/>}
        </React.Fragment>

      ) : (
        <React.Fragment>
          <p>You have not yet setup profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create profile
          </Link>
        </React.Fragment>
      )}
     

    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
