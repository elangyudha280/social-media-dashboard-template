

import {useRef,useState,useEffect} from 'react'


// function component Nabar

const Navbar = ()=>{
    // state untuk menyimpan element html
    let [domHtml,setDomHtml] = useState({})

    // ref untuk icon button toggle
    let iconToggle = useRef(null)

    // ref text mode
    let textMode = useRef(null)

    // useState for data localstorage 
    const [local,setLocal] = useState('')

    useEffect(()=>{
        let htmlSelector = document.querySelector('html');

        // get Item local storage mode 
        let getDataMode = localStorage.getItem('mode')

        // berikan nilai dari data local storage ke atribut data-colormode html
        htmlSelector.dataset.colormode = getDataMode;

        // update data state local dengan data localStorage
        setLocal(`${getDataMode} mode`)

        // update data state domHtml dengan element htmlSelector
        setDomHtml({htmlSelector})

        // cek jika data  local storage modenya dark maka tambahkan class toggle active ke element toggle
        if(getDataMode === 'dark'){
            iconToggle.current.classList.remove('toggle-active') 
        }
            else{
                 iconToggle.current.classList.add('toggle-active')
            }           
        
        return () =>{
            return null 
        }
    },[])



    
    // fungsi event handling ketika tombol di click
    let darkMode = ()=>{

        // cek jika atribut data-colormode 
        if(domHtml.htmlSelector.dataset.colormode === 'dark'){
            localStorage.setItem('mode','light')
            setLocal(`${localStorage.getItem('mode')} mode`)
            iconToggle.current.classList.add('toggle-active')
            domHtml.htmlSelector.dataset.colormode =  localStorage.getItem('mode')

        }else{
            localStorage.setItem('mode','dark')
            setLocal(`${localStorage.getItem('mode')} mode`)
            iconToggle.current.classList.remove('toggle-active')
            domHtml.htmlSelector.dataset.colormode =  localStorage.getItem('mode')
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
                 <span className="dark-mode text-capitalize" ref={textMode}>{local}</span>
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