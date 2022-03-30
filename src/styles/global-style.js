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

    .Mui-selected {
      outline: none !important;
    }

    .Mui-focused *{
      border-color: var(--highlight01) !important;
    }

    .Mui-focused.MuiInputLabel-root{
      color: var(--light03) !important;
      font-size: var(--global-text-size);
    }

    .MuiIconButton-root{
      &.Mui-disabled{
        opacity: 0;
      }
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
        border-width: 0.12rem;
      }

      &.Mui-focused{
        & legend, span {
          width:0 !important;
        }
      }

      .MuiOutlinedInput-input{
        color: var(--light01);
        -webkit-text-fill-color:var(--light01);
        font-weight: 500;
        min-height: var(--global-text-size);
      }

      &.Mui-disabled , &.Mui-disabled.MuiOutlinedInput-input{
        color:var(--light01);
        -webkit-text-fill-color:var(--light01);
        background-color: transparent;

        & .MuiSelect-select{
          color:var(--light01);
          -webkit-text-fill-color:var(--light01) !important;
        }

        & .MuiOutlinedInput-notchedOutline{
          border-color: var(--dark03);
          border-width: 0.08rem;
        }

        &:hover .MuiOutlinedInput-notchedOutline{
          border-color: var(--dark05);
          border-width: 0.08rem;
        }

        & svg {
          display: none;
        }
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

      &.Mui-disabled{
        color:transparent;
        -webkit-text-fill-color: transparent;
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
        min-width: 20rem;
        max-width: 30rem;

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

        & .MuiOutlinedInput-notchedOutline{
          border-color: transparent;
        }

        & *:not(.Mui-disabled):hover .MuiOutlinedInput-notchedOutline{
          border-color: var(--highlight02) !important;
        }
      }
    }

    .MuiPaper-root{
      background-color: var(--dark01-transparent);
      backdrop-filter: blur(0.1rem);
      transform: translate(0,2px) !important;
      border: 0.08rem solid var(--light05);
      border-radius: var(--global-border-radius);

      *{
        font-size : var(--global-text-size);
      }

      & * {
        color:var(--light03);
        
          align-items: center;
      }
      & .MuiButton-root{
        padding: 0.5rem;
      }

      & .MuiTypography-root {
        color:var(--light03);
        user-select: none;

        &.Mui-selected {
          font-weight: 500;
          color:var(--light02);
        }
      }

      .MuiMenuItem-root{
        color: var(--light02);
      }
      .MuiMenuItem-root:hover{
        color: var(--light01) !important;
        background-color: var(--dark03);
      }
    }

    .MuiDateRangePickerDay-root{

      &&&.MuiDateRangePickerDay-rangeIntervalDayHighlight {
        background-color: var(--lowlight01);
      }
      &&& .Mui-selected {
        background-color: var(--highlight02) !important;
      }
    }

    .MuiButton-root {
      &&& {
        background-color:var(--dark03);
        color: var(--light02);
        box-shadow: 0 0 0 var(--line-thickness) var(--dark05);
        border: none !important;
      }
      
      &&&:hover{
        background-color: var(--dark02) !important;
        box-shadow: 0 0 0 calc(var(--line-thickness)*2) var(--light03);
        color: var(--light01);
      }

      &&&.Mui-disabled {
        background-color:var(--dark02);
        color : var(--dark05);
        box-shadow: 0 0 0 var(--line-thickness) var(--dark04);
      }
    }

    .MuiGrid-root{
      & .MuiGrid-item{

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

    .MuiInput-root {
      & *{
        font-size: calc(var(--global-text-size) * 0.85);
        color: var(--light02);
      }
      
      & .MuiNativeSelet-select{
      
      }
    }

    .MuiDataGrid-root{
      border: none;

      & .MuiDataGrid-cellContent {
        font-size: calc(var(--global-text-size) * 0.85);
        color: var(--light02);
      }
      
      & .MuiDataGrid-columnHeaders {
        border: none;
        box-shadow: 0 var(--line-thickness) var(--light04);
      }

      & .MuiDataGrid-footerContainer {
        border: none;
        box-shadow: 0 calc(var(--line-thickness)*-1) var(--light04);
      }

      & .MuiDataGrid-columnHeader {
        font-size: calc(var(--global-text-size) * 0.85);
        color: var(--light02);

        & svg {
          fill: var(--light02);
        }
      }

      & .Mui-selected {
        background-color: var(--dark00) !important; 
      }

      & .MuiDataGrid-cell , .MuiDataGrid-columnHeader{
        border:none !important;
        box-shadow: 0 var(--line-thickness) var(--dark04);
      }

      .MuiDataGrid-cell:focus , .MuiDataGrid-columnHeader:focus{
        outline: none;
        box-shadow: 0 0 0 var(--line-thickness) var(--light05);
        border-radius: var(--global-border-radius);
        z-index: 100;
        & .MuiDataGrid-cellContent {
          color: var(--light01) !important;
        }
      }

      .MuiDataGrid-cell:focus-within {
          outline: none;
      }

      .MuiDataGrid-cellCheckbox {
        & *{
          box-shadow: 0 0 0 0 !important;
        }
      }

      .MuiDataGrid-selectedRowCount{
        color: var(--light01);
        font-size:var(--global-text-size);
      }

      .MuiTablePagination-select{
        color : var(--light02);
      }

      svg{
        fill : var(--light02);
      }
    }

    .MuiSvgIcon-root{
      fill : var(--light03);
    }


`;
