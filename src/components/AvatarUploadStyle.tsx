import styled, { css } from 'styled-components'
import { pixelToRem } from '../styles/global'
import theme from '../styles/theme'

export const BodyContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding: ${pixelToRem(142)} ${pixelToRem(10)} 0;

  @media (min-width: 998px) {
    padding: ${pixelToRem(142)} ${pixelToRem(116)} 0;
  }
`

export const PhotoRetangle = styled.div`
  width: 100%;
  height: ${pixelToRem(250)};
  background: ${theme.colors.rectangle};
  border-radius: ${pixelToRem(8)};

  ${props =>
    props.upload &&
    css`
      border: ${pixelToRem(2)} dashed #c7cdd3;
      padding: ${pixelToRem(64)} ${pixelToRem(45)};
    `}

  .photo-grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .photo-grid-logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .close-button {
    display: flex;
    justify-content: flex-end;
  }

  @media (min-width: 998px) {
    width: ${pixelToRem(553)};
    height: ${pixelToRem(177)};

    ${props =>
      props.upload &&
      css`
        border: ${pixelToRem(2)} dashed #c7cdd3;
        padding: ${pixelToRem(64)} ${pixelToRem(146)};
      `}

    ${props =>
      !props.upload &&
      css`
        padding: ${pixelToRem(30)};
      `}

    ${props =>
      props.logoUpload &&
      css`
        border: ${pixelToRem(2)} dashed #c7cdd3;
        padding-top: ${pixelToRem(45)};
        padding-left: ${pixelToRem(32)};
      `}


    .photo-grid {
      display: grid;
      grid-template-columns: ${pixelToRem(64)} ${pixelToRem(250)};
      grid-gap: ${pixelToRem(117)};
    }

    .photo-grid-logo {
      display: grid;
      grid-template-columns: ${pixelToRem(64)} ${pixelToRem(250)};
      grid-gap: ${pixelToRem(117)};
    }

    .itens-div {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      justify-content: center;
    }

    .slider-div {
      width: ${pixelToRem(276)};
      height: ${pixelToRem(2)};
    }

    .button-div {
      display: flex;
      justify-content: flex-end;
      margin-top: ${pixelToRem(8)};
    }

    .error-container {
      padding-top: ${pixelToRem(28)};

      h1 {
        color: ${theme.colors.warn};
        font-weight: normal;
        font-size: ${pixelToRem(16)};
        line-height: 180%;
        letter-spacing: -0.02em;
      }

      a {
        font-weight: 500;
        font-size: ${pixelToRem(16)};
        line-height: 180%;
        letter-spacing: -0.02em;
        text-decoration: none;
        outline: none;
        cursor: pointer;
        color: ${theme.colors.button};
      }
    }
  }
`

export const ButtonUpload = styled.button`
  height: ${pixelToRem(60)};
  width: ${pixelToRem(261)};
  outline: none;
  background-color: transparent;
  border: none;
  cursor: pointer;

  .inner-container {
    height: ${pixelToRem(60)};
    width: ${pixelToRem(261)};
  }

  .title-container {
    display: grid;
    grid-template-columns: ${pixelToRem(10)} ${pixelToRem(200)};
    grid-gap: ${pixelToRem(5)};
    justify-content: center;

    svg {
      margin-top: ${pixelToRem(6)};
      margin-left: ${pixelToRem(23)};
    }
  }

  h1,
  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: ${pixelToRem(14)};
    line-height: 180%;
    color: ${theme.colors.text};
  }

  h2 {
    font-weight: normal;
    color: ${theme.colors.subtitle};
  }

  ${props =>
    props.logoUpload &&
    css`
      padding-top: ${pixelToRem(22)};
    `}
`
export const PhotoDiv = styled.div`
  width: ${pixelToRem(114)};
  height: ${pixelToRem(114)};
  border-radius: ${pixelToRem(57)};

  img {
    border-radius: ${pixelToRem(57)};
    margin-bottom: 100px;
  }

  svg {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: ${pixelToRem(47)};
  }

  ${props =>
    props.error &&
    css`
      background-color: ${theme.colors.error};
    `}
`

export const ButtonSave = styled.div`
  width: ${pixelToRem(109)};
  height: ${pixelToRem(32)};
  border-radius: ${pixelToRem(16)};
  background: ${theme.colors.button};
  cursor: pointer;

  h1 {
    text-align: center;
    font-weight: 500;
    font-size: ${pixelToRem(14)};
    line-height: 180%;
    color: ${theme.colors.background};
    letter-spacing: -0.02em;
    margin: ${pixelToRem(3)};
  }
`

export const CloseButton = styled.div`
  height: ${pixelToRem(12)};
  width: ${pixelToRem(12)};
  outline: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
`
