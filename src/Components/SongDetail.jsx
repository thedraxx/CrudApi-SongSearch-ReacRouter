import React from "react";
import { SongArtist } from "./SongArtist";
import { SongLyrics } from "./SongLyrics";
import  Message  from "./Message";

export const SongDetail = ({ search, lyric, bio }) => {
  if (!lyric || !bio) {
    return null;
  }

  return (
    <>
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error: no existe la cancion: ${search.song} `}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyrics title={search.song} lyrics={lyric.lyrics} />
      )}

      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error: Interprete "${search.artist}" no encontrado`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};
