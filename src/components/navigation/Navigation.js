import {NavigationDesktop} from "./navigationdesktop/NavigationDesktop"; 
import { NavigationMobile } from "./navigationmobile/NavigationMobile";

export const Navigation = () => {
    const mobileScreen = false; 
    return mobileScreen ? <NavigationMobile/>:<NavigationDesktop/>; 
}; 