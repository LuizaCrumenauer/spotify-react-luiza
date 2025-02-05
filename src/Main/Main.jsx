import React, { useEffect } from "react";
import './Main.css';
import { FaPlay } from "react-icons/fa6";

// Importando as imagens das playlists
import playlist1 from "../assets/playlist/1.jpeg";
import playlist2 from "../assets/playlist/2.png";
import playlist3 from "../assets/playlist/3.jpeg";
import playlist4 from "../assets/playlist/4.jpeg";
import playlist5 from "../assets/playlist/5.jpeg";
import playlist6 from "../assets/playlist/6.jpeg";
import playlist7 from "../assets/playlist/7.jpeg";
import playlist8 from "../assets/playlist/8.jpeg";
import playlist9 from "../assets/playlist/9.jpeg";
import playlist10 from "../assets/playlist/10.jpeg";
import playlist11 from "../assets/playlist/11.jpeg";
import playlist12 from "../assets/playlist/12.jpeg";
import playlist13 from "../assets/playlist/13.jpeg";
import playlist14 from "../assets/playlist/14.jpeg";
import playlist15 from "../assets/playlist/15.jpeg";

const Main = () => {

  useEffect(() => {
    // Seleção dos elementos após o componente estar montado
    const searchInput = document.getElementById('search-input');
    const resultArtist = document.getElementById("result-artist");  // Container para o artista pesquisado
    const resultPlaylist = document.getElementById('result-playlist'); // Container dos cards da playlist
    const playlistContainer = document.getElementById('playlist-container');

    // Verifica se os elementos existem antes de operar sobre eles
    if (playlistContainer) {
      // Exibe a playlist inicialmente
      playlistContainer.classList.remove("hidden");
    }

    // Função para fazer a requisição na API
    function requestApi(searchTerm) {
      const url = `http://localhost:3001/artists?name_like=${searchTerm}`;

      fetch(url)
        .then(response => response.json())
        .then((result) => {
          // Filtra os resultados para pegar apenas artistas que começam com o termo pesquisado
          const filteredResult = result.filter(artist =>
            artist.name.toLowerCase().startsWith(searchTerm.toLowerCase())
          );
          displayResults(filteredResult);
        });
    }

    // Função para exibir os resultados da busca
    function displayResults(result) {
      if (resultPlaylist) resultPlaylist.classList.add("hidden");

      // Seleciona os elementos de exibição dos dados do artista
      const artistName = document.getElementById('artist-name');
      const artistImage = document.getElementById('artist-img');

      // Seleciona o link do botão de play (elemento <a> dentro do container com a classe "play")
      const playLink = document.querySelector('.play a');

      if (result.length > 0) {
        // Se houver resultados, exibe os dados do primeiro artista encontrado
        if (artistName) artistName.innerText = result[0].name;
        if (artistImage) artistImage.src = result[0].urlImg;
        if (playLink) {
          playLink.href = result[0].youtubeLink;
          playLink.target = "_blank";
        }
      } else {
        // Caso nenhum artista seja encontrado
        if (artistName) artistName.innerText = "Nenhum artista encontrado";
        if (artistImage) artistImage.src = "";
        if (playLink) playLink.href = "#";
      }

      // Oculta o container da playlist e exibe o container do artista pesquisado
      if (playlistContainer) playlistContainer.classList.add("hidden");
      if (resultArtist) resultArtist.classList.remove("hidden");
    }

    // Evento de input: quando o usuário digita no campo de busca
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();

        if (searchTerm === '') {
          if (resultPlaylist) resultPlaylist.classList.remove('hidden');
          if (resultArtist) resultArtist.classList.add('hidden');
          if (playlistContainer) playlistContainer.classList.remove("hidden");
          return;
        }
        
        // Caso haja algum termo digitado, faz a requisição na API
        requestApi(searchTerm);
      });
    }

    // Opcional: limpar o event listener ao desmontar o componente
    return () => {
      if (searchInput) {
        searchInput.removeEventListener('input', () => {});
      }
    };

  }, []); // Executa apenas uma vez após a montagem do componente

  return (
    <main>
      <div id="playlist-container" className="hidden">
        <div id="result-playlist">
          <div className="playlist">
            <h1 id="greeting">Boas vindas</h1>
            <h2 className="greeting-subtitle">
              Navegue por todas as seções
            </h2>
          </div>
        </div>

        <div className="offer__scroll-container">
          <div className="offer__list">
            <section className="offer__list-item">
              <a href="#" className="cards">
                <div className="cards card1">
                  <img src={playlist1} alt="Boas festas" />
                  <span>Boas festas</span>
                </div>
              </a>

              <a href="#" className="cards">
                <div className="cards card2">
                  <img src={playlist2} alt="Feitos para você" />
                  <span>Feitos para você</span>
                </div>
              </a>

              <a href="#" className="cards">
                <div className="cards card3">
                  <img src={playlist3} alt="Lançamentos" />
                  <span>Lançamentos</span>
                </div>
              </a>

              <a href="#" className="cards">
                <div className="cards card4">
                  <img src={playlist4} alt="Creators" />
                  <span>Creators</span>
                </div>
              </a>

              <a href="#" className="cards">
                <div className="cards card5">
                  <img src={playlist5} alt="Para treinar" />
                  <span>Para treinar</span>
                </div>
              </a>

              <a href="#" className="cards">
                <div className="cards card6">
                  <img src={playlist6} alt="Podcasts" />
                  <span>Podcasts</span>
                </div>
              </a>

              <a href="#" className="cards">
                <div className="cards card7">
                  <img src={playlist7} alt="Sertanejo" />
                  <span>Sertanejo</span>
                </div>
              </a>

              <a href="#" className="cards">
                <div className="cards card8">
                  <img src={playlist8} alt="Samba e pagode" />
                  <span>Samba e pagode</span>
                </div>
              </a>

              <a href="#" className="cards">
                <div className="cards card9">
                  <img src={playlist9} alt="Funk" />
                  <span>Funk</span>
                </div>
              </a>

              <a href="#" className="cards">
                <div className="cards card10">
                  <img src={playlist10} alt="MPB" />
                  <span>MPB</span>
                </div>
              </a>

              <a href="#" className="cards">
                <div className="cards card11">
                  <img src={playlist11} alt="Rock" />
                  <span>Rock</span>
                </div>
              </a>

              <a href="#" className="cards">
                <div className="cards card12">
                  <img src={playlist12} alt="Hip Hop" />
                  <span>Hip Hop</span>
                </div>
              </a>

              <a href="#" className="cards">
                <div className="cards card13">
                  <img src={playlist13} alt="Indie" />
                  <span>Indie</span>
                </div>
              </a>

              <a href="#" className="cards">
                <div className="cards card14">
                  <img src={playlist14} alt="Relax" />
                  <span>Relax</span>
                </div>
              </a>

              <a href="#" className="cards">
                <div className="cards card15">
                  <img src={playlist15} alt="Música Latina" />
                  <span>Música Latina</span>
                </div>
              </a>
            </section>
          </div>
        </div>
      </div>

      <div id="result-artist" className="hidden">
        <div className="grid-container">
          <div className="artist-card">
            <div className="card-img">
              <img id="artist-img" className="artist-img" alt="Artista" />
              <div className="play">
                <a href="#" className="fa-play"><FaPlay /></a>
              </div>
            </div>
            <div className="card-text">
              <a title="Artista" href="#"></a>
              <span className="artist-name" id="artist-name"></span>
              <span className="artist-categorie">Artista</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
