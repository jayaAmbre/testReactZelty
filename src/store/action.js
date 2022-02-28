export const GET_FILM_LIST_FULFILLED = 'GET_FILM_LIST_FULFILLED';

export const fetchFilmListSuccess = (films) => ({
    type: GET_FILM_LIST_FULFILLED,
    films
})


