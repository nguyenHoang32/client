import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { deleteExperience } from '../../action/profile';
const Experience = ({ experience, deleteExperience }) => {

  return(
    <React.Fragment>
        <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        
        <tbody>
        {experience.map((item, index) => ( <tr key={index}>
            <td>{item.company}</td>
            <td className="hide-sm">{item.title}</td>
            <td className="hide-sm">
             {moment(item.from).format('LL') + '-' +(!item.to ? 'Now' : moment(item.to).format('LL')) }
            </td>
            <td>
              <button className="btn btn-danger" onClick={() => {
                deleteExperience(item._id)
                
              }}>
                Delete
              </button>
            </td>
          </tr>))}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default connect(null, { deleteExperience })(Experience);