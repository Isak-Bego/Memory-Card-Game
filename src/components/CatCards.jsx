import GameDriver from "../GameDriver";
let gameDriver = new GameDriver();

function handleClick(id, contentData, setContentData, setLoadingData){
    if(gameDriver.alreadySelected(id) === true ){
        gameDriver.setHighScore(gameDriver.getScore()); 
        gameDriver.resetGame();
        setLoadingData(true);
        setContentData({});
    }else{
        gameDriver.addToSelected(id);
        const shuffledData = gameDriver.shuffleGifCards(contentData.data);
        setContentData({success: true, score: gameDriver.getScore(), highScore: gameDriver.getHighScore(), data:shuffledData}); 
    }
}


function CatCards({contentData, setContentData, setLoadingData}){
    return(
        contentData.data.map((gif) => {
            return(
                <div key={gif.id} className="gifHolder" onClick={()=>{handleClick(gif.id, contentData, setContentData, setLoadingData)}}>
                    <img src={gif.url} alt="cat image" />
                </div>
            );
        })
    );
}

export default CatCards;