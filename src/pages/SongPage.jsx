import React from "react";
import { useParams } from "react-router-dom";
import { SongDetail } from "../Components/SongDetail";

export const SongPage = ({ mySongs }) => {
  let { id } = useParams();
  let currentSong = mySongs[id];
  let [{ search, lyric, bio }] = currentSong;

  return <SongDetail search={search} lyric={lyric} bio={bio} />;
};
