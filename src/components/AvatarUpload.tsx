import React, { useState, useRef } from 'react'
import {
  BodyContent,
  PhotoRetangle,
  ButtonUpload,
  PhotoDiv,
  ButtonSave,
  CloseButton,
} from './AvatarUploadStyle'
import InitialPic from '../assets/background.svg'
import CloseButtonIcon from '../assets/close.svg'
import ErrorWarning from '../assets/error.svg'
import AvatarEditor from 'react-avatar-editor'
import Slider from '@material-ui/core/Slider'

const AvatarUpload: React.FC = () => {
  const fileInputField = useRef(null)
  const [image, setImage] = useState({ preview: '', raw: '' })
  const [empty, setEmpty] = useState(true)
  const [error, setError] = useState(false)
  const [logo, setLogo] = useState(false)
  const [value, setValue] = useState(2)
  let editorRef = useRef<AvatarEditor>(null)

  const validateFile = file => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']

    if (validTypes.indexOf(file.type) === -1) {
      return false
    }
    return true
  }

  const handleClick = e => {
    fileInputField.current.click()
  }

  const handleChange = e => {
    e.preventDefault()

    if (e.target.files.length) {
      const file = e.target.files[0]
      setLogo(false)
      if (validateFile(file)) {
        setError(false)
        setEmpty(false)
        setImage({
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0],
        })
      } else {
        setError(true)
      }
    }
  }

  const dragOver = e => {
    e.preventDefault()
  }

  const dragEnter = e => {
    e.preventDefault()
  }

  const dragLeave = e => {
    e.preventDefault()
  }

  const fileDrop = e => {
    e.preventDefault()
    const file = e.dataTransfer.files
    var mimeType = file[0]
    setLogo(false)
    if (validateFile(mimeType)) {
      setError(false)
      setEmpty(false)

      setImage({
        preview: URL.createObjectURL(mimeType),
        raw: mimeType,
      })
    } else {
      setError(true)
    }
  }

  const handleChangeZoom = (event, newValue) => {
    setValue(newValue)
  }

  const handleClickClose = e => {
    setEmpty(true)
  }

  const retrieveUpload = e => {
    setError(false)
    setLogo(false)
  }

  const onClickSave = () => {
    if (editorRef && editorRef.current) {
      let url = editorRef.current.getImageScaledToCanvas().toDataURL()
      setImage({
        preview: url,
        raw: url,
      })
      setLogo(true)
    }
  }

  return (
    <div>
      <BodyContent>
        {!logo && empty && !error && (
          <PhotoRetangle upload>
            <input
              type="file"
              accept="image/x-png,image/gif,image/jpeg"
              ref={fileInputField}
              onChange={handleChange}
              style={{ display: 'none' }}
            />
            <ButtonUpload
              onDragOver={dragOver}
              onDragEnter={dragEnter}
              onDragLeave={dragLeave}
              onDrop={fileDrop}
              onClick={handleClick}
            >
              <div className="inner-container">
                <div className="title-container">
                  <InitialPic />
                  <h1>Organization Logo</h1>
                </div>
                <h2>Drop the image here or click to browse.</h2>
              </div>
            </ButtonUpload>
          </PhotoRetangle>
        )}
        {!empty && !error && !logo && (
          <PhotoRetangle>
            <div className="photo-grid">
              <PhotoDiv>
                <AvatarEditor
                  image={image.preview}
                  ref={editorRef}
                  width={114}
                  height={114}
                  border={0}
                  borderRadius={56}
                  color={[242, 245, 248, 1.0]} // RGBA
                  scale={value}
                />
              </PhotoDiv>
              <div className="itens-div">
                <div className="close-button">
                  <CloseButton onClick={handleClickClose}>
                    <CloseButtonIcon />
                  </CloseButton>
                </div>
                <div className="slider-div">
                  <Slider
                    defaultValue={value}
                    onChange={handleChangeZoom}
                    min={1}
                    max={10}
                  />
                </div>
                <div className="button-div">
                  <ButtonSave onClick={onClickSave}>
                    <h1>Save</h1>
                  </ButtonSave>
                </div>
              </div>
            </div>
          </PhotoRetangle>
        )}
        {logo && !error && (
          <PhotoRetangle logoUpload>
            <div className="photo-grid-logo">
              <PhotoDiv>
                <img src={image.preview} alt="logo" />
              </PhotoDiv>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputField}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                />
                <ButtonUpload
                  onDragOver={dragOver}
                  onDragEnter={dragEnter}
                  onDragLeave={dragLeave}
                  onDrop={fileDrop}
                  onClick={handleClick}
                  logoUpload
                >
                  <div className="inner-container">
                    <div className="title-container">
                      <InitialPic />
                      <h1>Organization Logo</h1>
                    </div>
                    <h2>Drop the image here or click to browse.</h2>
                  </div>
                </ButtonUpload>
              </div>
            </div>
          </PhotoRetangle>
        )}
        {error && (
          <PhotoRetangle>
            <div className="photo-grid-logo">
              <PhotoDiv error>
                <ErrorWarning />
              </PhotoDiv>
              <div>
                <div className="error-container">
                  <h1>Sorry, the upload failed.</h1>
                  <a onClick={retrieveUpload}>Try again</a>
                </div>
              </div>
            </div>
          </PhotoRetangle>
        )}
      </BodyContent>
    </div>
  )
}

export default AvatarUpload
