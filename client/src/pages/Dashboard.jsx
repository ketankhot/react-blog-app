import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSideBar from "../Components/DashSideBar";
import DashProfile from "../Components/DashProfile";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFormUrl = urlParams.get("tab");
    if (tabFormUrl) {
      setTab(tabFormUrl);
    }
  }, [location.search]);
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="md:w-56">
        {/* Side-Bar */}
        <DashSideBar />
      </div>
      {/* Profile */}
      {tab === "profile" && <DashProfile />}
    </div>
  );
}
