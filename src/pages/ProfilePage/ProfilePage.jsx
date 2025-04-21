import React, { useEffect, useState } from 'react'
import "./ProfilePage.css"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileThunk, getStatusThunkCreator } from '../../reducers/profileReducer'
import { SocialAPI } from '../../api/api'
import Status from '../../Components/Status/Status'

function ProfilePage() {
  const [edit, setEdit] = useState(false)
  const {id} = useParams()
  const {profile, userStatus} = useSelector((state) => state.profilePage)

  // useEffect(() => {

  // }, [myStatus])

  const dispatch = useDispatch()


  const changeProfilePhoto =(e) => {
    const files = e.target.files[0]
    console.log(files)
    SocialAPI.changePhoto(files)
    .then((res) => console.log(res))
  }

  useEffect(() => {
    dispatch(getProfileThunk(id))
    dispatch(getStatusThunkCreator(id))
  }, [id])

  return (
    <div>
      <img src={profile?.photos?.small} alt="" />
        <h2>{profile?.fullName}</h2>
        {
          edit ?  <Status userStatus={userStatus} setEdit={setEdit}/> : <h3 onDoubleClick={() => setEdit(true)}>{userStatus}</h3>
        }
        <input type="file" onChange={changeProfilePhoto} />
    </div>
  )
}

export default ProfilePage