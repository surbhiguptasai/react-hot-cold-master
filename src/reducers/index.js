import * as actions from '../actions';

const initialState = {
    showInfoModal:false,
    correctAnswer:Math.round(Math.random() * 100),
    feedback:'Make your guess',
    guesses:[]
};

export const hotcoldReducer = (state=initialState, action) => {
    if (action.type === actions.ON_CLOSE) {
        return Object.assign({}, state, {
            showInfoModal:!state.showInfoModal
        });
    }
    else if(action.type === actions.ON_GUESS){
        const guess = parseInt(action.guess, 10);
        if (isNaN(guess)) {
            state = Object.assign({}, state, {
                feedback: 'Please enter a valid number'
            });

            return state;
        }

        const difference = Math.abs(guess - state.correctAnswer);

        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }

        state = Object.assign({}, state, {
            feedback,
            guesses: state.guesses.concat(action.guess)
        });

        return state;
    }
    
   
    return state;
};

