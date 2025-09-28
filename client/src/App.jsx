import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Feed from "./Pages/Feed";
import Messages from "./Pages/Messages";
import ChatBox from "./Pages/ChatBox";
import Connections from "./Pages/Connections";
import Profile from "./Pages/Profile";
import CreatePost from "./Pages/CreatePost";
import Discover from "./Pages/Discover";
import { useUser } from "@clerk/clerk-react";
import Layout from "./Pages/Layout";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { user } = useUser();

  return (
    <>
      <Toaster />
      <Routes>
        {/* If not logged in → show Login */}
        {!user ? (
          <Route path="/*" element={<Login />} />
        ) : (
          // All routes with Sidebar go inside Layout
          <Route path="/" element={<Layout />}>
            <Route index element={<Feed />} />
            <Route path="messages" element={<Messages />} />
            <Route path="messages/:userId" element={<ChatBox />} />
            <Route path="discover" element={<Discover />} />
            <Route path="connections" element={<Connections />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile/:userId" element={<Profile />} />
            <Route path="create-post" element={<CreatePost />} />
          </Route>
        )}
      </Routes>
    </>
  );
};

export default App;
