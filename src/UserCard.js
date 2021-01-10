import React from 'react'
import { Card } from 'react-bootstrap'

const UserCard = (props) => {
  console.log(props.user)
  return (
    <>
      <Card border="danger" style={{ width: '18rem' }}>
        <Card.Header>Name : {props.user.name}</Card.Header>
        <Card.Body>
          <Card.Title>Username : {props.user.username}</Card.Title>
          <Card.Text> Email : {props.user.email}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default UserCard
