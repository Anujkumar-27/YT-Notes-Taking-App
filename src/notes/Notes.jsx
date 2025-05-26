import NotesHeading from "./NotesHeading";
import NotesList from "./NotesList";
import Button from "../components/Button";
import { downloadNotesAsPDF } from "../helpers/pdfHelper";
import { useNotes } from "../contexts/NotesContext";
import { usePlayer } from "../contexts/PlayerContext";


function Notes() {
  const { notes } = useNotes();
  const { player } = usePlayer();

  return (
    <section className="mx-10 my-5 p-5 rounded-2xl shadow-custom border-2 border-gray-200 divide-y-2">
      <NotesHeading />
      <NotesList />
      <div className="flex justify-center items-center p-5">
        <Button onClick={() =>
            downloadNotesAsPDF(player.getVideoData().title, player.getVideoData().video_id, notes)
          }
        >
          Download Notes as PDF
        </Button>
      </div>
    </section>
  );
}

export default Notes;
