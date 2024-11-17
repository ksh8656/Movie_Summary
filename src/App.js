import { dummy } from './movieDummy';
import Movie from './components/Movie';

function App() {

  const sortedMovies = [...dummy.results].sort((a,b) => b.vote_average-a.vote_average);
  return (
    <div>
      <div className="app-container">
        {
          sortedMovies.map((item) => {
            return (
              <Movie 
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                overview={item.overview}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
