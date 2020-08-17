import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { deleteEducation } from '../../action/profile';
const Education = ({education , deleteEducation}) => {
    return(
      <React.Fragment>
      <h2 className="my-2">Education Credentials</h2>
        <table className="table">
            <thead>
              <tr>
                <th>School</th>
                <th className="hide-sm">Degree</th>
                <th className="hide-sm">Years</th>
                <th />
              </tr>
            </thead>
            <tbody>
            {education.map((item, index) => (
              <tr key={index}>
                <td>{item.school}</td>
                <td className="hide-sm">{item.degree}</td>
                <td className="hide-sm">
                {moment(item.from).format('LL') + '-' +(!item.to ? 'Now' : moment(item.to).format('LL')) }
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => {
                    deleteEducation(item._id)
                  }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
              
            </tbody>
          </table>
      
      </React.Fragment>
    )
  
  
}

Education.propTypes = {
  education: PropTypes.array.isRequired
}
export default connect(null, { deleteEducation })(Education);