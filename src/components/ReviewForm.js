import React from 'react';
import StarRate from './Stars';

// Review Form
// After introducing story, the bottom of each movie
// Will asking about user the riview

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewInfo: '',
            starRating: null,
        }

        this.submitForm = this.submitForm.bind(this);
        this.handleReviewChange = this.handleReviewChange.bind(this);
        this.handleStarChange = this.handleStarChange.bind(this);
    }


    resetForm() {
        this.setState({
            reviewInfo: '',
            starRating: null,
        });
    }

    submitForm() {
        this.props.onSubmit(this.state);
        this.resetForm();
    }

    handleInputChange(event) {
            this.setState({
                reviewInfo: event.target.value
                
            });
        }

    handleReviewChange(event) {
        this.setState({
             reviewInfo: event.target.value
                
        });
    }

    handleStarChange(event) {
        this.setState({
            starRating: event.target.value
            
    });
}

    render() {
        return (
            <div>
                <form>
                <h2>What do you think?</h2>
                    <span className="text-muted">
                        <StarRate value={this.state.starRating} onChange={this.handleStarChange}/>
                    </span>
                    <label htmlFor="reviewInput"><b>Your Review:</b></label><br />
                    <input name="reviewInfo" type="text" id="reviewInput" value={this.state.reviewInfo} onChange={this.handleReviewChange} /><br />
                    <button type='submit' 
                    className="col-5 mt-2 btn btn-primary" 
                    onClick={this.onSubmit}>Submit</button>
                </form>
            </div>
        );
    }
} 