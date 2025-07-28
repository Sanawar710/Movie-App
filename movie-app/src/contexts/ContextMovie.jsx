import { createContext, useContext } from "react";

const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);
