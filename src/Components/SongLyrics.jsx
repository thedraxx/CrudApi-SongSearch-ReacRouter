import React from "react";
import { Section } from "./Styled";

export const SongLyrics = ({ lyrics, title }) => {
  return (
    <Section>
      <h3>{title}</h3>
      <blockquote style={{whiteSpace: "pre-wrap"}}>{lyrics}</blockquote>
    </Section>
  );
};
