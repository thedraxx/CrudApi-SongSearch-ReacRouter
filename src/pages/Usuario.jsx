import React from "react";
import { useParams } from "react-router-dom";

export const Usuario = () => {
  let params = useParams();
  // console.log(params)

  let { username } = useParams();
 
  return (
    <div>
      <h3>Perfil del Usuario</h3>
      <p>
        Nombre del Usuario: <b>{username}</b>
      </p>
    </div>
  );
};
