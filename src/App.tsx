import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import LandingPage from "./pages/LandingPage";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthPage />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
