const APIBaseURL = "https://api.tvmaze.com";

export async function apiGet(queryString){
    const response = await fetch(`${APIBaseURL}${queryString}`).then(r => r.json());
    return response;
}