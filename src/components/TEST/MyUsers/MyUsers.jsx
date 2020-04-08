import React from 'react'

const MyUsers=(props)=>{
  return(
      props.users.map(user=><div key={user._id}>
            <h1>{user.username}</h1>
      <p>{user.createdAt}</p>
      </div>)
  )
}
export  default MyUsers