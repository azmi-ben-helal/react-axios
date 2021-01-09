import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './UserCard'

const UserList = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    function fetchData() {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
          setData(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }

    fetchData()
  }, [])

  return (
    <>
      {data.map((user) => (
        <div key={user.id}>
          <User user={user} />
        </div>
      ))}
    </>
  )
}
export default UserList
