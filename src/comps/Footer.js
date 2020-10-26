import React, { useState } from "react";
import "./../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThumbsUp, faCommentAlt, faShareAlt,} from "@fortawesome/free-solid-svg-icons";

function Footer(props) {
  const { nblikes, comments } = props;
  const [likes, setLikes] = useState(nblikes);
  const [liked, setLiked] = useState(false);

  function Button({ type }) {
    const handleClick = (e) => {
      if (liked) {
        setLiked(false);
        setLikes(likes - 1);
      } else {
        setLiked(true);
        setLikes(likes + 1);
      }
    };
    return (
      <div>
        <ul className="button">
          <li>
            <FontAwesomeIcon style={{ color: "gray" }} icon={faThumbsUp} />
            <button
              style={liked ? { color: "blue" } : { color: "gray" }}
              onClick={() => handleClick()}
            >
              {type}
            </button>
          </li>
          <li>
            {/* <FontAwesomeIcon style={{ color: "gray" }} icon={faCommentAlt} /> */}
            <button>Comment</button>
          </li>
          <li>
            {/* <FontAwesomeIcon style={{ color: "gray" }} icon={faShareAlt} /> */}
            <button>Share</button>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <>
      <div className="reaction">
        <div className="likes">
          {/* <FontAwesomeIcon
            style={{ color: "#55f", marginRight: "10px" }}
            icon={faThumbsUp}
          /> */}
          {likes}
        </div>
        <div>{comments} Comments</div>
      </div>
      <div className="footer">
        <Button type="Like" />
      </div>
    </>
  );
}

export default Footer;
