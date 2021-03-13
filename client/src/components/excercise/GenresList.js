import React from 'react';
import { connect } from 'react-redux';
import { selectGenres } from "../../actions"
const GenresList = (props) => {
    return (
        <>
            <h1>Gengres  List {props.genres.length}</h1>
            {
                props.genres.map((item) => {
                    return (<div className="item" key={item.title} >
                        <div className="content">
                            <span>{item.title}</span>
                            <span onClick={() => { props.selectGenres(item) }}>Select</span>
                        </div>

                    </div>)
                })
            }
        </>
    );

}
const mapStateToProps = state => {
    console.log("state", state);
    return { genres: state.genres };
};

export default connect(mapStateToProps, { selectGenres })(GenresList);