
class GameDriver{
    constructor(){
        this.selectedGifIds = [];
        this.score = 0; 
        this.highScore = this.getHighScore(); 
    }

    alreadySelected(gifId){
        //check if the gifId already exists in the selectedGifId's
        for(let i = 0; i < this.selectedGifIds.length; i++){
            if(this.selectedGifIds[i] == gifId){
                return true; 
            }
        }

        return false; 
    }

    addToSelected(gifId){
        this.selectedGifIds.push(gifId);
        this.score += 1; 
    }

    setHighScore(newHighScore){
        if(newHighScore > this.highScore)
            localStorage.setItem('highScore', newHighScore);
    }

    getHighScore(){
        if(localStorage.getItem('highScore'))
            return localStorage.getItem('highScore');
        else{
            localStorage.setItem("highScore", 0);
            return 0; 
        }
    }

    resetGame(){
        this.selectedGifIds = [];
        this.score = 0; 
        this.highScore = this.getHighScore(); 
    }

    getScore(){
        return this.score; 
    }

    shuffleGifCards(array){
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex > 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    getSelectedGifs(){
        return this.selectedGifIds;
    }


}

export default GameDriver;