import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"

export const SongTableRow = ({id,el,handleDeleteSong}) => {
    let navigate = useNavigate();
    let AvatarStyles = {
      width: "auto",
      height:"40px"
    }
    return (
    <tr>
      <td>
        <img style={AvatarStyles} src={el[0].bio.artists[0].strArtistThumb} alt></img>
      </td>
      <td>{`${el[0].bio.artists[0].strArtist}`}</td>
      <td>{`${el[0].search.song}`}</td>
      <td>
        <button onClick ={()=> navigate(`/canciones/${id}`) }>ver</button>
        <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
      </td>
    </tr>
  );
};
