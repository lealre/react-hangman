import React, { useState } from "react";

export default function Saudacao(props) {
  const [type, setTipo] = useState(props.type);
  const [name, setNome] = useState(props.name);

  const handleTipoChange = (e) => {
    setTipo(e.target.value);
  };

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  return (
    <div>
      <h1>
        {type} {name}!
      </h1>
      <hr />
      <input
        type="text"
        placeholder="Tipo..."
        value={type}
        onChange={handleTipoChange}
      />
      <input
        type="text"
        placeholder="Nome..."
        value={name}
        onChange={handleNomeChange}
      />
    </div>
  );
}
