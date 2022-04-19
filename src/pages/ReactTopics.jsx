import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";

const Topic = () => {
    let {topic} = useParams();
    return (
        <div>
            <h4>{topic}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ullam dolorem veniam tenetur atque rerum nam id animi dignissimos ad ipsa provident est ratione reprehenderit, dolores eveniet voluptatem? Maiores, beatae!
            Commodi veritatis aut voluptatibus quibusdam consectetur dicta vero quam! Officiis maxime perspiciatis fugit rerum dolores blanditiis sequi architecto odit? Assumenda quasi illo eaque pariatur officia aliquid sunt consequuntur soluta quod?
            Fugit saepe soluta doloribus expedita minima dolorum repudiandae eligendi quo? Modi maxime consequuntur ut eos harum assumenda, ullam aliquid molestiae error enim ratione perspiciatis fuga corrupti cum, perferendis itaque. Illo!</p>
        </div>
    );
};
export const ReactTopics = () => {
  return (
    <div>
      <h3>Temas de React</h3>
      <ul>
        <li>
          <Link to="js">JSX</Link>
        </li>
        <li>
          <Link to="props">Props</Link>
        </li>
        <li>
          <Link to="estado">Estado</Link>
        </li>
        <li>
          <Link to="componente">Componente</Link>
        </li>
      </ul>
      <Routes>
        <Route path=":topic" element={<Topic />} />
      </Routes>
    </div>
  );
};
