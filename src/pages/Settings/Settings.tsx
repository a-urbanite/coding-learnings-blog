import { getAdditionalUserInfo, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase-config';
// import updateDispla

const Settings = (isAuth: any) => {

  const navigate = useNavigate();

  // console.log("USER OBJECT",isAuth)
  // console.log("AUTH OBJECT",auth)

  const [displayname, setdisplayname] = useState<string>(auth.currentUser!.displayName!);
  const [photoURL, setphotoURL] = useState<string>(auth.currentUser!.photoURL!);

  const updateUserProfile = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        await updateProfile(isAuth.isAuth, {'displayName': displayname, 'photoURL': photoURL});
        console.log(auth)
        navigate('/settings')
  }

  useEffect(() => {
    console.log(displayname)
  }, [displayname])
  



  return (
    <>
        <h1>Settings</h1>
        <p>Welcome {auth.currentUser?.displayName}! Change your profile information here.</p>
        <img src={auth.currentUser!.photoURL!} className="profilePic" alt='profilePic'></img>
        <form onSubmit={updateUserProfile}>
          <label htmlFor="displayname">User name:</label>
          <input id='displayname' onChange={(event) => {setdisplayname(event.target.value)}} defaultValue={displayname}></input>
          <label htmlFor="photoURL">photo URL:</label>
          <input id='photoURL' onChange={(event) => {setphotoURL(event.target.value)}} defaultValue={photoURL}></input>
          {/* <input></input> */}
          <input type="submit" value="Go!"/>
        </form>

        
    </>
  )
}

export default Settings