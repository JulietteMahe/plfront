import { useState } from 'react';
import './Search.css';

function Search () {

  const [ hardstyle, setHardstyle] = useState(false);
  const [ hardtechno, setHardtechno] = useState(false);
  const [ trance, setTrance] = useState(false);
  const [ psytrance, setPsytrance] = useState(false);
  const [ acid, setAcid] = useState(false);
  const [ industrielle, setIndustrielle] = useState(false);
  const [ gabber, setGabber] = useState(false);
  const [ frenchcore, setFrenchcore] = useState(false);
  const [ minimale, setMinimale] = useState(false);
  const [ house, setHouse] = useState(false);

  return (
    <div className="Search">
        <div className="Search-bar">
          <div className = "genre">
            <div className = "subtitle">Genre</div>
            <div className = "choices">
              <button onClick={(e) => setHardstyle(e.target.value)} value = {hardstyle} className = {hardstyle ? "active-items" : "menu-items"} >HARDSTYLE</button>
              <button onClick={(e) => setHardtechno(e.target.value)} value = {hardtechno} className = {hardtechno ? "active-items" : "menu-items"}>HARDTECH</button>
              <button onClick={(e) => setTrance(e.target.value)} value = {trance} className = {trance ? "active-items" : "menu-items"}>TRANCE</button>
              <button onClick={(e) => setPsytrance(e.target.value)} value = {psytrance} className = {psytrance ? "active-items" : "menu-items"}>PSYTRANCE</button>
              <button onClick={(e) => setAcid(e.target.value)} value = {acid} className = {acid ? "active-items" : "menu-items"}>ACID</button>
              <button onClick={(e) => setIndustrielle(e.target.value)} value = {industrielle} className = {industrielle ? "active-items" : "menu-items"}>INDUS</button>
              <button onClick={(e) => setGabber(e.target.value)} value = {gabber} className = {gabber ? "active-items" : "menu-items"}>GABBER</button>
              <button onClick={(e) => setFrenchcore(e.target.value)} value = {frenchcore} className = {frenchcore ? "active-items" : "menu-items"}>FRENCHCORE</button>
              <button onClick={(e) => setMinimale(e.target.value)} value = {minimale} className = {minimale ? "active-items" : "menu-items"}>MINIMALE</button>
              <button onClick={(e) => setHouse(e.target.value)} value = {house} className = {house ? "active-items" : "menu-items"}>HOUSE</button>
            </div>
          </div>
        </div>
        <div className="Search-content">
          <div className="Search-main-title"></div>
          <div className="Search-article-content"></div>
       </div>      
    </div>
  )
};

export default Search;