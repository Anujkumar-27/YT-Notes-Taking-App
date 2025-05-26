import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import YoutubeVideo from "./components/YoutubeVideo";
import { NotesProvider } from "./contexts/NotesContext";
import { PlayerProvider } from "./contexts/PlayerContext";
import Notes from "./notes/Notes";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import AuthProvider, { AuthContext } from "./contexts/AuthProvider";

function App() {
  
  const [user, setUser] = useState(null);
  const handleLogin = (user) => {
    setUser(user);
  };
  return (
    <AuthProvider>
      {user ? (
        <PlayerProvider>
          <NotesProvider>
            <Header />
            <div className="flex flex-col md:flex-row justify-between">
              <div className="w-full md:w-1/2">
                <YoutubeVideo />
              </div>
              <div className="w-full md:w-1/2">
                <Notes />
              </div>
            </div>
            <Toaster position="bottom-center" />
          </NotesProvider>
        </PlayerProvider>
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </AuthProvider>
  );
}

export default App;
