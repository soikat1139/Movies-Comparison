const fetchData=async (searchTerm)=>{
    const response= await axios.get('http://www.omdbapi.com/',{
        params:{
            apikey:84998726,
            S:searchTerm
        }
    });
    if(response.data.Error){
        return [];
    }
    return response.data.Search;
};

createAutoComplete({
    root:document.querySelector('.autocomplete')


});
createAutoComplete({
    root:document.querySelector('.autocomplete-two')


});
createAutoComplete({
    root:document.querySelector('.autocomplete-three')


});



const movieTemplate=(movieDetails)=>{
     
    return `
    <article class="media">
    <figure class="media-left">
    <p class="image">
    
    <img src="${movieDetails.Poster}"/>
    
    </p>
    
    </figure>
    <div class="media-content">
    <div class="content">
    <h1>${movieDetails.Title}</h1>
    <h4>${movieDetails.Genre}</h4>
    <p>${movieDetails.Plot}</p>
    
    </div>
    </div>
    </article>
    <article class="notification is-primary">
    <p class="title">${movieDetails.Awards}</p>
    <p class="subtitl">Awards</p>
    </article>
    <article class="notification is-primary">
    <p class="title">${movieDetails.BoxOffice}</p>
    <p class="subtitl">BoxOffice</p>
    </article>
    <article class="notification is-primary">
    <p class="title">${movieDetails.Metascore}</p>
    <p class="subtitl">MetaScore</p>
    </article>
    <article class="notification is-primary">
    <p class="title">${movieDetails.imdbRating}</p>
    <p class="subtitl">Imdb Rating</p>
    </article>
    <article class="notification is-primary">
    <p class="title">${movieDetails.imdbVotes}</p>
    <p class="subtitl">Imdb Votes</p>
    </article>
    `
};