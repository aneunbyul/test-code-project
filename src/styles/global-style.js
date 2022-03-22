import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${ normalize }

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
      /* width:100%;
            height:100%;
            overflow:hidden; */
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


`;
