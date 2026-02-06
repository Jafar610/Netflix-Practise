import React, {useState, useEffect} from 'react'
import './header.css'
function Header() {
    const [show, setShow] = useState(false);
        useEffect(() => {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    setShow(true);
                } else setShow(false);
            })
        }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />
            <img
                src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                alt="Avatar logo"
                className="nav__avatar"
            />
        </div>
  )
}

export default Header