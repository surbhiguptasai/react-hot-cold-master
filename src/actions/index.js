export const ON_CLOSE = 'ON_CLOSE';
export const onClose = () => ({
    type: ON_CLOSE
    
});
export const ON_GUESS = 'ON_GUESS';
export const onGuess = (guess) => ({
    type: ON_GUESS,
    guess:guess
});