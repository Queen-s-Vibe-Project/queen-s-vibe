import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'
import axios from 'axios'
import "../InstructorPage/InstructorPage.css";

const PhotoUpload = ({userPhoto, userId}) => {
    const dispatch = useDispatch()
    const [profilePhoto, setProfilePhoto] = useState(userPhoto)
    const [photoChange, setPhotoChange] = useState(false)
    const [file, setFile] = useState(null)
    const handleChange = (evt) => {
        setProfilePhoto(URL.createObjectURL(evt.target.files[0]))
        setFile(evt.target.files[0])
        setPhotoChange(true)
    }

    const Input = styled('input')({
        display: 'none',
      });
    
    const handleSubmit = async (evt) => {
      evt.preventDefault()
      setPhotoChange(false)
      const formData = new FormData()
      formData.append("image", file)
      const result = await axios.post('/upload', formData)
      console.log(result.data.Location)
      dispatch({
        type: "UPDATE_PHOTO",
        payload: {
          id: userId,
          avatar: result.data.Location
        }
      })
      
    }

    return (
      <div className="photo-button">
        <form action="" onSubmit={handleSubmit}>
          <Avatar
            alt="Profile Photo"
            src={profilePhoto}
            sx={{ width: 175, height: 175 }}
          />
          <label htmlFor="icon-button-file">
            <Input
              accept="image/*"
              id="icon-button-file"
              type="file"
              onChange={handleChange}
            />
            <IconButton
              sx={{ color: "#880088" }}
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
            {photoChange && <Button type="submit">Submit</Button>}
          </label>
        </form>
      </div>
    );
}

export default PhotoUpload