import { computed } from "@preact/signals-react";
import Navigation from "./navigation/navagtion";
import Translation from "./transltion-menu/translation";
import { settingSignal } from "../../globals/signal/signal-store";
import MobileNavBar from "./mobile-nav-bar/mobile-nav-bar";
import { useState } from "react";

// header  components hold the navigation adn  translation components in desktop and mobile.
// isMobile  get the  browser state from the setting signal 

const Header = () => {
  const isMobile = computed(() => settingSignal.value.isMobile);
  const  currentDirection = computed(() => settingSignal.value.direction);
  const [directionMode, setDirectionMode] = useState<"ltr" | "rtl">(currentDirection.value)
  const  changeDirection = ((dir: "ltr" | "rtl") => {
    settingSignal.value.direction=dir
    setDirectionMode(dir)
  })

  const renderLayout = (): React.ReactNode => {
    if (isMobile.value) {
      return <MobileNavBar />
    }

    return <Navigation />;
  };
 
  return <div className={`flex ${directionMode === "ltr"? "flex-row": "flex-row-reverse"}`}>
        {renderLayout()}
            <Translation changeDirection={changeDirection} />
        </div>;
};

export default Header;