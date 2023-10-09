import React from 'react'

const UserProfile = ({userData}) => {
    const style = {
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px auto',
        width: '250px',
        height: '250px',
        textAlign: 'left',
        backgroundColor: 'purple',
        color: '#fff'
    }


    const cardStyle = {
        padding: '12px',
        fontSize: '18px',

    }
  return (
    <div className='UserProfil' style={style}>
        <div className='Card' style={cardStyle}>
            <p>Name: {userData.name}</p>
            <p>Age: {userData.age}</p>
            <p>Location: {userData.location}</p>
            <p>Skill: {userData.skills}</p>
        </div>
    
    </div>
  )
}

export default UserProfile