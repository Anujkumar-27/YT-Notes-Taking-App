import jsPDF from "jspdf";

export function downloadNotesAsPDF(videoTitle, videoId, notes) {
  const doc = new jsPDF();
  const lineHeight = 10;
  let yOffset = 30;

  doc.setFont("Helvetica", "bold").setFontSize(14); // Use bold ,size font for title
  doc.text(`YouTube Video Title: ${videoTitle}`, 10, 10);
  doc.text(`YouTube Video ID: ${videoId}`, 10, 20);

  notes.slice().reverse().forEach((note, index) => {
    const lines = doc.splitTextToSize(note.content, 180);
    doc.setFont("Helvetica", "normal").setFontSize(12); // Switch back to normal font and size for content
    doc.text(lines, 10, yOffset);
    yOffset += lines.length * lineHeight;
  });
  

  doc.save(`${videoTitle} notes.pdf`);
}

  