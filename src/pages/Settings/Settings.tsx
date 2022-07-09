import { getAdditionalUserInfo, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase-config';
// import updateDispla

const Settings = (isAuth: any) => {

  console.log("USER OBJECT",isAuth)

  const [displayname, setdisplayname] = useState("");

  const updateUserProfile = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // console.log(displayname)
        const response = await updateProfile(isAuth.isAuth, {'displayName': displayname, 'photoURL': ""});
        console.log(response)
        // getProfile
        // getUser(isAuth.isAuth.uid)
        // getAdditionalUserInfo()
        console.log(auth)
  }

  useEffect(() => {
    console.log(displayname)
  }, [displayname])
  



  return (
    <>
        <h1>Settings</h1>
        <p>change profile information</p>
        <form onSubmit={updateUserProfile}>
          <input onChange={(event) => {setdisplayname(event.target.value)}} placeholder='your username'></input>
          <input type="submit" value="Send Request"/>
        </form>

        
    </>
  )
}

export default Settings