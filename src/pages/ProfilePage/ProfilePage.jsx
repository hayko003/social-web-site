import React, { useEffect } from 'react'
import "./ProfilePage.css"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileThunk } from '../../reducers/profileReducer'
import { SocialAPI } from '../../api/api'
import logo from "../../assets/facegram_logo.png"

function ProfilePage() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const {profile} = useSelector((state) => state.profilePage)

  const changeProfilePhoto =(e) => {
    const files = e.target.files[0]
    console.log(files)
    SocialAPI.changePhoto(files)
    .then((res) => console.log(res))
  }

  useEffect(() => {
    dispatch(getProfileThunk(id))
  }, [id])
  return (
    <div>
      <img src={profile?.photos?.small} alt="" />
        <h2>{profile?.fullName}</h2>
        <input type="file" onChange={changeProfilePhoto} />
    </div>
  )
}

export default ProfilePage