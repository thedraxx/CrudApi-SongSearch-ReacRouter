import React, { useEffect, useState } from "react";
import { SongDetail } from "./SongDetail";
import { SongForm } from "./SongForm";
import Loader from "./Loader";
import { helpHttp } from "../helpers/helpHttp";
import { HashRouter, Link, Routes, Route } from "react-router-dom";
import { Error404 } from "../pages/Error404";

let mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || [];

export const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mySongs, setMySongs] = useState(mySongsInit);

  useEffect(() => {
    if (search === null) {
      return;
    }
    const fetchData = async () => {
      const { artist, song } = search;
      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      // console.log(songUrl, artistUrl);

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      // const xD = await Promise.resolve(
      //   helpHttp().get(songUrl),
      // );
      // console.log("Soy xD", xD)

      // console.log(artistRes, songRes);

      setLyric(songRes);
      setBio(artistRes);
      setLoading(false);
    };

    fetchData();
    localStorage.setItem("mySongs",JSON.stringify(mySongs))
  }, [search,mySongs]);

  const HandleSearch = (data) => {
    // console.log(data);
    setSearch(data);
  };

  const handleSaveSong = () => {
    alert('Salvando Cancion en Favoritas')
  }
  const handleDeleteSong = (id) => {}

  return (
    <>
      <HashRouter>
        <header>
          <h2>Song Search</h2>
          <Link to="/canciones">Home</Link>
        </header>
        {loading && <Loader />}
        <article className="grid-1-3">
          <Routes>
            <Route
              path="/canciones"
              element={
                <>
                  <SongForm HandleSearch={HandleSearch} handleSaveSong={handleSaveSong} />
                  <h2>Tabla de canciones</h2>
                  {search && !loading && (
                    <SongDetail search={search} lyric={lyric} bio={bio} />
                  )}
                </>
              }
            ></Route>
            <Route
              path="/canciones/:id"
              element={
                <>
                  <h2>Pagina de canciones</h2>
                </>
              }
            ></Route>
            <Route path ="*" element={<Error404 />} > </Route>
          </Routes>
        </article>
      </HashRouter>
    </>
  );
};
