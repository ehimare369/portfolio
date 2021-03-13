import { BrowserRouter as Router, Switch } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout/HomeLayout";
import PageLayout from "./layout/PageLayout/PageLayout";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import "./App.scss";

const App = () => (
  <Router>
    <Switch>
      <HomeLayout exact path="/" component={HomePage} />
      <PageLayout
        exact
        path="/about"
        component={AboutPage}
        title="Rendering from App"
      />
      <PageLayout exact path="/portfolio" component={PortfolioPage} />
      <PageLayout exact path="/blog" component={BlogPage} />
      <PageLayout exact path="/contact" component={ContactPage} />
      {/* <PageLayout component={ErrorPage} /> */}
    </Switch>
  </Router>
);

export default App;
