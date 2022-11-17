

import {useRef,useState,useEffect} from 'react'


// function component Nabar

const Navbar = ()=>{

    // state untuk mentimpan element html
    let [domHtml,setDomHtml] = useState({})
    let iconToggle = useRef(null)


    useEffect(()=>{
        let htmlSelector = document.querySelector('html');
        setDomHtml({htmlSelector})
        
        return () =>{
                return 
        }
    },[])
    
    

    let darkMode = ()=>{
        iconToggle.current.classList.toggle('toggle-active')
        if(domHtml.htmlSelector.dataset.colormode === 'light'){
            domHtml.htmlSelector.dataset.colormode = 'dark'
        }else{
            domHtml.htmlSelector.dataset.colormode = 'light'
        }
        
    }



    return(
        <nav className="navbar bg-transparent nav-main">
            <div className="container">
                <div className="left-nav">
                <a className="navbar-brand title-nav-main" href="#">Social Media Dashboard</a>
                <p className="span-title">Total Followers:23,004</p>
                </div>
                <div className="ml-auto right-nav">
                 <span className="dark-mode">Dark Mode</span>
                 <button className="btn-dark-mode" onClick={darkMode}>
                    <span className="toggle" ref={iconToggle}>
                    </span>
                 </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;