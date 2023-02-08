import React from "react";
import "../../../Container/Pages/ContentDatabase/Database"


const HomePageList = (prompt) =>{
    return(
        
            
            <div className="w-[32%] h-[700px]">
                
                <h1 className="w-full flex justify-center text-4xl font-bold">{prompt.title}</h1>
                <img src={prompt.img} alt="/"/>
                <p className="text-base m-2">{prompt.description}</p>
        
            </div>
          
        
    )
}
export default HomePageList ;