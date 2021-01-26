import React, {useState} from "react";
import ActorGrid from "../Components/Actor/ActorGrid";
import MainPageLayout from "../Components/MainPageLayout";
import ShowGrid from "../Components/Show/ShowGrid";
import {apiGet} from "../Misc/Config";

function Home() {

    // eslint-disable-next-line no-unused-vars
    const [input, setinput] = useState("");
    const [results, setResults] = useState(null);
    const [searchOption, setSearchOption] = useState("shows")

    const isShowSearch = searchOption==="shows"

    const onSearch = () => {
        apiGet(`/search/${searchOption}?q=${input}`).then( result => setResults(result))
    }
    
    const onInputChange = ev => {
        setinput(ev.target.value)
    }

    const onRadioChange = ev => {
        setSearchOption(ev.target.value)
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
                results[0].show?  
                <ShowGrid data={results} /> : 
                <ActorGrid data={results} />
            )
        }
       return null;
    }

    return(
        <div>
            <MainPageLayout>
                <input placeholder="Search for something" type="text" onChange={onInputChange} onKeyDown={onKeyPress} value={input}/>
                <div>
                    <label htmlFor="Shows-search">
                    Shows
                        <input id="Shows-search" type= "radio" value="shows" onChange={onRadioChange} checked={isShowSearch} />
                    </label>
                    <label htmlFor="Actors-search">
                    Actors
                        <input id="Actors-search" type= "radio" value="people" onChange={onRadioChange} checked={!isShowSearch} />
                    </label>
                </div>
                <button type="button" onClick={onSearch}>Search</button>
                {renderResults()}
            </MainPageLayout>
        </div>
    )
}

export default Home;