import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Text = () => {
  const [text] = useTypewriter({
    words: [
      "Leading Health Sector Agenda",
      "Equiped to improve Livelihoods",
      "Championing Interventions that improve Lives",
    ],
    loop: false,
  });
  return (
    <div>
      <h1 className="text-white pt-2 text-3xl md:text-6xl font-bold">
        <span>{text}</span> <Cursor cursorColor="#60A5FA" />
      </h1>
    </div>
  );
};

export default Text;
