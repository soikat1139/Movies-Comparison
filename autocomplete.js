const createAutoComplete =({root,renderOption})=>{
    root.innerHTML=`
    <label><b>Search For A movie</b></label><br>
    <div class="dropdown">
    <div class="dropdown-trigger">
    <input class="input"/>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
              <div class="dropdown-content results">
              </div>
            </div>
          </div>
    `
    


    
    // const input=document.querySelector('input');
    // const results=document.querySelector('.results');
    // const menu=document.querySelector('.dropdown');


    const input=root.querySelector('input');
    const results=root.querySelector('.results');
    const menu=root.querySelector('.dropdown');


    
    const onInput= async event=>{
       const movies = await fetchData(event.target.value);
    
    
       if(!movies.length){
        menu.classList.remove('is-active');
       }
    
    
      results.innerHTML='';
         menu.classList.add('is-active');


       for(let movie of movies){
       const options=document.createElement('a');
       options.addEventListener('click',(e)=>{
        menu.classList.remove('is-active');
        input.value=movie.Title;
        onMovieSelect(movie);
       })
        options.innerHTML=renderOption(movie);
        results.appendChild(options);
        options.classList.add('dropdown-item');
    }
    };
    
    
    
    input.addEventListener('input',debounce(onInput,900));
    window.addEventListener('click',(e)=>{
         console.log(e.target);
        //  <input class="input"></input>
        // <a class="dropdown-item"></a>
        if(e.target.className!="input" && e.target.className!="dropdown-item"){
            menu.classList.remove('is-active');
        }
    })
    
    
    
    const onMovieSelect= async (movie)=>{
       const response=await axios.get('http://www.omdbapi.com/',{
        params:{
            apikey:84998726,
            i:movie.imdbID
        }
    })
    
    
    
    
    
    document.querySelector('#summary').innerHTML=movieTemplate(response.data);
    }
};