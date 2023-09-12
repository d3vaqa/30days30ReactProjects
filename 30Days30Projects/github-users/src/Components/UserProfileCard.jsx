import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';


const UserProfileCard = () => {
    
    const [userData, setUserData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setUserData(data)
        })
        .catch((error) => console.error('Error fetching data', error))

    },[])

    const CapitalizeFirstLetter = (name) =>{
        return name.charAt(0).toUpperCase() + name.slice(1)
    
    
    }
    
  return (
    <div>
    {userData.map((user) => (
        <Card key={user.id} className="mb-3 custom-card">
          <Card.Body>
            <Row>
              <Col sm={2}>
                <img
                  src={user.avatar_url}
                  alt={`${user.login}'s Avatar`}
                  className="img-fluid rounded-circle"
                />
              </Col>
              <Col sm={10}>
                <h5>{CapitalizeFirstLetter(user.login)}</h5>
                <p>Name: {user.name}</p>
                <p>ID: {user.id}</p>
            
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
  </div>

  )
}

export default UserProfileCard