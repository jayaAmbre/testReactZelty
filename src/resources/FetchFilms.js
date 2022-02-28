import { fetchFilmListSuccess } from "../store/action";

const API_KEY="a3d575baf001f8ffe4694504c7c3af8d";

export default () =>{
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=fr-FR`)
            .then(response => response.json())
            .then(films => films.results.map(film => ({
                id: film.id,
                title: film.title,
                image: `https://image.tmdb.org/t/p/w500/${film.poster_path}`,
                releaseDate: film.release_date,
                overview: film.overview,
            })))
            .then(films => dispatch(fetchFilmListSuccess(films)))
    }
}
