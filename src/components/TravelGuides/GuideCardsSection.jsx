import React from "react";
import TravelGuideBox from "./TravelGuideBox";
import travelGuides from "./travelGuide";
function GuideCardsSection() {
  return (
    <div className="row g-4">
      {/* Planning Guide */}
      <TravelGuideBox
        image={travelGuides[0].image}
        alt={travelGuides[0].alt}
        heading={travelGuides[0].heading}
        cardText1={travelGuides[0].cardText1}
        cardText2={travelGuides[0].cardText2}
      />

      {/* Culture Guide */}
      <TravelGuideBox
        image={travelGuides[1].image}
        alt={travelGuides[1].alt}
        heading={travelGuides[1].heading}
        cardText1={travelGuides[1].cardText1}
        cardText2={travelGuides[1].cardText2}
      />

      {/* Safety Guide */}
      <TravelGuideBox
        image={travelGuides[2].image}
        alt={travelGuides[2].alt}
        heading={travelGuides[2].heading}
        cardText1={travelGuides[2].cardText1}
        cardText2={travelGuides[2].cardText2}
      />
    </div>
  );
}

export default GuideCardsSection;
