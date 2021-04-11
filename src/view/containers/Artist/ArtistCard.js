import React from "react";
import { ArtistWrapper } from "./ArtistCard.styled";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { useParams } from "react-router";

const ArtistCard = () => {
  const { id } = useParams();
  useFirestoreConnect({
    collection: `artists/`,
    storeAs: "artists",
  });

  const {
    description,
    name,
    images,
    videos,
    releases,
    socialMedia,
    song,
  } = useSelector((state) => state.firestore.data.artists[id]);

  return (
    <ArtistWrapper>
      <div className="info">
        <div className="title">{name}</div>
        <div className="social-media-icons">
          {socialMedia.spotify && (
            <a href={socialMedia.spotify}>
              <img alt="" src="./../Spotify_Icon_RGB_Black.png" />
            </a>
          )}

          {socialMedia.fizy && (
            <a href={socialMedia.fizy}>
              <img alt="" src="./../unnamed.png" />
            </a>
          )}

          {socialMedia.youtube && (
            <a href={socialMedia.youtube}>
              <img
                className="youtube"
                alt=""
                src="./../free-youtube-icon-123-thumb.png"
              />
            </a>
          )}

          {socialMedia.itunes && (
            <a href={socialMedia.itunes}>
              <img alt="" src="./../itunes.png" className="itunes" />
            </a>
          )}
        </div>
        <div className="desc">{description}</div>
      </div>
      <div className="image">
        <img
          src="https://ninjatune.net/images/artists/abra-main.jpg"
          alt="artist-name"
        />
      </div>
    </ArtistWrapper>
  );
};

export default ArtistCard;
