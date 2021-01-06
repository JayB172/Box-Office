import React, {useState} from "react";
import MainPageLayout from "../Components/MainPageLayout"

function Home() {

    // eslint-disable-next-line no-unused-vars
    const [input, setinput] = useState("");

    const onSearch = () => {
        fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
        .then(r => r.json())
        .then((result) => console.log(result));
    }
    
    const onInputChange = ev => {
        setinput(ev.target.value)
    }

    const onKeyPress = ev => {
        if(ev.keyCode === 13){
            onSearch()
        }
    }

    return(
        <div>
            <MainPageLayout>
                <input type="text" onChange={onInputChange} onKeyDown={onKeyPress} value={input}/>
                <button type="button" onClick={onSearch}>Search</button>
            </MainPageLayout>
        </div>
    )
}

export default Home;