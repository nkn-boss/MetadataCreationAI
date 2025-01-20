import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import submitFeedback from '@salesforce/apex/FeedbackController.submitFeedback';

export default class FeedbackForm extends LightningElement {
    @track rating;
    @track comments;

    handleRatingChange(event) {
        this.rating = event.target.value;
    }

    handleCommentsChange(event) {
        this.comments = event.target.value;
    }

    handleSubmit() {
        submitFeedback({ rating: this.rating, comments: this.comments })
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Feedback submitted successfully',
                        variant: 'success'
                    })
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            });
    }
}