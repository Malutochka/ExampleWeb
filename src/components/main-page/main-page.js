import './main-page.css';
import Header from "../Header/Header";
import Catalog from "../Catalog/Catalog";
import Footer from "../Footer/Footer";
import Categories from "../Categories/Categories";
const MainPage = () => {
    return (
      <div className="container">
          <Header />
          <Categories />
          <Catalog />
          <Footer />
      </div>
    );
}

export default MainPage;