import React, { useState, useContext, useEffect } from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import dbServices from "../../dbServices";
import { AuthContext } from "../Contexts/AuthContext";

export default function Site({ site, rank, siteId }) {
  const { currentUser, showForm } = useContext(AuthContext);

  const upVote = e => {
    if (currentUser) {
      e.currentTarget.children[0].innerHTML++;
      dbServices.upVote(siteId);
      setUpVote({ isUpVoted: true });
    } else {
      showForm();
    }
  };

  const downVote = e => {
    if (currentUser) {
      e.currentTarget.children[0].innerHTML--;
      dbServices.downVote(siteId);
      setUpVote({ isUpVoted: false });
    } else {
      showForm();
    }
  };

  const [vote, setUpVote] = useState({
    isUpVoted: false
  });

  useEffect(() => {
    if (site.upVotes.includes(currentUser.uid)) {
      setUpVote({ isUpVoted: true });
    }
  }, []);

  // showing site details
  return (
    <div className="site">
      <div className="img-back">
        <div className="hover">
          <a href={site.url} target="_blank" rel="noopener">
            visit
          </a>
        </div>
        <img src={site.img} alt="" />
      </div>
      <div className="bar">
        <h6>{rank}</h6>
        <hr />
        <div className="details">
          <h3>{site.title}</h3>
          <p>{site.description}</p>
        </div>
        {vote.isUpVoted ? (
          <div className="vote-button" onClick={downVote}>
            <h5>{site.upVotes.length || 0}</h5>
            <ArrowDropDownIcon />
          </div>
        ) : (
          <div className="vote-button" onClick={upVote}>
            <h5>{site.upVotes.length || 0}</h5>
            <ArrowDropUpIcon />
          </div>
        )}
      </div>
    </div>
  );
}
