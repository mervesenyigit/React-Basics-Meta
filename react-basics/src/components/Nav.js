'use client';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav({ theme, darkClick  }) {
  return (
    <nav className={`main-nav ${theme === "dark" ? "dark" : "light"}`}>
      <div className="d-block gap-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={darkClick } 
        >
          Toggle Dark Mode
        </button>
      </div>
      
      <ul>
        <li>Home</li>
        <li>Articles</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;
