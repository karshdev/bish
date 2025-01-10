import BookingUI from "./BookingUI/BookingUI";
import Card from "./Cards/Card";
import CheckPrice from "./CheckPrice/CheckPrice";
import Faq from "./Faq/Faq";
import FeatureGrid2 from "./FeatureGrid2/FeatureGrid2";
import Footer from "./Footer/Footer";
import FeatureGrid from "./FourBoxes/FeatureGrid";
import Homepage from "./Hompage";
import MiddleLineLogo from "./Middle-line/MiddleLineLogo";
import Yellowbox from "./YellowBox/Yellowbox";

function Page1Container() {
  return (
    <div>
      <Homepage />
      <Card />
      <MiddleLineLogo />
      <BookingUI />
      <MiddleLineLogo />
      <FeatureGrid />
      <MiddleLineLogo />
      <FeatureGrid2 />
      <CheckPrice />
      <Yellowbox />
      <Faq />
      <Footer />
    </div>
  )
}
export default Page1Container;