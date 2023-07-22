/* eslint-disable react-refresh/only-export-components */
export const URL = {
  crear: {
    sport: "http://localhost:12001/commands/bookService/crearDeporte",
    league: "http://localhost:12001/commands/bookService/crearLiga",
    match: "http://localhost:12001/commands/bookService/crearPartido",
  },
  obtener: {
    eventStore: "http://localhost:12001/commands/bookService/eventStore",
    allMatches: "http://localhost:12001/queries/bookService/partidos/todos",
    noStart: "http://localhost:12001/queries/bookService/no-comenzados/v1",
  },
};

export let data = null;
