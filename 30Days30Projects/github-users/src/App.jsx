import { useState } from 'react'
import UserProfileCard from './Components/UserProfileCard'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='container mx-auto justify-content-center align-items-center'>
   
   <UserProfileCard />
   
   </div>
  )
}

export default App
