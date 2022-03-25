import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Montserrat-Thin';
    src: url('/fonts/Montserrat/Montserrat-Thin.ttf') format('ttf'), url('/fonts/Montserrat/Montserrat-Thin.ttf') format('ttf'),
      url('/fonts/Montserrat/Montserrat-Thin.ttf') format('truetype');
      font-weight:300;
      font-style:normal;
      font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat-Medium';
    src: url('/fonts/Montserrat/Montserrat-Medium.ttf') format('ttf'), url('/fonts/Montserrat/Montserrat-Medium.ttf') format('ttf'),
      url('/fonts/Montserrat/Montserrat-Medium.ttf') format('truetype');
      font-weight:400;
      font-style:normal;
      font-display: swap;
  }


  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat/Montserrat-Regular.ttf') format('ttf'), url('/fonts/Montserrat/Montserrat-Regular.ttf') format('ttf'),
      url('/fonts/Montserrat/Montserrat-Regular.ttf') format('truetype');
      font-weight:500;
      font-style:normal;
      font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat-SemiBold';
    src: url('/fonts/Montserrat/Montserrat-SemiBold.ttf') format('ttf'),
      url('/fonts/Montserrat/Montserrat-SemiBold.ttf') format('ttf'),
      url('/fonts/Montserrat/Montserrat-SemiBold.ttf') format('truetype');
      font-weight:600;
      font-style:normal;
      font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat-Bold';
    src: url('/fonts/Montserrat/Montserrat-Bold.ttf') format('ttf'), url('/fonts/Montserrat/Montserrat-Bold.ttf') format('ttf'),
      url('/fonts/Montserrat/Montserrat-Bold.ttf') format('truetype');
      font-weight:700;
      font-style:normal;
      font-display: swap;
  }


  @font-face {
    font-family: 'Montserrat-ExtraBold';
    src: url('/fonts/Montserrat/Montserrat-ExtraBold.ttf') format('ttf'), url('/fonts/Montserrat/Montserrat-ExtraBold.ttf') format('ttf'),
      url('/fonts/Montserrat/Montserrat-ExtraBold.ttf') format('truetype');
      font-weight:900;
      font-style:normal;
      font-display: swap;
  }

  :root {
        --mobile_width: 576px;
        --header_height: 70px;
        --header_mobile_height: 47px;
        --title_color: #2C2C2C;
        --font_color: #C5C5C5;
        --sub_color: #FF515C;
        --disable_color: #36373c;
    }

    html {
    font-size: 16px;
    }
    
    * {
    box-sizing: border-box;
    }

    body{
        background-color:#1E1E1E;
        font-family: 'Montserrat', sans-serif;
        -webkit-overflow-scrolling: touch;
    }

    &&& input {
    outline:none;
    }

    &&& p {
      padding:0;
      margin: 0;
    }

    &&& button {
      cursor: pointer;
      outline: none;
      background: none;
      border: none;
    }

    &&& p,
    span {
      color: var(--light02);
    }

    &&& h5 {
      font-size: calc(var(--global-text-size) * 1.1);
      color: var(--light01);
      white-space: pre-wrap;
    }

    &&& h6 {
      position: relative;
      color: var(--light04);
      font-weight: 400;
      font-size: calc(var(--global-text-size) * 0.9);
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      white-space: pre-wrap;
    }

    &&&.MuiTypography-root{
      color: var(--light01);
      font-weight: 500;
      font-size: calc(var(--global-text-size) * 2.2);
    }


    &&& .MuiOutlinedInput-input{
      line-height: 0rem;
      border-color: var(--light01);
    }
/*
    &&& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
      
      border-color: var(--light01);

      &&&:hover{
        border-color: var(--light01);
      }

      &&&:focused{
        border-color: var(--light01);
      }
    }
    8/

    &&& .MuiInputBase-input {
      border: 0;
      font-size: var(--global-text-size);
      background-color: var(--dark01);
    }

    &&& .MuiInputLabel-root {
      font-size: var(--global-text-size);
      color: var(--light02);
      opacity: 1;
      transition-property: all;
    }

    &&& .MuiInputLabel-shrink {
      opacity: 0;
      transform: translate(5rem, 1rem) scale(1);
    }

    &&& .MuiPaper-root {
      font-size: var(--global-text-size);
      color: var(--light02);
      background-color: var(--dark01);
      border-radius: var(--global-border-radius);
    }

    &&& .MuiMenuItem-root {
      font-size: var(--global-text-size);
      color: var(--light02);
      background-color: var(--dark01);
    }

    &&& .MuiMenuItem-gutters {
      font-size: var(--global-text-size);
      color: var(--light02);
    }

    
`;
