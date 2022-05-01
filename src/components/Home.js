import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images.pexels.com/photos/53358/bridge-architecture-building-sky-53358.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt="home_image"
      />
      <div className="home__row">
        <li className="product">
          <Link to="/beam" className="product__info">
            Beam design
          </Link>
          <img
            src="https://www.civilclick.com/wp-content/uploads/2019/03/beam-2.jpg"
            alt="img"
          />
        </li>

        <li className="product">
          <Link to="/beam" className="product__info">
            Column design
          </Link>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWw7kNWpYnVTC2vZNmnYvLIvATlLE0lyOIbw&usqp=CAU"
            alt="img"
          />
        </li>
      </div>
      <div className="footer">
        <p>
          designed by: <b>Kulbhushan Goswami</b>
        </p>
      </div>
    </div>
  );
}

export default Home;
