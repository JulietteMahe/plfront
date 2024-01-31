import { useEffect, useState } from 'react';
import './Search.css';
import GenreButtonList from '../../components/buttons/GenreButtonList';
import LabelsButtonList from '../../components/buttons/LabelsButtonList';
import PlacesButtonList from '../../components/buttons/PlacesButtonList';
import ArtistsButtonList from '../../components/buttons/ArtistsButtonList';

function Search () {

  return (
    <div className="Search">
        <div className="Search-bar">          
          <div className = "category">
            <div className = "subtitle">Genre</div>
            <GenreButtonList />
          </div>
          <div className = "category">
            <div className = "subtitle">Genre</div>
            <GenreButtonList />
          </div>
          <div className = "category">
            <div className = "subtitle">Genre</div>
            <GenreButtonList />
          </div>
          <div className = "category">
            <div className = "subtitle">Genre</div>
            <GenreButtonList />
          </div>
          <div className = "category">
            <div className = "subtitle">Genre</div>
            <GenreButtonList />
          </div>
          <div className = "category">
            <div className = "subtitle">Genre</div>
            <GenreButtonList />
          </div>
          <div className = "category">
            <div className = "subtitle">Genre</div>
            <GenreButtonList />
          </div>
          <div className = "category">
            <div className = "subtitle">Collectif</div>
            <LabelsButtonList />
          </div>
          <div className = "category">
            <div className = "subtitle">Artistes</div>
            <ArtistsButtonList />
          </div>
          <div className = "category">
            <div className = "subtitle">Lieux</div>
            <PlacesButtonList />
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