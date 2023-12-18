
import React, { useEffect } from 'react'

export default function Home() {

  const userName =
    null;
    //JSON.parse(sessionStorage.getItem('loginUser')).authorities[0].authority
    //JSON.parse(localStorage.getItem('loginUser')).authorities[0].authority;





  useEffect(() => {
    return() => {
      return //console.log('Home Role : ' + JSON.parse(localStorage.getItem('loginUser')).authorities[0].authority);
    }

    
    
    
  }, [])

  return (
    <div>Role of User is :  {userName}</div>
  )
}
