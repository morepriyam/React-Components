import React, { useState } from "react";
import "./Github.css";

function Github() {
  const [repoName, setRepoName] = useState("more-chess");
  const [desc, setDesc] = useState("Online Multiplayer Chess App");
  return (
    <div className="cardWrap">
      <div className="topWrap">
        <div className="nameDiv">
          {" "}
          <i class="fa-solid fa-book-bookmark" style={{ color: "#57606a" }}></i>
          <a className="name" href="/">
            {repoName}
          </a>{" "}
          <div className="public">Public</div>{" "}
        </div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
      <div className="desc">{desc}</div>
      <div className="footer">
        <div className="lang"> TypeScript</div>
        <div>
          <i class="fa-regular fa-star"></i> 1
        </div>
        <div>
          <i class="fa-solid fa-code-fork"></i> 1
        </div>
      </div>
    </div>
  );
}

export default Github;
