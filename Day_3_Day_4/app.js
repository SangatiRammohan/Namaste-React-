import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const restaurants = [
  { id: 1, name: "Paradise Biryani", place: "Hyderabad", rating: 4.5,
    image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=400&auto=format" },
  { id: 2, name: "Mehfil Restaurant", place: "Banjara Hills", rating: 4.2,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format" },
  { id: 3, name: "Ulavacharu", place: "Madhapur", rating: 4.6,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format" },
  { id: 4, name: "Absolute Barbecues", place: "Kukatpally", rating: 4.4,
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&auto=format" },
  { id: 5, name: "Cafe Niloufer", place: "Lakdikapul", rating: 4.7,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&auto=format" },
     { id: 6, name: "Chutneys", place: "Somajiguda", rating: 4.3,
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=400&auto=format" },
  { id: 7, name: "Chutneys", place: "Somajiguda", rating: 4.3,
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=400&auto=format" },
    { id: 8, name: "Paradise Biryani", place: "Hyderabad", rating: 4.5,
    image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=400&auto=format" },
  { id: 9, name: "Mehfil Restaurant", place: "Banjara Hills", rating: 4.2,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format" },
  { id: 10, name: "Ulavacharu", place: "Madhapur", rating: 4.6,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format" },
  { id: 11, name: "Absolute Barbecues", place: "Kukatpally", rating: 4.4,
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&auto=format" },
  { id: 12, name: "Cafe Niloufer", place: "Lakdikapul", rating: 4.7,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&auto=format" },
  { id: 13, name: "Chutneys", place: "Somajiguda", rating: 4.3,
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=400&auto=format" }
];

const Header = () => (
  <div className="card">
    <img
      alt="Logo"
      className="image"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HE51g1QFrOdlhF0eLqVjsYNknuh_bIdCYqjAj1sg3g&s=10"
    />
    <div className="maincard">
      <ul className="navicons">
        <li>About</li>
        <li>Services</li>
        <li>Items</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>
);

const Cards = ({ data }) => (
  <div className="cardItems">
    <img alt={data.name} src={data.image} />
    <div className="listItems">
      <p>Name: {data.name}</p>
      <p>Place: {data.place}</p>
      <p>Rating: ⭐ {data.rating}</p>
    </div>
  </div>
);

const Body = () => {

 

  return (
    <div className="bodyCard">
      <div className="searchInput">
        <input
          type="text"
          placeholder="Search restaurants..."
        
        />
      </div>

      <div className="cardList">
        {
          restaurants.map((restaurant) => (
            <Cards key={restaurant.id} data={restaurant} />
          ))
        }
      </div>
    </div>
  );
};

const Footer = () => <div className="footer">Copyright © Rammohan</div>;

const Layout = () => (
  <div className="fullbody">
    <Header />
    <Body />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);