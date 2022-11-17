




// function component Nabar

const Navbar = ()=>{
    return(
        <nav className="navbar bg-light nav-main">
            <div class="container">
                <div className="left-nav">
                <a className="navbar-brand title-nav-main" href="#">Social Media Dashboard</a>
                <p className="span-title">Total Followers:23,004</p>
                </div>
                <div className="ml-auto right-nav">
                 <span className="dark-mode">Dark Mode</span>
                 <button className="btn-dark-mode">
                    <span className="toggle">
                        
                    </span>
                 </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;