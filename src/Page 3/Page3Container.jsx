import MiddleLineLogo from "../pages/Middle-line/MiddleLineLogo";
import Cards from "./Cards/Cards";
import CheckBox from "./Check Box/CheckBox";
import Form from "./Form/Form";
import HeroSection from "./Hero Section/HeroSection";
import PostCode from "./Post Code/PostCode";
import SingleBox from "./SingleBox/SingleBox";
import TownDropdown from "./Town Dropdown/TownDropdown";

function Page3Container() {
  return (
    <div>
      <HeroSection />
      <Cards />
      <MiddleLineLogo />
      <SingleBox />
      <TownDropdown />
      <PostCode />
      <CheckBox />
      <Form />
    </div>
  )
}
export default Page3Container;