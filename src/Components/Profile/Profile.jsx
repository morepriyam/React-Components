import "./Profile.css";
import priyam from "../../assets/priyam.png";
import { useState } from "react";

export default function Profile() {
  const [name, setName] = useState("Priyam");
  const [age, setAge] = useState("25");
  const [country, setCountry] = useState("India");
  const [description, setDescription] = useState(
    "X Let's connect and Code together X"
  );
  const [followers, setFollowers] = useState("80K");
  const [likes, setLikes] = useState("803K");
  const [photos, setPhotos] = useState("1.4K");
  return (
    <>
      <div className="card">
        <div className="gradient"></div>
        <div className="profiledown">
          <img className="profilepic" src={priyam} alt="hi" />
          <div className="nameandage">
            <b>{name}</b>
            <div>{age}</div>
          </div>
          <div className="country">{country}</div>
          <div className="description">{description}</div>
        </div>

        <div className="bottom">
          <div className="info">
            <b>{followers}</b>
            <div>Followers</div>
          </div>
          <div className="info">
            <b>{likes}</b>
            <div>Likes</div>
          </div>
          <div className="info">
            <b>{photos}</b>
            <div>Photos</div>
          </div>
        </div>
      </div>
    </>
  );
}
