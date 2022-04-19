import React from "react";
import {SectionArtist } from "./Styled";

export const SongArtist = ({ artist }) => {
  return (
    <SectionArtist>
      <h2>{artist.strArtist}</h2>
      <img src={artist.strArtistThumb} alt={artist.strArtist} />
      <p>
        {artist.intBornYear} - {artist.intDiedYear || "Present"}
      </p>
      <p>{artist.strCountry}</p>
      <p>{artist.strGenre} - {artist.strStyle}</p>
      <p>{artist.strBiographyEN}</p>
      <a href={`http://${artist.strWebsite}`} target="_blank" rel="noreferrer">Web</a>

    </SectionArtist>
  );
};
