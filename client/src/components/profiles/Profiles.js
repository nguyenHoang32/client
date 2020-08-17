import React, { useEffect } from 'react';
import ProfileItem from './ProfileItem'
import { connect } from 'react-redux';

import { getProfiles } from '../../action/profile';
const Profiles = ({profile: { profiles, loading }, getProfiles }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles])
  return(
    <React.Fragment>
    {loading ? <h2>Loading ...</h2> : <React.Fragment>
          <h1 className='large text-primary'>Developers</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop' /> Browse and connect with
            developers
          </p>
          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </React.Fragment>}
      
    </React.Fragment>
  )
}
const mapStateToProps = (state) => ({
  profile: state.profile
})

export default connect(mapStateToProps, { getProfiles })(Profiles);