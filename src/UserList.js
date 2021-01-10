import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './UserCard'

const UserList = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      )
      setData(response.data)
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
