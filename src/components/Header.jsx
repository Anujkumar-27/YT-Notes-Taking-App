import { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { usePlayer } from "../contexts/PlayerContext";
import { validVideoId } from "../helpers/validateYTVidId";
import Button from "./Button";
import toast from "react-hot-toast";

function Header() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const [input, setInput] = useState("");
  const { setVidId } = usePlayer();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let videoId = input;
    const urlPattern = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = input.match(urlPattern);
    if (match) {
      videoId = match[1];
    }
    if (!(await validVideoId(videoId)))
      return toast.error("Enter a valid YouTube Video ID or URL!!");
    setVidId(videoId);
  };

  return (
    <header className="sm:flex items-center justify-between mx-10 my-10 p-1">
      <h1 className="text-lg font-semibold md:text-3xl sm:text-xl">
        YouTube Notes Taking App📓
      </h1>
      
      <div className="w-full sm:w-1/3">
        <form
          className="w-full flex justify-between items-center shadow-gray-400 shadow-md"
          onSubmit={handleSubmit}>
            
          <input
            type="text"
            className="w-full bg-transparent  outline-none shadow-inner shadow-gray-400 px-2 py-0.5"
            placeholder="Enter YouTube Video ID"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="text-3xl">
            <IoIosSearch />
          </button>
        </form>
        <h6 className="text-xs w-full font-medium mt-2">
          Example Of Video ID: youtube.com/watch?v=<span className="text-rose-500 font-medium">Ez8F0nW6S-w</span>
          &t=539s&ab
        </h6>
        
      </div>
      <Button
          onClick={() => setDarkMode(!darkMode)}
          className=" p-2 bg-black text-white rounded"
        >
        {darkMode ? "Light" : "Dark"} Mode
        </Button>
    </header>
  );
}
export default Header;