import React from 'react';
import './Sidebar.css';
import logoSpotify from '../assets/icons/logo-spotify.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar_navigation">
        <div className="logo">
          <a href="">
            <img src={logoSpotify} alt="Logo" />
          </a>
        </div>
        <ul>
          <li key="home">
            <a href="">
              <span className="fa fa-home"></span>
              <span>Início</span>
            </a>
          </li>
          <li key="search">
            <a href="">
              <span className="fa fa-search"></span>
              <span>Buscar</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="library">
        <div className="library_content">
          <button className="library_button">
            <span className="fa fas fa-book"></span>
            <span>Sua Biblioteca</span>
          </button>
          <span className="fa fa-plus"></span>
        </div>
        <section className="section_playlist">
          <div className="section_playlist_content">
            <span className="text title">Crie sua primeira playlist</span>
            <span className="text subtitle">É fácil, vamos te ajudar.</span>
            <button className="section_playlist_button">
              <span>Criar playlist</span>
            </button>
          </div>
        </section>
        <div className="cookies">
          <a href="">Cookies</a>
        </div>
        <div className="languages">
          <button className="languages_button">
            <span className="fa fa-globe"></span>
            <span>Português do Brasil</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
