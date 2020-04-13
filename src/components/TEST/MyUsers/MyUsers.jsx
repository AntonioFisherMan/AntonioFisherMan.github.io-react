import React from 'react'

class MyUsers extends React.Component{
 render(){

   return(
    this.props.users.map(user=><div key={user._id}>
      
      <h1 >{user.username}</h1>
<p>{user.createdAt}</p>
</div>)
   )
 }
}

export  default MyUsers