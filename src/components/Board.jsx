import { useState, useEffect } from "react";

function CatCards({data}){
    return(
        data.map((gif) => {
            return(
                <div key={gif.id}>
                    <img src={gif.url} alt="cat image" />
                </div>
            );
        })
    );
}


function Board() {
  let [loading, setLoading] = useState(true);
  let [content, setContent] = useState({});

  console.log(content);

  useEffect(() => {
    if (loading === true) {
      fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=ER6SlfHtzBR9LuE7rxKksuGjI0KVrDp3&q=cats&limit=30`,
        {mode: "cors"}
      )
        .then((Response) => Response.json())
        .then((Response) => {
            setContent({success:true, data: Response.data.map((gif)=> ({id: gif.id, url: gif.images.original.url})
            )});
        })
        .catch((error) => {
            setContent({success:false, data: error});
        });

        setLoading(false);

    } 
  }, [loading]);


  if(loading){
    return(
        <div>Loading...</div>
    );
  }else if(content.success === true){
    return(
        <div className="Master">
            <CatCards data={content.data}/>
        </div>
    )
  }else if(content.success === false){
    return (
        <div>An error occurred...</div>
    );
  }

}

export default Board;
