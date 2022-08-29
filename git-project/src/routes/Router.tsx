import { Route, Routes } from "react-router-dom";
import { SearchProfile } from "../pages/SearchProfile/SearchProfile";
import { UserProfile } from "../pages/UserProfile/UserProfile";



export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SearchProfile />} />
      <Route path="/profile/:repos" element={<UserProfile />} />
    </Routes>
  )
}