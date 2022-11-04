import React from 'react'
import Sidebar from '../../components/sidebar2/Sidebar'
import Chat from '../../components/chat/Chat'
const Talk = () => {
  return (
    <div className='talk'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Talk