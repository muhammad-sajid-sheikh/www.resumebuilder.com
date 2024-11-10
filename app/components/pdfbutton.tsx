
import jsPDF from "jspdf"
import html2canvas from "html2canvas"


interface PDFButtonProps {
  targetElementId: string; // The ID of the element you want to capture for the PDF
}

const PDFButton: React.FC<PDFButtonProps> = ({ targetElementId }) => {
  const handleDownloadPDF = async () => {
    const element = document.getElementById(targetElementId);
    if (element) {
      const canvas = await html2canvas(element, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 190; // width in mm for an A4 PDF
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let position = 0;
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);

      // If content overflows, add pages
      if (imgHeight > pageHeight) {
        let remainingHeight = imgHeight;
        while (remainingHeight > 0) {
          position -= pageHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
          remainingHeight -= pageHeight;
        }
      }

      pdf.save('Resume.pdf');
    }
  };

  return (
    <div className="flex items-center justify-center pt-8 pb-8" style={{ backgroundImage: "url('/images/bgnew.png')" }}>
      <button
        onClick={handleDownloadPDF}
        className="bg-gradient-to-r from-[#4FB6D8] to-[#06536C] text-black w-[200px] h-[45px] md:w-[262px] md:h-[55px] text-lg md:text-2xl border border-gray-900 rounded-full md:rounded-[41px] font-bold"
      >
        Save as PDF
      </button>
    </div>
  );
};

export default PDFButton