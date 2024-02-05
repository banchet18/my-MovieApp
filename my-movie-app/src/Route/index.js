import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "../Container/Home";

const RouterComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default RouterComponent;
