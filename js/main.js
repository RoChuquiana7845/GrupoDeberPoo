const marvelCharacters = {
    render: ()=> {
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a5fc881dad0a99d5434b62a5b041d5af&hash=c743157693c4d558f3b111a080231bf5';
        const container = document.querySelectorAll('.card-body')
        let contentHTML = '';
        let contador = 0;
        fetch(urlAPI)  
            .then(res => res.json())
            .then((json)=> {
                json.data.results.forEach(hero => {
                    let urlHero = hero.urls[0].url;
                    container[contador].innerHTML = `
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name} width="80" height="80">
                    
                    <h3>${hero.name}</h3>
                    <br>
                    <a href="${urlHero}">
                    Ver mas
                    </a> 
                    `
                    contador++;

                });
                    
                })
            }
    }


marvelCharacters.render();



