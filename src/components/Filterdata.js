import React, { Fragment } from 'react'
import '../sass/filterdata.scss';
import Moment from 'react-moment';
function Filterdata(props) {
    const languageComp = (data)=>{
        if(data !== null){
            var colorval = null
            if(data === 'JavaScript'){
                colorval = 'yellow'
            }else if(data === "HTML"){
                colorval = 'red'
            }else if(data === "CSS"){
                colorval = '#563d7c'
            }   
            return (
                <div className="language">
                    <div className="dot" style={{background:colorval}}></div>
                    <div>{props.data.language}</div>
                </div>
            )
        }
        return null
    }
    const handleStar = (e)=>{
        let val = e.target;
        if(val.innerText === "Star"){
            val.innerText = "Unstar"
        }else{
            val.innerText = "Star"
        }
    }
    return (
        <Fragment>
            <div className="respositories">
                <div className="resp-details">
                    <div className="resp-name">{props.data.name}</div>
                    <div className="description">{props.data.description}</div>
                    <div className="details">
                        {languageComp(props.data.language)}
                        {props.data.forks !== 0 &&
                            <div className="forks">
                                 <div className="fork"></div><div>{props.data.forks}</div>
                            </div>
                        }
                        <div className="update">
                            <div className="date"><div>Updated on </div>
                                {<Moment date = {props.data.updated_at} format ="DD MMM YYYY"/>}
                            </div>
                        </div>
                    </div>
                </div>
                <button className="star-button"><div>&#9734;</div><div onClick={handleStar}>Star</div></button>
            </div>
        </Fragment>
    )
}

export default Filterdata
