import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovieDetail(json.data.movie);

    console.log(movieDetail);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h3>{movieDetail.title_long}</h3>
          <p>{movieDetail.description_full}</p>
          <img src={movieDetail.medium_cover_image} alt={movieDetail.title} />
        </div>
      )}
    </div>
  );
}
export default Detail;
