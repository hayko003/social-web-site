import React, { useEffect } from 'react'
import "./ProfilePage.css"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileThunk } from '../../reducers/profileReducer'
function ProfilePage() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const {profile} = useSelector((state) => state.profilePage)

  useEffect(() => {
    dispatch(getProfileThunk(id))
  }, [id])
  return (
    <div>
      <img src={profile?.photos?.small} alt="" />
        <h2>{profile?.fullName}</h2>
    </div>
  )
}

export default ProfilePage