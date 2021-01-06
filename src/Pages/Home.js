import React, {useState} from "react";
import MainPageLayout from "../Components/MainPageLayout";
import {apiGet} from "../Misc/Config";

function Home() {

    // eslint-disable-next-line no-unused-vars
    const [input, setinput] = useState("");
    const [results, setResults] = useState(null);

    const onSearch = () => {
        apiGet(`/search/shows?q=${input}`).then( result => setResults(result))
    }
    
    const onInputChange = ev => {
        setinput(ev.target.value)
    }

    const onKeyPress = ev => {
        if(ev.keyCode === 13){
            onSearch()
        }
    }
    const renderResults = () => {
        if(results && results.length===0){
            return <div>No Results</div>;
        }
        if(results && results.length>0){
            return(
                <div>
                    {
                        results.map((item) => 
                            <div key={item.show.id}>{item.show.name}</div>
                        )
                    }
                </div>
            )
        }
       return null;
    }

    return(
        <div>
            <MainPageLayout>
                <input type="text" onChange={onInputChange} onKeyDown={onKeyPress} value={input}/>
                <button type="button" onClick={onSearch}>Search</button>
                {renderResults()}
            </MainPageLayout>
        </div>
    )
}

export default Home;