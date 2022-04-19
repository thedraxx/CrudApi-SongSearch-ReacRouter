import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Productos = () => {
  //   let location = useLocation();
  //   console.log(location);

  let { search } = useLocation();
  let query = new URLSearchParams(search);

  const LIMIT = 20;
  let start = parseInt(query.get("inicio")) || 1;
  let end = parseInt(query.get("fin")) || LIMIT;

  let navigate = useNavigate();
//   console.log(navigate);
  const handlePrev = (e) => {
    navigate(`?inicio=${start - LIMIT}&fin=${end - LIMIT}`);
  };
  const handleNext = (e) => {
    navigate(`?inicio=${start + LIMIT}&fin=${end + LIMIT}`);
  };

  return (
    <div>
      <h3>Productos</h3>
      <p>
        Mostrando Productos de <b>{start}</b> al <b>{end}</b>
      </p>
      {start > LIMIT && <button onClick={handlePrev}>atras</button>}
      <button onClick={handleNext}>Adelante</button>
    </div>
  );
};
