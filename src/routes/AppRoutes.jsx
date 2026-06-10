import { Routes, Route } from "react-router-dom";

import IntroPage from "../pages/IntroPage";
import ProposalPage from "../pages/ProposalPage";
import CelebrationPage from "../pages/CelebrationPage";
import MeetPage from "../pages/MeetPage";
import DateTimePage from "../pages/DateTimePage";
import LocationPage from "../pages/LocationPage";
import FoodPage from "../pages/FoodPage";
import SummaryPage from "../pages/SummaryPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />

      <Route
        path="/proposal"
        element={<ProposalPage />}
      />

      <Route
        path="/celebration"
        element={<CelebrationPage />}
      />

      <Route
        path="/meet"
        element={<MeetPage />}
      />

      <Route
        path="/datetime"
        element={<DateTimePage />}
      />

      <Route
        path="/location"
        element={<LocationPage />}
      />

      <Route
        path="/food"
        element={<FoodPage />}
      />

      <Route
        path="/summary"
        element={<SummaryPage />}
      />
    </Routes>
  );
};

export default AppRoutes;