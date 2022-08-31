import Routing from "../navigation/RouterConfig";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <div className="mainLayout">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default MainLayout;
