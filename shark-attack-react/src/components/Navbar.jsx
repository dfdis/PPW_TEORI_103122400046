function Navbar() {
  return (
    <aside className="sidebar">
      <h2 className="brand">SHARK ATTACK!</h2>

      <nav>
        <a href="#home" className="nav-link active">
          HOME
        </a>
        <a href="#explore" className="nav-link">
          EXPLORE
        </a>
        <a href="#myth" className="nav-link">
          MYTH OR FACT?
        </a>
        <a href="#collection" className="nav-link">
          COLLECTION
        </a>
      </nav>

      <p className="sidebar-caption">
        DISCOVER THE OCEAN
      </p>
    </aside>
  )
}

export default Navbar