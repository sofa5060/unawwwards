import React, { useContext, useState, useEffect } from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { SitesContext } from "../Contexts/SitesContext";
import Skeleton from "@material-ui/lab/Skeleton";
import dbServices from "../../dbServices";
import { AuthContext } from "../Contexts/AuthContext";

export default function WinnerSite() {
  const { winnerSite } = useContext(SitesContext);
  const { currentUser, showForm } = useContext(AuthContext);

  console.log(winnerSite);

  const [vote, setUpVote] = useState({
    isUpVoted: false
  });

  const upVote = e => {
    if (currentUser) {
      e.currentTarget.children[0].innerHTML++;
      dbServices.upVote(winnerSite[1]);
      setUpVote({ isUpVoted: true });
    } else {
      showForm();
    }
  };

  const downVote = e => {
    if (currentUser) {
      e.currentTarget.children[0].innerHTML--;
      dbServices.downVote(winnerSite[1]);
      setUpVote({ isUpVoted: false });
    } else {
      showForm();
    }
  };

  useEffect(() => {
    if (winnerSite.length) {
      if (winnerSite[0].upVotes.includes(currentUser.uid)) {
        setUpVote({ isUpVoted: true });
      }
    }
  }, [winnerSite, currentUser]);

  if (winnerSite.length) {
    return (
      <div className="winner-site">
        <div className="img-back">
          <div className="hover">
            <a href={winnerSite[0].url} target="_blank" rel="noopener">
              visit
            </a>
          </div>
          <img src={winnerSite[0].img} alt="" />
        </div>
        <div className="bar">
          <div className="left">
            <h3>{winnerSite[0].title}</h3>
            <p>{winnerSite[0].description}</p>
          </div>
          {vote.isUpVoted ? (
            <div className="vote-button" onClick={downVote}>
              <h5>{winnerSite[0].upVotes.length || 0}</h5>
              <ArrowDropDownIcon />
            </div>
          ) : (
            <div className="vote-button" onClick={upVote}>
              <h5>{winnerSite[0].upVotes.length || 0}</h5>
              <ArrowDropUpIcon />
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="winner-site">
        <Skeleton variant="rect" height={200} width={400} />
        <div className="bar">
          <div className="left">
            <Skeleton width={150} style={{ marginBottom: 10 }} />
            <Skeleton variant="rect" height={30} width={180} />
          </div>
          <div className="right">
            <Skeleton variant="rect" height={50} width={100} />
          </div>
        </div>
      </div>
    );
  }
}
