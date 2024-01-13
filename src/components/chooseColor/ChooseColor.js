import React from "react";
import "./ChooseColor.css";
const ChooseColor = () => {
  const changeTheme = (theme) => {
    const styleElement = document.createElement("style");
    let styles = "";
    if (theme === "blue") {
      styles = `
          :root {
            --primary-color: #0453ad;
            --secondary-color: #fff;
            --header-top: #0453adeb;
            --overlay-color: rgba(0, 0, 0, 0.5);
            --black-background: #0453ad;
            --gray-background: #0453ad9e;
            --section-heading: #0453ad;
            --footer-icon-color: #ef0007;
            --border-bottom-active: #fff;
            --hover-color-onbutton: #0f75e9;
            --gray-text: #fff;
            --carousel-overlay: #0453ad8c
          }
            `;
    }
    if (theme === "red") {
      styles = `
        :root {
          --primary-color: #ef0007;
          --secondary-color: #fff;
          --header-top: #000000d1;
          --overlay-color: rgba(0, 0, 0, 0.5);
          --black-background: #000;
          --gray-background: #555;
          --section-heading: #333;
          --footer-icon-color: #ef0007;
          --border-bottom-active: #ef0007;
          --hover-color-onbutton: #cc0000;
          --gray-text: gray;
          --carousel-overlay: #353A41CD


        }
            `;
    }
    if (theme === "green") {
      styles = `
        :root {
          --primary-color: #009db7;
          --secondary-color: #fff;
          --header-top: #009db7ed;
          --overlay-color: rgba(0, 0, 0, 0.5);
          --black-background: #009db7;
          --gray-background: #78b2bb;
          --section-heading: #009db7;
          --footer-icon-color: #ef0007;
          --border-bottom-active: #009db7;
          --hover-color-onbutton: #08b8d5;
          --gray-text: #fff;
          --carousel-overlay: #004c58ad


        }
            `;
    }
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);
    // document.head.removeChild(styleElement);
  };
  return (
    <>
      <div className="circle-container">
        <div
          onClick={() => changeTheme("green")}
          className="circle green"
        ></div>
        <div onClick={() => changeTheme("blue")} className="circle blue"></div>
        <div onClick={() => changeTheme("red")} className="circle red"></div>
      </div>
    </>
  );
};

export default ChooseColor;
