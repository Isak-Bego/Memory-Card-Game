import { useState, useEffect } from "react";
import "../styles/Board.css";
import CatCards from "./CatCards";

function Board() {
  let [loading, setLoading] = useState(true);
  let [content, setContent] = useState({});

  console.log(content);

  useEffect(() => {
    if (loading === true) {
      fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=ER6SlfHtzBR9LuE7rxKksuGjI0KVrDp3&q=cats&limit=30`,
        { mode: "cors" }
      )
        .then((Response) => Response.json())
        .then((Response) => {
          setContent({
            success: true,
            score: 0,
            highScore: localStorage.getItem("highScore")
            ? localStorage.getItem("highScore")
            : 0,
            data: Response.data.map((gif) => ({
              id: gif.id,
              url: gif.images.original.url,
            })),
          });
        })
        .catch((error) => {
          setContent({ success: false, data: error });
        });

      setLoading(false);
    }
  }, [loading]);

  if (loading) {
    return <div>Loading...</div>;
  } else if (content.success === true) {
    return (
      <>
        
        <div className="Master">
            <div className="scoreBoard">
                <h3>Score: {content.score}</h3>
                <br />
                <h3>High Score: {content.highScore}</h3>
            </div>
          <CatCards
            contentData={content}
            setContentData={setContent}
            setLoadingData={setLoading}
          />
        </div>
      </>
    );
  } else if (content.success === false) {
    return <div>An error occurred...</div>;
  }
}

export default Board;
