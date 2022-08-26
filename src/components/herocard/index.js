import React from 'react'
import style from './style.module.scss'
import { useData } from '../../context/use-data'
import { useNavigate } from "react-router-dom";
import { comicsArr } from '../../utils/ComicsArr';


function Herocard(props) {

  let goInfo = useNavigate(); // =====> addition useNavigate() hook  to new variable
  const { setHeroName, setHeroImage, setHeroComics, setDescription } = useData() // get context data

  const handleclick = (e) => { // =====> after click set States
    setHeroName(e.name)  // =====>  set hero name
    setHeroComics(comicsArr(e.comics.items.slice(0,10))) // =====> comicsarr comes here from within utils folder after the string manipulation and only 10 list elements setState
    setHeroImage(e.thumbnail.path)  // =====> set hero image
    setDescription(e.description)  // =====>  set hero desc
    goInfo("./Info", { replace: false }) // =====>  go to info page
  }

  return ( // =====> render card elements
      <div onClick={() => handleclick(props.item)} className={style.card}>
        <img className={style.card_image} src={props.item.thumbnail.path + "/portrait_incredible.jpg"} alt={props.item.name} ></img>
        <h2 className={style.name}>{props.item.name}</h2>
      </div>
  )
}

export default Herocard
