import React from "react";
import SocialNetworkBlock from "../../components/SocialNetworkBlock/SocialNetworkBlock";

const AboutUs = () => {
  //const [width, setWidth] = useState(window.innerWidth);

  //useEffect(() => {
  //   const handleResize = (event) => {
  //     setWidth(event.target.innerWidth);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  return (
    <div>
      AboutUs
      <SocialNetworkBlock />
    </div>
  );
};

export default AboutUs;
