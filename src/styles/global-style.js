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
        --font_color: #123123;
        --sub_color: #FF515C;
        --disable_color: #36373c;
    }

    html {
    font-size: var(--global-text-size);
    }
    
    * {
    box-sizing: border-box;
    }

    body{
        background-color:#1E1E1E;
        font-family: 'Montserrat', sans-serif;
        -webkit-overflow-scrolling: touch;
    }

     input {
    outline:none;
    }

     p {
      padding:0;
      margin: 0;
    }

     button {
      cursor: pointer;
      outline: none;
      background: none;
      border: none;
    }

     p,
    span {
      color: var(--light02);
    }

     h5 {
      font-size: calc(var(--global-text-size) * 1.1);
      color: var(--light01);
      white-space: pre-wrap;
    }

    h6 {
      position: relative;
      color: var(--light04);
      font-weight: 400;
      font-size: calc(var(--global-text-size) * 0.9);
      margin-top:1.4rem;
      margin-bottom: 0.5rem;
      white-space: pre-wrap;
    }

    .Mui-focused *{
      border-color: var(--highlight01) !important;
    }

    .Mui-focused.MuiInputLabel-root{
      color: var(--light03) !important;
    }

    .MuiInputAdornment-root *{
      color: var(--light03);
      font-weight: 400;
      font-size: var(--global-text-size);
    }
    
    .MuiSelect-select {
      display: flex;
      align-items: center;
    }

    .MuiOutlinedInput-root{
      font-size: var(--global-text-size);
      line-height: 0rem;
      background-color: var(--dark01);
      border-color: var(--light01);
      border-radius: var(--global-border-radius);

      &:hover .MuiOutlinedInput-notchedOutline{
        border-color: var(--light03);
        border-width: 0.08rem;
      }

      .MuiOutlinedInput-input{
        color: var(--light01);
        font-weight: 500;
        min-height: var(--global-text-size);
      }

      .MuiSvgIcon-root{
        fill : var(--light03);
      }
    }

    .MuiOutlinedInput-notchedOutline{
      border-color: var(--dark04);
      transition: border-color 0.12s ease-in-out , border-width 0.1s ease-in-out;
    }
    
    .MuiInputLabel-root{
      font-size: var(--global-text-size);
      line-height: var(--global-text-size);
      top: 35%;
      left: var(--global-text-size);
      transform: none;
      color : var(--light02);

      &.MuiInputLabel-shrink {
        display: none;
        transform: none;
      }

      &.MuiFormLabel-filled {
        opacity: 0;
      }
    }



    .approval-header__grid {
      &{
        display:flex;
        justify-content: center;
      }

      & .MuiSelect-select {
        justify-content: center;
        font-size: calc(var(--global-text-size) * 2.2);
      }

      & .MuiFormControl-root.approval-header__form-select{
        width: 60%;

        & .MuiOutlinedInput-root{
          line-height: 0rem;
          background-color: transparent;
          border: 0;
        }

        & .MuiOutlinedInput-input{
          color: var(--light01);
          min-height: calc(var(--global-text-size) * 2.2);
        }

        & .MuiInputLabel-root{
          color: var(--light01);
          font-weight: 500;
          font-size: calc(var(--global-text-size) * 2.2);
          line-height: var(--global-text-size);
          top: 35%;
          left: var(--global-text-size);
          transform: none;
          color : var(--light01);
        }

        & .MuiInputLabel-root{
          line-height: calc(var(--global-text-size) * 2.2);
          left:50%;
          top:50%;
          transform: translate(-50% , -50%);
          color : var(--light01);
        }

        & .MuiSvgIcon-root{
          fill : var(--light03);
        }

        & .MuiOutlinedInput-notchedOutline{
          border-color: transparent;
        }

        & *:hover .MuiOutlinedInput-notchedOutline{
          border-color: var(--highlight02) !important;
        }
      }
    }

    .MuiPaper-root{
      background-color: var(--dark01-transparent);
      backdrop-filter: blur(0.1rem);
      transform: translate(0,2px) !important;

      *{
        font-size : var(--global-text-size);
      }

      .MuiMenuItem-root{
        color: var(--light02);
      }
      .MuiMenuItem-root:hover{
        color: var(--light01) !important;
        background-color: var(--dark03);
      }
    }



    .MuiButton-root{
      background-color:var(--dark03);
      color: var(--light02);
      box-shadow: 0 0 0 var(--line-thickness) var(--dark05);
      border: none !important;
      
      &:hover{
        background-color: var(--dark02) !important;
        box-shadow: 0 0 0 calc(var(--line-thickness)*2) var(--light03);
        color: var(--light01);
      }

      &.Mui-disabled {
      background-color:var(--dark02);
        color : var(--dark05);
        box-shadow: 0 0 0 var(--line-thickness) var(--dark04);
      }
    }

    .MuiGrid-root{
      padding: 0;
      margin: 0;

      & .MuiGrid-item{
        display:flex;
        flex-direction: column;
        gap : 1rem;
        padding: 0rem 0.6rem;
        margin: 0;

      }
    }

    .MuiCheckbox-root {
      & svg {fill: var(--light01);}
    }

    .MuiTreeItem-content {
      color : var(--light02);
      padding: 0.4rem 0.1rem;

      & * {
        font-size: calc(var(--global-text-size) * 0.8) !important;
      }

      &.Mui-selected, .Mui-selected.Mui-focused {
        background-color: transparent !important;
        font-weight: 500;
        color: var(--light01);
        box-shadow: 0 0 0 var(--line-thickness) var(--dark05);
        border-radius: var(--global-border-radius);
      }
    }

`;
