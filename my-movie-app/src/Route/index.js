import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "../Container/Home";
import AboutContainer from "../Container/About";
import MovieContainer from "../Container/Movies";
import SearchContainer from "../Container/Search";
import TvSeriesContainer from "../Container/TvSeries";
import DetailContainer from "../Container/Details";
import ContactContainer from "../Container/Contact";

const RouterComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/about" element={<AboutContainer />} />
          <Route path="/contact" element={<ContactContainer />} />
          <Route path="/movies" element={<MovieContainer />} />
          <Route path="/search" element={<SearchContainer />} />
          <Route path="/series" element={<TvSeriesContainer />} />
          <Route
            path="/details/:movieid/:mediatype"
            element={<DetailContainer />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default RouterComponent;
