import React from 'react'
import "./Navbar.css"
import Accordions from './Accordion'

const Navbar = () => {
    let showMenu = (e) => {
        console.log(e);
    }
  return (
    <>
    <nav className="nav-up">
    <div className="logo">
      <svg
        className="user"
        style={{width: "40px", height: "40px"}}
        viewBox="0 0 48 48"
        aria-hidden="true"
        aria-label
      >
        <path
          fill="#001F49"
          fillRule="evenodd"
          d="M24,23.17a5.89,5.89,0,0,1-5.83-5.94A5.77,5.77,0,0,1,24.1,11.5a5.6,5.6,0,0,1,5.73,5.73A5.89,5.89,0,0,1,24,23.17Zm.1-10.67a4.78,4.78,0,0,0-4.93,4.73,4.83,4.83,0,1,0,9.66,0A4.63,4.63,0,0,0,24.1,12.5Z"
        />
        <path
          fill="#001F49"
          fillRule="evenodd"
          d="M22.94,37c-3.63,0-5.86-.66-7-2.06-1.35-1.69-.77-4.07-.22-6.37.1-.39.2-.79.28-1.18.43-1.92,2.5-4.17,3.74-5.51l.63-.69.74.68-.63.68c-1.1,1.19-3.13,3.4-3.5,5.06-.09.4-.19.8-.28,1.2-.53,2.16-1,4.2,0,5.5S19.9,36.06,23.49,36h1c3.61.06,5.81-.49,6.77-1.69s.55-3.34,0-5.5c-.09-.4-.19-.8-.28-1.2-.36-1.61-2.32-3.84-3.38-5L27,21.79l.75-.67.68.78c1.2,1.36,3.2,3.63,3.61,5.49.08.39.18.79.28,1.18.55,2.3,1.13,4.68-.22,6.37-1.19,1.47-3.59,2.12-7.56,2.06H22.94Z"
        />
      </svg>
      <div onClick={() => showMenu(block)} className="menu">
      <svg className="bar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
      <div id="menu"> MENU</div>
    </div>

      <svg className="header_large"  viewBox="0 0 681.14 70.62" aria-label>
        <path
          fill="#001F49"
          className="cls-1"
          d="M33.69,32.43a33.94,33.94,0,0,1-13.14,2.66C10.53,35.09,0,28.87,0,17.85S9.83.15,20.05.15A25.75,25.75,0,0,1,35.44,4.76l-2.8,6c-2.46-4.36-7-6.27-11.78-6.27C13.48,4.46,9,10.38,9,17.85A12.66,12.66,0,0,0,21.76,31c4.71,0,10.12-2.66,13.38-6Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M73.13,34.49l0-14.89H58.54V34.49H50.47L50.52.75h8V15.34H73.08V.75H81.2V34.49Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M122.45,34.49c-1.51-3.51-3.11-7-4.66-10.43h-12l-5.07,10.43H95.23L112,.7h3.16C117,5.51,119.49,10,121.8,14.64c3.25,6.66,6.51,13.23,9.87,19.85ZM111.72,11.43l-3.76,8h7.57Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M166.51,34.49c-3.06-4.37-8.62-13.79-9.13-14.59a13.14,13.14,0,0,1-2.45-.2l1.45-2.16a6.32,6.32,0,0,0,6.47-6.66c0-4.66-4.26-5.92-7.47-5.92h-1.1V34.49H146.2V.75h11c5.82,0,13.29,2.46,13.29,9.53,0,4.56-2.76,7.21-6.37,8.57,4.11,5.51,8.12,10.62,11.83,15.64Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M190.51,34.49V.75h8.17V30.33c1.66.05,3.31.05,5,.05a81.42,81.42,0,0,0,12.22-.66l-2,4.77Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M230.41,34.49V.75h20.65l2.21,4.71A78.76,78.76,0,0,0,243,4.86h-4.51V15.34H240a98,98,0,0,0,10.13-.4L250,19.75c-3-.15-6.07-.25-9.08-.25h-2.45V30.33l5.76.05a79.34,79.34,0,0,0,11.48-.66l-2,4.77Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M270.6,24.76c3,3.66,7.07,6,10.18,6a4.05,4.05,0,0,0,4.31-4.31c0-5.92-15.74-5-15.74-16.29,0-6.27,5.22-9.88,10.83-9.88,3.61,0,7.92,1.05,10.73,3.26l-3.06,5.86c-1.66-2.7-4.31-4.86-7.67-4.86a3.39,3.39,0,0,0-3.61,3.41c0,6.77,16.09,5.26,16.09,16.69,0,6.62-5.81,10.48-12.73,10.48a18.59,18.59,0,0,1-12-4.21Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M341,34.49V4.86H328.24L329.5.75H362l0,4.11H349.15V34.49Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M387.64,34.49c.05-3.11.05-6.22.05-9.33V20.3C383,13.78,378.31,7.22,373.55.75h9.07c3.46,4.91,7,9.83,10.53,14.69L404.93.75h5.21L395.76,18.5v16Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M443.57,34.49c-3.06-4.37-8.62-13.79-9.12-14.59a13.25,13.25,0,0,1-2.46-.2l1.46-2.16a6.31,6.31,0,0,0,6.46-6.66c0-4.66-4.26-5.92-7.47-5.92h-1.1V34.49h-8.07V.75h11c5.81,0,13.28,2.46,13.28,9.53,0,4.56-2.75,7.21-6.36,8.57,4.11,5.51,8.12,10.62,11.82,15.64Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M500.21,34.94c-1.8-4.86-4.11-9.63-6.07-14.44-1.25-3.16-2.45-6.26-3.66-9.42L480.26,34.94H477.2c-2.05-5.62-4.71-11-7.06-16.64-2.46-5.82-4.67-11.73-7.07-17.6h8.52c3.21,7.72,6.26,15.54,9.32,23.31l9.77-24h3.66l9.58,24.26L514,.7h4.71L503.87,34.94Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M554.74,34.49l0-14.89H540.15V34.49h-8.06l0-33.74h8V15.34h14.54V.75h8.12V34.49Z"
        />
        <path fill="#001F49" className="cls-1" d="M579.85,34.49V.75H588V34.49Z" />
        <path
          fill="#001F49"
          className="cls-1"
          d="M615.34,34.49V4.86H602.56L603.81.75h32.53l-.05,4.11H623.46V34.49Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M660.14,34.49V4.86H647.36L648.61.75h32.53l0,4.11H668.26V34.49Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M194.1,70.62a5,5,0,0,1-3.08-.79,3,3,0,0,1-1-2.51V66h1.8v1.17a1.55,1.55,0,0,0,.59,1.35,3.28,3.28,0,0,0,1.92.43,4.27,4.27,0,0,0,1.11-.12,1.4,1.4,0,0,0,.69-.41,1.64,1.64,0,0,0,.35-.8,7.09,7.09,0,0,0,.1-1.25V60.58h1.8v6.23a3.74,3.74,0,0,1-1,2.94A4.87,4.87,0,0,1,194.1,70.62Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M204.82,70.32V60.56H214v1.71h-7.38v2h4.85V66h-4.85v2.65h7.77v1.68Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M229.23,70.32l-2.66-4.12H222.7v4.12h-1.8V60.58h6.67a3.61,3.61,0,0,1,2.37.73,2.55,2.55,0,0,1,.86,2.06,2.76,2.76,0,0,1-.58,1.74,2.83,2.83,0,0,1-1.64,1l2.67,4.19Zm-1.66-8H222.7v2.22h4.87c.92,0,1.38-.37,1.38-1.12a1.07,1.07,0,0,0-.32-.81A1.62,1.62,0,0,0,227.57,62.27Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M246,70.32V63.93l-3.45,5-3.44-5v6.39h-1.82V60.56h1.47l3.79,5.38,3.8-5.38h1.47v9.76Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M259.29,65.38v4.94h-1.78V65.41L253,60.56h2.38l3,3.25,3-3.25h2.46Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M277,70.32,271.32,64v6.32h-1.78V60.56h1l5.72,6.34V60.56H278v9.76Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M300.74,70.62A10,10,0,0,1,295.31,69l.91-1.55a9,9,0,0,0,2.25,1.11,7.2,7.2,0,0,0,2.1.35,3.28,3.28,0,0,0,2-.5,1.4,1.4,0,0,0,.67-1.17,1.15,1.15,0,0,0-.65-1,5,5,0,0,0-2.11-.4,18.37,18.37,0,0,1-1.95-.13,4.85,4.85,0,0,1-1.47-.38,2.12,2.12,0,0,1-.94-.8,2.6,2.6,0,0,1,.77-3.39,5,5,0,0,1,3-.8,7.8,7.8,0,0,1,2.42.37,10,10,0,0,1,2.35,1.11l-.91,1.52a7.85,7.85,0,0,0-2-1,6.36,6.36,0,0,0-1.88-.31,3.13,3.13,0,0,0-1.66.35,1,1,0,0,0-.54.82.79.79,0,0,0,.61.76,7.1,7.1,0,0,0,2.15.22,6.36,6.36,0,0,1,3.5.8,2.68,2.68,0,0,1,1.21,2.41,2.76,2.76,0,0,1-.3,1.27,3.35,3.35,0,0,1-.87,1,4.42,4.42,0,0,1-1.37.7A6,6,0,0,1,300.74,70.62Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M316,62.22v8.1h-1.81v-8.1h-4V60.56H320v1.66Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M334.53,70.32l-2.66-4.12H328v4.12h-1.8V60.58h6.67a3.61,3.61,0,0,1,2.37.73,2.55,2.55,0,0,1,.86,2.06,2.76,2.76,0,0,1-.58,1.74,2.83,2.83,0,0,1-1.64,1l2.67,4.19Zm-1.66-8H328v2.22h4.87c.92,0,1.38-.37,1.38-1.12a1.07,1.07,0,0,0-.32-.81A1.62,1.62,0,0,0,332.87,62.27Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M342.61,70.32V60.56h9.17v1.71h-7.37v2h4.85V66h-4.85v2.65h7.77v1.68Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M358.66,70.32V60.56h9.18v1.71h-7.37v2h4.84V66h-4.84v2.65h7.77v1.68Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M379.17,62.22v8.1h-1.81v-8.1h-4V60.56h9.76v1.66Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M400.35,70.32V60.56h1.8v8.08h7v1.68Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M420.2,70.62a7.3,7.3,0,0,1-2.44-.39,5.9,5.9,0,0,1-1.88-1.1,5.13,5.13,0,0,1-1.22-1.64,5,5,0,0,1,0-4.07,4.88,4.88,0,0,1,1.22-1.63,5.88,5.88,0,0,1,1.88-1.09,7.73,7.73,0,0,1,4.88,0,5.68,5.68,0,0,1,1.9,1.08,4.88,4.88,0,0,1,1.22,1.63,5.05,5.05,0,0,1,.43,2.05,5,5,0,0,1-.43,2,4.92,4.92,0,0,1-1.22,1.64,5.88,5.88,0,0,1-1.9,1.09A7.3,7.3,0,0,1,420.2,70.62Zm0-8.61a5,5,0,0,0-1.71.27,4.07,4.07,0,0,0-1.29.74,3.11,3.11,0,0,0-.82,1.09,3.16,3.16,0,0,0-.28,1.34,3.2,3.2,0,0,0,.28,1.35,3.3,3.3,0,0,0,.82,1.09,4.05,4.05,0,0,0,1.29.73,5,5,0,0,0,1.71.27,5.23,5.23,0,0,0,1.73-.27,3.9,3.9,0,0,0,1.3-.73,3.34,3.34,0,0,0,.81-1.1,3.42,3.42,0,0,0,.28-1.34,3.34,3.34,0,0,0-.28-1.33,3.27,3.27,0,0,0-.82-1.1,4.12,4.12,0,0,0-1.3-.74A5.13,5.13,0,0,0,420.2,62Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M440.21,70.32,434.5,64v6.32h-1.78V60.56h1l5.72,6.34V60.56h1.77v9.76Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M452.78,70.32h-4.36V60.56h4.36a6.38,6.38,0,0,1,2.2.37,5.07,5.07,0,0,1,1.66,1,4.67,4.67,0,0,1,1.05,1.56,5,5,0,0,1,.38,2,5.11,5.11,0,0,1-.36,1.94,4.1,4.1,0,0,1-1,1.53A4.68,4.68,0,0,1,455,70,6.46,6.46,0,0,1,452.78,70.32Zm0-8.07h-2.58v6.39h2.58a3.42,3.42,0,0,0,2.55-.89,3.16,3.16,0,0,0,.87-2.3,3.11,3.11,0,0,0-.92-2.29A3.35,3.35,0,0,0,452.8,62.25Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M470.14,70.62a7.2,7.2,0,0,1-2.43-.39,6.06,6.06,0,0,1-1.89-1.1,5.1,5.1,0,0,1-1.21-1.64,4.93,4.93,0,0,1,0-4.07,4.86,4.86,0,0,1,1.21-1.63,6,6,0,0,1,1.89-1.09,7.2,7.2,0,0,1,2.43-.4,7.36,7.36,0,0,1,2.45.39,5.63,5.63,0,0,1,1.89,1.08,4.75,4.75,0,0,1,1.22,1.63,4.89,4.89,0,0,1,.43,2.05,4.82,4.82,0,0,1-1.65,3.69,5.83,5.83,0,0,1-1.89,1.09A7.36,7.36,0,0,1,470.14,70.62Zm0-8.61a5,5,0,0,0-1.71.27,4,4,0,0,0-1.28.74,3.11,3.11,0,0,0-.82,1.09,3.16,3.16,0,0,0-.28,1.34,3.2,3.2,0,0,0,.28,1.35,3.3,3.3,0,0,0,.82,1.09,4,4,0,0,0,1.28.73,5,5,0,0,0,1.71.27,5.29,5.29,0,0,0,1.74-.27,3.85,3.85,0,0,0,1.29-.73,3.34,3.34,0,0,0,.81-1.1,3.25,3.25,0,0,0,.28-1.34,3.18,3.18,0,0,0-1.1-2.43,4,4,0,0,0-1.3-.74A5.09,5.09,0,0,0,470.14,62Z"
        />
        <path
          fill="#001F49"
          className="cls-1"
          d="M490.15,70.32,484.44,64v6.32h-1.78V60.56h1l5.71,6.34V60.56h1.78v9.76Z"
        />
      </svg>

      <svg className="header_small"  viewBox="0 0 353 82.01" aria-label>
          <path
            fill="#001F49"
            className="cls-1"
            d="M91.93,24.24a25.66,25.66,0,0,1-9.86,2c-7.52,0-15.42-4.66-15.42-12.94S74,0,81.7,0A19.28,19.28,0,0,1,93.25,3.47L91.14,8C89.3,4.67,85.91,3.24,82.3,3.24c-5.53,0-8.88,4.44-8.88,10a9.5,9.5,0,0,0,9.08,9.9H83a15.26,15.26,0,0,0,10-4.52Z"
          />
          <path
            fill="#001F49"
            className="cls-1"
            d="M121.54,25.78V14.61h-11V25.78h-6.06V.46h6v11h11V.46h6.09V25.78Z"
          />
          <path
            fill="#001F49"
            className="cls-1"
            d="M158.55,25.78c-1.13-2.63-2.33-5.27-3.5-7.82h-9l-3.8,7.82h-4.14L150.69.42h2.37c1.39,3.62,3.27,7,5,10.46,2.45,5,4.89,9.93,7.41,14.9ZM150.5,8.47l-2.82,6h5.68Z"
          />
          <path
            fill="#001F49"
            className="cls-1"
            d="M191.62,25.78c-2.3-3.27-6.47-10.35-6.85-11a11.32,11.32,0,0,1-1.84-.15L184,13.06a4.73,4.73,0,0,0,4.86-4.6c0-.14,0-.27,0-.4,0-3.5-3.2-4.44-5.6-4.44h-.83V25.78h-6.06V.46h8.28c4.36,0,10,1.84,10,7.15,0,3.42-2.07,5.42-4.78,6.43,3.09,4.14,6.1,8,8.88,11.74Z"
          />
          <path
            fill="#001F49"
            className="cls-1"
            d="M209.64,25.78V.46h6.13v22.2h3.72a64,64,0,0,0,9.18-.48l-1.46,3.57Z"
          />
          <path
            fill="#001F49"
            className="cls-1"
            d="M239.58,25.78V.46h15.5L256.74,4A57.23,57.23,0,0,0,249,3.55h-3.38v7.86h1.12a74.36,74.36,0,0,0,7.61-.3l-.12,3.61c-2.26-.11-4.55-.19-6.81-.19H245.6v8.13h4.32a62.11,62.11,0,0,0,8.62-.48L257,25.78Z"
          />
          <path
            fill="#001F49"
            className="cls-1"
            d="M269.75,18.48c2.26,2.75,5.3,4.48,7.64,4.48a3,3,0,0,0,3.23-2.75,4,4,0,0,0,0-.49c0-4.44-11.81-3.76-11.81-12.22,0-4.71,3.91-7.41,8.12-7.41A13.68,13.68,0,0,1,285,2.53l-2.3,4.4a6.87,6.87,0,0,0-5.76-3.65,2.55,2.55,0,0,0-2.71,2.38v.18c0,5.08,12.08,3.95,12.08,12.53,0,5-4.36,7.86-9.55,7.86a13.91,13.91,0,0,1-9-3.16Z"
          />
          <path
            fill="#001F49"
            className="cls-1"
            d="M12.79,81.6V52H0L1.25,47.9H33.79V52H20.91V81.6Z"
          />
          <path
            fill="#001F49"
            className="cls-1"
            d="M59.4,81.6c.05-3.11.05-6.22.05-9.32V67.41c-4.71-6.51-9.37-13.08-14.14-19.55h9.08c3.46,4.91,7,9.83,10.53,14.69L76.7,47.86h5.21L67.52,65.61v16Z"
          />
          <path
            fill="#001F49"
            className="cls-1"
            d="M115.35,81.6c-3.06-4.36-8.63-13.78-9.13-14.59a13.43,13.43,0,0,1-2.45-.2l1.45-2.15a6.33,6.33,0,0,0,6.47-6.17c0-.16,0-.32,0-.48,0-4.66-4.26-5.92-7.47-5.92h-1.1V81.6H95V47.86h11c5.82,0,13.29,2.46,13.29,9.53,0,4.56-2.76,7.22-6.37,8.57C117,71.47,121,76.59,124.75,81.6Z"
          />
          <path
            fill="#001F49"
            className="cls-1"
            d="M172,82c-1.8-4.86-4.11-9.62-6.07-14.44-1.25-3.15-2.45-6.26-3.66-9.42L152,82h-3c-2-5.61-4.71-11-7.07-16.64-2.45-5.82-4.66-11.73-7.07-17.6h8.52c3.21,7.72,6.27,15.54,9.33,23.31l9.77-24h3.66l9.58,24.26,10.06-23.53h4.71L175.65,82Z"
          />
          <path
            fill="#001F49"
            className="cls-1"
            d="M226.53,81.6l-.05-14.89H211.94V81.6h-8.07V47.86h8V62.45h14.54V47.86h8.12V81.6Z"
          />
          <path fill="#001F49" className="cls-1" d="M251.64,81.6V47.86h8.17V81.6Z" />
          <path
            fill="#001F49"
            className="cls-1"
            d="M287.13,81.6V52H274.35l1.25-4.11h32.54L308.09,52H295.25V81.6Z"
          />
          <path
            fill="#001F49"
            className="cls-1"
            d="M332,81.6V52H319.16l1.26-4.11H353L352.9,52H340.07V81.6Z"
          />
      </svg>
    </div>
    <div className="nav-up-content">
    <div className="search-box">
      <input type="text" placeholder="What are you looking for ?" />
      <svg
        className="search"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
        />
      </svg>
      </div> 
      <div className="cart-box">
        <svg
          className="cart"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
          />
        </svg>
      </div>
    </div>
  </nav>


  <nav className="nav-down">
    <div className="nav-down-content">
      <ul>
        <li>SHIRTS</li>
        <li className="line">|</li>
        <li>POLOS</li>
        <li className="line">|</li>
        <li>SUITS</li>
        <li className="line">|</li>
        <li>TROUSERS</li>
        <li className="line">|</li>
        <li>KNITWEAR</li>
        <li className="line">|</li>
        <li>JACKETS & COATS</li>
        <li  className="line">|</li>
        <li>SHOES</li>
        <li  className="line">|</li>
        <li>ACCESSORIES</li>
        <li  className="line">|</li>
        <li className="red">SALE</li>
      </ul>
    </div>
      <div className="search-bar">
        <svg
          className="search-down"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
          />
        </svg>
        <input className="input" type="text" placeholder="What are you looking for ?" />
    </div>
  </nav>
  <Accordions disp={showMenu}></Accordions>
  </>
  )
}

export default Navbar