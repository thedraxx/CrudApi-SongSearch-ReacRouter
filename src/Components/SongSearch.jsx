import React, { useEffect, useState } from "react";
import { SongDetail } from "./SongDetail";
import { SongForm } from "./SongForm";
import Loader  from "./Loader";
import  {helpHttp}  from "../helpers/helpHttp";

export const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) {
      return;
    }
    const fetchData = async () => {
      const { artist, song } = search;
      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      console.log(songUrl, artistUrl);

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      // const xD = await Promise.resolve(
      //   helpHttp().get(songUrl),
      // );
      // console.log("Soy xD", xD)

      console.log(artistRes, songRes);

      setLyric(songRes);
      setBio(artistRes);
      setLoading(false);
    };

    fetchData();
  }, [search]);

  const HandleSearch = (data) => {
    console.log(data);
    setSearch(data);
  };

  return (
    <>
      <article className="grid-1-3">
        <SongForm HandleSearch={HandleSearch} />
        {loading && <Loader />}
        {search && !loading && (
          <SongDetail search={search} lyric={lyric} bio={bio} />
        )}
      </article>
    </>
  );
};
