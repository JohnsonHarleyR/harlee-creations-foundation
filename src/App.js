import MainLayout from "./common/components/layout/MainLayout";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ComingSoon from './common/components/pages/ComingSoon';

function App() {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ComingSoon />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
}

export default App;
