import { useEffect, useState } from "react"
import axios from "axios"
import { Col, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"

const MoviesDetails = () => {
    const param = useParams()

    const [movie, setMovie] = useState(0)
    const getMovieDetails = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=9896037be7d85d7cbca87d0f2b0774c3&language=ar`)
        setMovie(res.data)
    }

    useEffect(() => {
        getMovieDetails()
    }, []);

    return (
        <div>
            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-4">
                    <div className="card-details d-flex algin-items-center">
                        <img
                            className="img-movie w-30"
                            src={`https://image.tmdb.org/t/p/w500/`+movie.poster_path}
                            alt="ascad"
                        />
                        <div className="justify-content-center text-center mx-auto">
                                <p className="card-text-details border-bottom">
                                    اسم الفيلم: {movie.original_title}
                                </p>
                                <p className="card-text-details border-bottom">
                                    تاريخ الفيلم: {movie.release_date}
                                </p>
                                <p className="card-text-details border-bottom">
                                    عدد المقيمين: {movie.vote_count}
                                </p>
                                <p className="card-text-details border-bottom">
                                    التقييم: {movie.vote_average}
                                </p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-1" style={{height:"200px"}}>
                    <div className="card-story d-flex flex-column align-items-start">
                        <div className="text-end px-2">
                            <p className="card-text-story">{movie.overview}</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md="10" xs="12" sm="12" className="mt-2 d-flex justify-content-center">
                    <Link to={"/"}>
                        <button style={{backgroundColor:"#b45b35", border:"none"}} className="btn btn-primary mx-2">
                            عودة للرئيسية
                        </button>
                    </Link>

                    <a href={movie.homepage}>
                        <button style={{backgroundColor:"#b45b35", border:"none"}} className="btn btn-primary">
                            مشاهدة الفيلم
                        </button>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default MoviesDetails

