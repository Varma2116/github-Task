import React, { Fragment,useState,useEffect,useRef} from 'react'
import axios from 'axios';
import useOnClickOutside from '../OnmouseRef';
import Filterdata from '../Filterdata';

function Repositories() {
    const ref = useRef()

    const types = ["All","Sources","Forks","Archives","Mirrors"];
    const languages = ['All',"HTML","CSS","JavaScript"];

    const [apidata,setapidata] = useState([]);
    const [filterdata,setfilterdata] = useState([])
    const [show,setshow] = useState(false)
    const [languagemenu,setlanguagemenu] = useState(false)

    const [field,setfield] = useState('')
    const [language,setlanguage] = useState('All')
    const [searchfilter,setsearchfilter] = useState(true)
    useEffect(() => {
        axios.get("https://api.github.com/users/supreetsingh247/repos")
        .then(res=>{
            setapidata(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
        search()
    },[language,field]);

    const languagelist = (eventlangauage)=>{
        document.getElementById("langval").innerText = eventlangauage.target.innerText;
       setlanguage(eventlangauage.target.innerText)
    }
    const fieldlist = (eventfield)=>{
        let val = eventfield.target.value
        setfield(val)
    }
    const search = ()=>{
        if(field !== "" && language !== "All"){
            setfilterdata(apidata.filter((data)=>{
                return( 
                        ((data.name && data.name.toLowerCase().indexOf(field.toLowerCase()) !== -1) ||
                        (data.description && data.description.toLowerCase().indexOf(field.toLowerCase()) !== -1))
                        &&
                        (data.language && data.language.toLowerCase().indexOf(language.toLowerCase()) !== -1)
                    )
                }
            ))
            setsearchfilter(false)
        }else if(field === '' && language !== "All"){
            setfilterdata(apidata.filter((data)=>{
                    return(
                        data.language && data.language.toLowerCase().indexOf(language.toLowerCase()) !== -1
                    )
                }
            ))
            setsearchfilter(false)

        }else if(field !== '' && language === "All"){
                setfilterdata(apidata.filter((data)=>{
                    return(
                        (data.name && data.name.toLowerCase().indexOf(field.toLowerCase()) !== -1) ||
                        (data.description && data.description.toLowerCase().indexOf(field.toLowerCase()) !== -1)
                    )
                }
            ))
            setsearchfilter(false)
        }else{
            setsearchfilter(true)
        }
    }
    const clear = ()=>{
        setfilterdata(apidata)
        setsearchfilter(true)
        setfield('')
    }
    const showtype = ()=>{
        setlanguagemenu(false)
        setshow(!show)
    }
    const showlanguage = ()=>{
        setshow(false)
        setlanguagemenu(!languagemenu)
    }
    useOnClickOutside(ref, () => setshow(false));
    useOnClickOutside(ref, () => setlanguagemenu(false));
    return (
        <Fragment>
            <div className="repository"> 
                <div className="text">
                    <input type="text"  placeholder="Find a repository..." onChange={fieldlist} value={field}/>

                </div>
                
                <div className="datalists">
                    <div className="data-list" onClick={showtype} ref={ref}>
                    <summary style={{fontSize:'14px'}}>Type: 
                        <span style={{fontWeight:'800'}}>All</span>
                    </summary>
                        {
                            show && 
                            <div>
                                <label>Select Type</label>
                                {types.map((type,index)=>
                                    <label key={index}>{type}</label>
                                )}
                            </div>
                        }
                    </div>
                    <div className="data-list" onClick={showlanguage} ref={ref}>
                    <summary style={{fontSize:'14px'}}>Language: 
                        <span style={{fontWeight:'800'}} id="langval">All</span>
                    </summary>
                            {
                            languagemenu && 
                            <div>
                                <label>Select Language</label>
                                {languages.map((language,index)=>
                                    <label key={index} onClick={languagelist}>{language}</label>
                                )}
                            </div>
                        }
                    </div> 
                </div>
            </div>
            {
                    !searchfilter && 
                        <div className="clear">
                            <div>{filterdata.length} results for All repositories written in {language}</div>
                            <button onClick = {clear}>Clear filter</button>
                        </div>
                }
                {
                    searchfilter && 
                        apidata.map(array=>
                            <Filterdata data={array} key={array.id}/>
                        )
                }
                {
                    filterdata.map(array=>
                        <Filterdata data={array} key={array.id}/>
                    )
                }
        </Fragment>
    )   
}

export default Repositories
