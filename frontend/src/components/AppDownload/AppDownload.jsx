import "./AppDownload.css";
import { assets } from "../../assets/assets";

function AppDownload() {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experiance Download <br /> Tomato App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="playstore picture" />
        <img src={assets.app_store} alt="appstore picture" />
      </div>
    </div>
  );
}

export default AppDownload;
