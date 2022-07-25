import { useState } from 'react'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Avatar from '@mui/material/Avatar';



const PhotoUpload = () => {
    const [profilePhoto, setProfilePhoto] = useState({
        file:[],
        filePreview:null
    })

    const handleChange = (evt) => {
        setProfilePhoto({
            ...profilePhoto,
            file: evt.target.files[0],
            filePreview: URL.createObjectURL(evt.target.files[0])
        })
    }

    const Input = styled('input')({
        display: 'none',
      });

    return(
        <div className='photo-button'>
        <h1>photo upload</h1>
        <Avatar
            alt="Profile Photo"
            src={profilePhoto.filePreview}
            sx={{ width: 56, height: 56 }}
        />
        <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" onChange={handleChange}/>
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      </div>
    )
}

export default PhotoUpload