import React, { useState } from "react";
import { Button, DIV } from "./Styled";

let initialForm = {
  artist: "",
  song: "",
};

export const SongForm = ({ HandleSearch }) => {
  const [form, setForm] = useState(initialForm);

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
      return;
    } else {
      HandleSearch(form);
      setForm(initialForm);
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

        <Button type="submit" value="Enviar">Send</Button>
      </form>
    </DIV>
  );
};
