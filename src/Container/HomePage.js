import React from "react";
import { Link } from "react-router-dom";
import Zurag1 from "../Assets/1663565358random-numbers-js.webp"
import Zurag2 from "../Assets/lir-usp-in-engine-screen-twotown-royam-no-logo.jpg.adapt.crop191x100.628p.jpg"
import Zurag3 from "../Assets/unsplash.jpg"
import Buttons from "../Component/Buttons";
// import HomePageList from "./Pages/ContentDatabase/DataCollections";


const HomePage = () => {
    return(
        <div className="w-full h-[750px] flex justify-center">
            <div className="w-[95%] h-[750px] flex justify-between items-center">
            <div className="w-[32%] h-[700px]">
                
                <h1 className="w-full flex justify-center text-4xl font-bold">Title 1</h1>
                <img src={Zurag1} alt="/"/>
                <p className="text-base m-2">Left till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged.</p>
                <Link to={"/body/text1"} ><Buttons variant="blue" text="more"/></Link>

            </div>
            <div className="w-[32%] h-[700px]">

                <h1 className="w-full flex justify-center text-4xl font-bold">Title 2</h1>
                <img className="h-[200px]" src={Zurag2} alt="/"/>
                <p className="text-base m-2">As collected deficient objection by it discovery sincerity curiosity. Quiet decay who round three world whole has mrs man. Built the china there tried jokes which gay why. Assure in adieus wicket it is. But spoke round point and one joy. Offending her moonlight men sweetness see unwilling. Often of it tears whole oh balls share an.

Brother set had private his letters observe outward resolve. Shutters ye marriage to throwing we as. Effect in if agreed he wished wanted admire expect. Or shortly visitor is comfort placing to cheered do. Few hills tears are weeks saw. Partiality insensible celebrated is in. Am offended as wandered thoughts greatest an friendly. Evening covered in he exposed fertile to. Horses seeing at played plenty nature to expect we. Young say led stood hills own thing get.</p>
                <Link to={"/body/text2"} ><Buttons variant="red" text="more" /></Link>
            </div>
            <div className="w-[32%] h-[700px]">

                <h1 className="w-full flex justify-center text-4xl font-bold">Title 3</h1>
                <img className="h-[200px]" src={Zurag3} alt="/"/>
                <p className="text-base m-2">Two exquisite objection delighted deficient yet its contained. Cordial because are account evident its subject but eat. Can properly followed learning prepared you doubtful yet him. Over many our good lady feet ask that. Expenses own moderate day fat trifling stronger sir domestic feelings. Itself at be answer always exeter up do. Though or my plenty uneasy do. Friendship so considered remarkably be to sentiments. Offered mention greater fifteen one promise because nor. Why denoting speaking fat indulged saw dwelling raillery.

Ye to misery wisdom plenty polite to as. Prepared interest proposal it he exercise. My wishing an in attempt ferrars. Visited eat you why service looking engaged. At place no walls hopes rooms fully in. Roof hope shy tore leaf joy paid boy. Noisier out brought entered detract because sitting sir. Fat put occasion rendered off humanity has.</p>
                <Link to={"/body/text3"} ><Buttons variant="black" text="more"/></Link>
                
            </div>
            </div>
        </div>
    )
}
export default HomePage;