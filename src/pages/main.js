import './main.css';
import { useState } from 'react';
import TextBox from "../components/textbox.js";
import PostBox from "../components/postbox.js";
import PopUp from '../components/popUp.js';
import MyHeader from "../components/header.js";

function HomePage() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [fakeToken, setFakeToken] = useState(false);

  const manipularLoginButton = () => {
    setShowPopUp(true);
    setFakeToken(true);
  };

  return (
    <div className="grid-container">
      <header className="header">
        <MyHeader
          logedin={fakeToken}
          logout={() => setFakeToken(false)}
          login={manipularLoginButton}
        />
      </header>

      <aside className="sidebar">Menu Lateral</aside>

      <main className="content">
        <PopUp
          showPopUp={showPopUp}
          closePopUp={() => setShowPopUp(false)}
        />

        {TextBox()}
        {PostBox("JUJUBA", "")}
        {PostBox("Frutas", "prefiro chocolate")}
        <div className="post">Post 3</div>
        <div className="post">Post 4</div>
      </main>
    </div>
  );
}

export default HomePage;
