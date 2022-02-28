/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import { connect } from 'react-redux';
import FilmListComponent from '../components/FilmListComponent';
import fetchFilms from '../resources/FetchFilms';

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */

const mapStateToProps = ({ filmList }) => {
        return {
                filmList
        };
};

const mapDispatchToProps = {
        getFilmList: fetchFilms,
};

const FilmList = connect(mapStateToProps, mapDispatchToProps)(FilmListComponent);

/* ************************************* */
/* ********  PRIVATE FUNCTIONS  ******** */
/* ************************************* */

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default FilmList;
