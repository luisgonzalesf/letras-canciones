import axios from "axios";
import { createContext, useState } from "react";

const LetrasContext = createContext();

const LetrasProvider = ({ children }) => {
  const [alerta, setAlerta] = useState("");
  const [cargando, setCargando] = useState(false);
  const [letra, setLetra] = useState("");
  const busquedaLetra = async (busqueda) => {
    setCargando(true);
    try {
      const { artista, cancion } = busqueda;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const { data } = await axios(url);
      setLetra(data.lyrics);
      setAlerta("");
    } catch (error) {
      setAlerta("Canción no encontrada");
      console.log(error);
    }
    setCargando(false);
  };

  return (
    <LetrasContext.Provider
      value={{ alerta, setAlerta, busquedaLetra, letra, cargando, setCargando }}
    >
      {children}
    </LetrasContext.Provider>
  );
};

export { LetrasProvider };

export default LetrasContext;
