import { Head } from "next/document";
import React from "react";

export const Socials = ({ socials }) => {
  if (!socials) {
    return null;
  }
  return (
    <>
      <ul>
        {socials &&
          socials.map(({ id, icon, path }) => (
            <li key={id}>
              <a href={path} target="_blank" rel="noopener noreferrer">
                <p>{icon}</p>
              </a>
            </li>
          ))}
      </ul>
    </>
  );
};
