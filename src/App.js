import { Container } from "react-bootstrap";
import NavBar from "./Componants/NavBar";
import MoviesList from "./Componants/MoviesList";
import { useEffect, useState } from "react";
import axios from 'axios'
import MovieDetails from "./Componants/MovieDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  const [movies, setMovies] = useState([])
  const [pageCount, setPageCount] = useState(0)

  // Get All Movies By Axios
  const getAllMovies = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=9896037be7d85d7cbca87d0f2b0774c3&language=en-US")
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
  }

  // Get Current Page
  const getPage = async (page) => {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9896037be7d85d7cbca87d0f2b0774c3&language=en-US&page=${page}`)
      setMovies(res.data.results)
      setPageCount(res.data.total_pages)
    } catch(error) {
      setMovies("")
      setPageCount("")
    }
  }

  useEffect(() => {
    getAllMovies()
  }, [])

  // To Search In API
  const search = async (word) => {
    if (word !== "") {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9896037be7d85d7cbca87d0f2b0774c3&query=${word}&language=en-us`)
      setMovies(res.data.results)
      setPageCount(res.data.total_pages)
    } else {
      const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=9896037be7d85d7cbca87d0f2b0774c3&language=aen-us")
      setMovies(res.data.results)
    }
  }

  return (
    <div className="fs-2">
      <NavBar search={search}/>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList movies={movies} getPage={getPage} pageCount={pageCount}/>}/>
            <Route path="/movie/:id" element={<MovieDetails/>}/>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
