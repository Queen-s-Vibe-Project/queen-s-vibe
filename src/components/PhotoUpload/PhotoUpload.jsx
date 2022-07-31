import { useState } from 'react'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'
import axios from 'axios'

const PhotoUpload = () => {
    const [profilePhoto, setProfilePhoto] = useState(null)
    const [file, setFile] = useState(null)
    const handleChange = (evt) => {
        setProfilePhoto(URL.createObjectURL(evt.target.files[0]))
        setFile(evt.target.files[0])
    }

    const Input = styled('input')({
        display: 'none',
      });
    
    const handleSubmit = async (evt) => {
      evt.preventDefault()
      const formData = new FormData()
      formData.append("image", file)
      const result = await axios.post('/upload', formData)
      console.log(result.data.Location)
    }

    return(
        <div className='photo-button'>
        <h1>photo upload</h1>
        <form action="" onSubmit={handleSubmit}>
        <Avatar
            alt="Profile Photo"
            src={profilePhoto}
            sx={{ width: 100, height: 100}}
        />
        <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" onChange={handleChange}/>
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      <Button type='submit'>Submit</Button>
      </label>
      </form>
      </div>
    )
}

export default PhotoUpload