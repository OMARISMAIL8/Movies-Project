import { Row } from "react-bootstrap"
import CardMovie from "./CardMovie"
import Paginations from "./Paginations"


const MoviesList = ({movies, getPage, pageCount}) => {
    return (
        <div>
            <Row className="mt-3">
                {movies.length >= 1 ? (
                    movies.map((mov) => {
                        return(
                            <CardMovie key={mov.id} mov={mov}/>
                        )
                    })) : <h1 className="d-flex justify-content-center font">الفيلم او رقم الصفحة غير موجود</h1> }
                    {movies.length >= 1 ? (<Paginations getPage={getPage} pageCount={pageCount}/>) : null}
            </Row>
        </div>
    )
}

export default MoviesList
