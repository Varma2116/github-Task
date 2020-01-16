import React,{useEffect,useRef,useState} from 'react'
import "../sass/Navbar.scss"
import useOnClickOutside from './OnmouseRef';
function Title() {
    const ref = useRef();
    const [state, setstate] = useState(false)
    const [menu, setmenu] = useState(false)
    const list = ()=>{
        setmenu(false) 
        setstate(!state)
    }
    const dropdown = ()=>{
        setmenu(!menu)
        setstate(false)
    }
    useOnClickOutside(ref, () => setstate(false));
    return (
        <div className = "navbar" ref={ref}>
            <div className="totalBar">
                <div className="bars" onClick={dropdown}>
                    <svg height="24" className="octicon octicon-three-bars" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fillRule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>   
                </div>
                <div className="image">
                    <img src="https://cdn0.iconfinder.com/data/icons/social-glyph/30/github-480.png" alt="cat"/>
                </div>
                <input type = "text" className="inputval" placeholder="Search or jump to..."/>
                <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" className="edit"></img>
                <div className="lists">
                    <div>Pull requests</div>
                    <div>Issues</div>
                    <div>Marketplace</div>
                    <div>Explore</div>
                </div>
                <div className="notification">
                    <svg className="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="20" height="20" aria-hidden="true"><path fillRule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path>
                    </svg>
                </div>
                <summary className="plus">
                    <svg className="octicon octicon-plus" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fillRule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path></svg>
                    <div className="dropdown" onClick={list}>
                        {state && 
                        <div id="droplist">
                            <div className="dropdown-item" href="">New repository</div>
                            <div className="dropdown-item" href="">Import repository</div>
                            <div className="dropdown-item" href="">New gist</div>
                            <div className="dropdown-item" href="">New organization</div>
                        </div>}
                    </div>
                </summary>
                
                <div className="small_profile">
                    <img src="https://avatars3.githubusercontent.com/u/55614354?s=460&v=4" alt=""/>
                    <span className="feature-preview-indicator"></span>
                </div>
                <div className="dropmenu"></div>
            </div>
            <div className="menulist">
                {menu && (
                    <div id="dropdownlist">
                        <div className="">Pull requests</div>
                        <div className="">Issues</div>
                        <div className="">Marketplace</div>
                        <div className="">Explore</div>
                    </div>
                )}        
            </div> 
        </div>
    )
}

export default Title
