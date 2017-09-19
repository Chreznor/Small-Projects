const searchForm = document.querySelector('#searchForm');

searchForm.addEventListener('submit', function(e) {
	let searchText = document.querySelector('#searchText').value;
	getMovies(searchText);
	e.preventDefault();
});

function getMovies(searchText) {
	axios
	.get(`https://api.themoviedb.org/3/search/movie?include_adult=true&page=1&query=${searchText}&language=en-US&api_key=d85a4cb9cc02218651b1548b20f1fb7d`)
	.then((res) => {
		let movies = res.data.results;
		if (movies.length === 0) {
			document.getElementById('movies').innerHTML = `
				<div class="col-md-3">
						<h5>No Results</h5>
				</div>
			`;
			return;
		}
		let output ='';
		// $.each(movies, (index, movie) => {
		movies.forEach((movie, index) => {
			output += `
				<div class="col-md-3">
					<div class="well text-center">
						<img src="http://image.tmdb.org/t/p/w500//${movie.poster_path}">
						<h5>${movie.title}</h5>
						<a onclick="movieSelected('${movie.id}')" class="btn btn-primary" href="#">Movie Details</a>
					</div>
				</div>
			`;
		})

		document.getElementById('movies').innerHTML = output;
		// $('#movies').html(output);
	})
	.catch((err) => {
		console.log(err);
	});
}

function movieSelected(id) {
	sessionStorage.setItem('movieId', id);
	window.location = 'movie.html';
	return false;
}

function getMovie() {
	let movieId = sessionStorage.getItem('movieId');

	axios
	.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=d85a4cb9cc02218651b1548b20f1fb7d&language=en-US`)
	.then((res) => {
		console.log(res);
		let movie = res.data;

		let output = `
			<div class="row">
				<div class="col-md-4">
					<img class="thumbnail" src="http://image.tmdb.org/t/p/w500//${movie.poster_path}">
				</div>
				<div class="col-md-8">
					<h2>${movie.title}</h2>
					<ul class="list-group">
						<li class="list-group-item"><strong>Genre:</strong> ${movie.genres[0].name} </li>
						<li class="list-group-item"><strong>Released:</strong> ${movie.release_date} </li>
						<li class="list-group-item"><strong>Rated:</strong> ${movie.vote_average} </li>
						<li class="list-group-item"><strong>Runtime:</strong> ${movie.runtime} min.</li>
						<li class="list-group-item"><strong>Language:</strong> ${movie.spoken_languages[0].name} </li>
						<li class="list-group-item"><strong>Popularity:</strong> ${movie.popularity}</li>
						<li class="list-group-item"><strong>Overview:</strong> ${movie.tagline}</li>
					</ul>
				</div>
			</div>
			<div class="row">
				<div class="well">
					<h3>Plot</h3>
					${movie.overview}
					<hr>
					<a href="http://imdb.com/title/${movie.imdb_id}" target="_blank" class="btn btn-primary">Visit IMDB</a>
					<a href="index.html" class="btn btn-default">Go Back To Search</a>
		`;

		document.getElementById('movie').innerHTML = output;
		//$('#movie').html(output);
	})
	.catch((err) => {
		console.log(err);
	});

}
