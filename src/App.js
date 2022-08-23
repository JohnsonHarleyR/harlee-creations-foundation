import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import ComingSoon from './common/components/pages/ComingSoon';
import Admin from "./pages/admin/Admin";
import LayoutAssist from "./pages/admin/LayoutAssist";
import CreateZone from "./pages/admin/CreateZone";

function App() {

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  }

  return (
      <Routes>
        <Route path="/" element={<ComingSoon pageName="Home Page" />} />
        <Route 
          path="/admin"
          element={
            <Admin navigateToHome={navigateToHome}>
              <ComingSoon pageName="Admin Dashboard" />
            </Admin>
          }
        />
        <Route 
          path="/admin/layout-assist"
          element={
            <Admin navigateToHome={navigateToHome}>
              <LayoutAssist />
            </Admin>
          }
        />
        <Route 
          path="/admin/create-zone"
          element={
            <Admin navigateToHome={navigateToHome}>
              <CreateZone />
            </Admin>
          }
        />

      </Routes>
  );
}

export default App;
