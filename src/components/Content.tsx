import { MovieCard } from './MovieCard';
import { Header } from './Header';

interface ContentProps {
  selectedGenre: {
    title: string
  };
  movies: MovieDTO[];
}

interface MovieDTO {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content({selectedGenre, movies}: ContentProps) {
  return (
    <div className="container">
        <Header selectedGenre={selectedGenre}/>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard 
                key ={movie.imdbID} 
                title={movie.Title} 
                poster={movie.Poster} 
                runtime={movie.Runtime} 
                rating={movie.Ratings[0].Value}
              />
            ))}
          </div>
        </main>
      </div>
  );
}