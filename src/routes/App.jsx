import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import FetchItems from "../components/fetchingItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/loadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
