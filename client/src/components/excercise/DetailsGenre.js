import React from 'react';
import { connect } from 'react-redux';
const DetailsGenre = props => {
    return (
        <div>
            <h1>Details Genre</h1>
            {!props.genre ? <p>Selet a Genre</p> : <p>{props.genre.title}</p>}

        </div>
    );
}
const mapStateToProps = state => {
    console.log("details state", state);
    return { genre: state.selectedGenres };
};
export default connect(mapStateToProps)(DetailsGenre);