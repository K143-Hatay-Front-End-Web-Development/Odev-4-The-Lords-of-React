import React from 'react'
import { useData } from '../../context/use-data'
import style from './style.module.scss'
import { useNavigate } from "react-router-dom";


function Heroinfo() {

    let goBack = useNavigate() // =====> addition useNavigate() hook  to new variable
    const { heroName, heroImage, heroComics, description, setAllHero } = useData() // =====>  get context data 
    const backClick = () => {
        goBack("/", { replace: false }) // =====> go back main page
        setAllHero([]) 
    }
    return (
        <div className={style.container}>
            <div className={style.contents}>
                <div>
                    <img className={style.image} src={heroImage + "/portrait_incredible.jpg"} alt={heroName}></img>
                </div>
                <div className={style.info}>
                    <h1 className={style.title}>{heroName}</h1>
                    <h2 className={style.title}>Comics</h2>
                    <ul className={style.list}>
                        {
                            heroComics.map((item, index) =>
                                <li key={"comics" + index}>{item.name}</li>
                            )
                        }
                    </ul>
                    <h2 className={style.title}>Description</h2>
                    <p className={style.desc}>{description || "My lawyer will make the necessary explanation."}</p>
                </div>
            </div>
            <button className={style.button} onClick={backClick}>Go Back</button>
        </div>
    )
}

export default Heroinfo