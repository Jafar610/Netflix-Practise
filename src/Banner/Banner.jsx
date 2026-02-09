import React from 'react'
import './banner.css'
function Banner() {
  return (
    <div className="banner" 
    style={{backgroundImage: "url('https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO/AAAABXoQh8n7qHkKZyLh8iVZtqjvN8sJr9l3aGgWz5u4e7n1b2v5s9wX9z5l3.jpg?r=1c0.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center center"

    }}>
      <div className="banner_content">
        <h1 className="banner_title">Stranger Things</h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button info">More Info</button>
        </div>
        <p className="banner_description">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
        </p>
        <div className="fade--bottom"></div>
      </div>
    </div>
  )
}

export default Banner