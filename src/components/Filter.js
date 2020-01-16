import React, { Fragment,useState,useEffect,useRef } from 'react'
import '../sass/filter.scss'
import Overview from './Groups/Overview'
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Switch,
  } from 'react-router-dom';
import Repositories from './Groups/Repositories';
import Projects from './Groups/Projects'
import Stars from './Groups/Stars'
import Followers from './Groups/Followers'
import Following from './Groups/Following'

function Filter(){
    const links = ["Overview","Repositories","Projects","Stars","Followers","Following"]
    return (
        <Router>
            <div className="total-data">
                <div className="navbar-data">
                    { 
                        links.map((link,index)=>
                            link!== "Repositories" ?
                                <div className="line">
                                    <NavLink exact to={link} className="NavLink">
                                    {link}
                                    </NavLink>
                                    {index>0 ? <div className="counter">{index}</div>:<div></div>}
                                </div> 
                            :<div className="line">
                                <NavLink exact to="/" className="NavLink">
                                {link}
                                </NavLink>
                                {index>0 ? <div className="counter">{index}</div>:<div></div>}
                            </div> 
                        )
                    }
                </div>
                <Switch>
                    <Route exact path="/overview" component={Overview} />
                    <Route exact path="/" component={Repositories} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/stars" component={Stars} />
                    <Route exact path="/followers" component={Followers} />
                    <Route exact path="/following" component={Following} />
                </Switch>                
            </div>                
        </Router>
    )
}

export default Filter
