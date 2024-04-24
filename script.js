fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game", {
    "method": "GET",
    "headers":{
        'X-RapidAPI-Key': '1cbc91e128mshcceb52850a08018p12264fjsnefa0e12dbee2',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	
    }
})
.then(res => res.json())
.then(data => {
    const list = data.d;
     list.map((item => {
        const name = item.l;
        const poster = item.i.imageUrl;
        const movie = `<li><img src="${poster}">
        <h2>${name}</h2></li>`;
       const movies = document.querySelector(".movies");
       movies.innerHTML += movie;
     }))
})
.catch(err => {
    console.error(err);
})