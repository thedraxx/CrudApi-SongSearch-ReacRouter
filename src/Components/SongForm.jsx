import React, { useState } from "react";
import { Button, DIV } from "./Styled";

let initialForm = {
  artist: "",
  song: "",
};

export const SongForm = ({ HandleSearch, handleSaveSong }) => {
  const [form, setForm] = useState(initialForm);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.artist || !form.song) {
      alert("datos incompletos");
      setIsDisabled(true);
      return;
    } else {
      HandleSearch(form);
      setForm(initialForm);
      setIsDisabled(false);
    }
  };

  return (
    <DIV>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Name of the artist"
          onChange={handleChange}
          value={form.artist}
        />

        <input
          type="text"
          name="song"
          placeholder="Name of the song"
          onChange={handleChange}
          value={form.song}
        />

        <Button type="submit" value="Enviar">
          Send
        </Button>
        <input
          type="button"
          onClick={handleSaveSong}
          value="Agregar Cancion"
          disabled={isDisabled && "disabled"}
        />
      </form>
    </DIV>
  );
};
