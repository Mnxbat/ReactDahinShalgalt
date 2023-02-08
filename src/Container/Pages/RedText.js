import React from "react";
import DetailData from "./ContentDatabase/Database"

const RedText = () => {
    const PageData = DetailData.map((prompt)=> {
        if (prompt.id ===2){
            return (
                <div className="w-full h-[1000px] flex justify-center items-center">
                <div className="w-[70%] h-[750px]">
                    <h1 className="w-full flex text-4xl font-bold">{prompt.title}</h1>
                    <img src={prompt.img} alt=" / "/>
                    <p>{prompt.description}</p>

                </div>
                </div>
            )
        }else{
            return
        }
    }
    );  
    return(
        <>
        {PageData}
        </>
    )
}
export default RedText;