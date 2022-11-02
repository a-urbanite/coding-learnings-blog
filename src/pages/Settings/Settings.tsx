// import userEvent from '@testing-library/user-event';
import { updateProfile } from 'firebase/auth';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase-config';
import './Settings.css'

const Settings = (isAuth: any) => {
  const navigate = useNavigate();
  const [displayname, setdisplayname] = useState<string>(auth.currentUser!.displayName!);
  const [photoURL, setphotoURL] = useState<string>(auth.currentUser!.photoURL!);

  const updateUserProfile = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        await updateProfile(isAuth.isAuth, {'displayName': displayname, 'photoURL': photoURL});
        navigate('/settings')
  }

  return (
    <div className='page pageFrame'>
        <h1 className='sectionTitleLeft'>Settings</h1>
        <p>Welcome {auth.currentUser?.displayName}! Change your profile information here.</p><br/>
        <form className='globalForm' onSubmit={updateUserProfile}>
          <label htmlFor="displayname">User name:</label>
          <input 
            className='globalForm__input'
            id='displayname' 
            onChange={(event) => {setdisplayname(event.target.value)}} 
            defaultValue={displayname}></input>
          <label htmlFor="photoURL">photo URL:</label>
          <input 
            className='globalForm__input'
            id='photoURL' 
            onChange={(event) => {setphotoURL(event.target.value)}} 
            defaultValue={photoURL}></input>
          <label htmlFor="email">Email:</label>
          <input 
            className='globalForm__input'
            id='email' 
            defaultValue={auth.currentUser!.email!}/>
          <input 
            className='globalBtn'
            type="submit" 
            value="Go!"/>
        </form>
    </div>
  )
}

export default Settings