import { useState } from "react";
import useLetras from "../hooks/useLetras";

const Formulario = () => {
  const [busqueda, setBusqueda] = useState({
    artista: "",
    cancion: "",
  });

  const { setAlerta, busquedaLetra } = useLetras();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(busqueda).includes("")) {
      setAlerta("Ingresa nombre de artista y canción");
      return;
    }
    busquedaLetra(busqueda);
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>Busca por artista y canción</legend>
      <div className="form-grid">
        <div>
          <label htmlFor="artista">Artista</label>
          <input
            type="text"
            name="artista"
            placeholder="Busca por nombre de artista"
            value={busqueda.artista}
            onChange={(e) =>
              setBusqueda({ ...busqueda, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="cancion">Canción</label>
          <input
            type="text"
            name="cancion"
            placeholder="Busca por nombre de canción"
            value={busqueda.cancion}
            onChange={(e) =>
              setBusqueda({ ...busqueda, [e.target.name]: e.target.value })
            }
          />
        </div>
        <input type="submit" name="" value="Buscar" />
      </div>
    </form>
  );
};

export default Formulario;
