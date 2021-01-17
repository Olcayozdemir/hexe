import React from 'react'
import { ArtistWrapper } from './Artist.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Artist = () => {
    return (
        <ArtistWrapper>
           <div className="info">
              <div className="title">Reptilians From Andromeda</div>
              <div className="social-media-icons">
              <FontAwesomeIcon icon={["fab", "fa-spotify"]} />
              <FontAwesomeIcon icon={faCoffee} />
              <i class="fab fa-spotify"></i>
              </div>
              <div className="desc"></div>
           </div>
           <div className="image">
               <img src="https://ninjatune.net/images/artists/abra-main.jpg" alt="artist-name"/>
           </div>
        </ArtistWrapper>
    )
}

export default Artist
