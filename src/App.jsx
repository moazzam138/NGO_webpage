import Home from "./pages/Home";
import VolunteerForm from "./pages/VolunteerForm";
import Donate from "./pages/Donate";

function App() {
  const path = typeof window !== "undefined" ? window.location.pathname : "/";

  if (path === "/volunteer") {
    return <VolunteerForm />;
  }

  if (path === "/donate") {
    return <Donate />;
  }

  return <Home />;
}

export default App;