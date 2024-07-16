//import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Profile from "./profile";
import AvatarProfile from "./AvatarProfile";

//import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Amazing scientists</h1>
        <AvatarProfile
        size={100}
        person={{name: "xxyz", imageId:"1bX5QH6"}}
        ></AvatarProfile>
        <AvatarProfile
        size={300}
        person={{name: "abcde", imageId:"1bX5QH6"}}
        ></AvatarProfile>
        <AvatarProfile
        size={150}
        person={{name: "nmpqrs", imageId:"1bX5QH6"}}
        ></AvatarProfile>
      {/* <Profile/> 
      <Profile/>
      <Profile/>
      <Profile/>
      <Profile/>  */}
      </header>
    </div>
  );
}

export default App;
