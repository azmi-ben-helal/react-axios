import React from 'react'

const UserCard = (props) => {
  return (
    <>
      <div className="user-card">
        <div className="user-card card">
          <div className="card-body">
            <h4 className="card-title">{props.user.name}</h4>

            <p className="text-justify" style={{ fontSize: '14px' }}>
              {props.user.username}
            </p>
          </div>
          <div className="card-footer">
            <div className="clearfix">
              <div className="float-left mt-1">{props.user.email}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserCard
