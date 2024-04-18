import React from 'react';
import Movie from './Movie';

// Setting the Movie List form.
// Each movie would have a same setting

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);

        this.globalState = this.props.globalState;
    }

render() {
let Movies;
if(this.globalState.movies) {
    Movies = this.globalState.movies.map((movie, index) => <Movie key={index}
    {...movie} globalState={this.globalState} />);
}

return (
    <div>
        {Movies}
    </div>
);
}
}