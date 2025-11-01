import React from "react";
import { Bookmark } from "lucide-react";

const card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img
          src={props.img}
          alt=""
        />
        <button>
          Save <Bookmark size={10} />{" "}
        </button>
      </div>

      <div className="center">
        <h3>{props.company} <span>{props.datePosted}</span>
        </h3>
        <h1>{props.post}</h1>
        <div>
          <h3>{props.tag1}</h3>
          <h3>{props.tag2}</h3>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h2>{props.pay}</h2>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default card;
