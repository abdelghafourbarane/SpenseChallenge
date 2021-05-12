import "./App.css";

import Offer from "./components/offer/Offer.component";
import MenuBar from "./components/menu/Menu.component";
import MainContainer from "./components/main-container/mainContainer.component";
import BrandList from "./components/brands-list/brandList.component";
import SecurityAds from "./components/security-ads/securityAds.component";
import TextEdirtorContainer from "./components/textEditor/textEditor.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App ui ">
      <Offer />
      <MenuBar />
      <MainContainer />
      <BrandList />
      <SecurityAds />
      <TextEdirtorContainer />
      <Footer />
    </div>
  );
}

export default App;
