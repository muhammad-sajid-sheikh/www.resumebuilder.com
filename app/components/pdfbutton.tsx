
import jsPDF from "jspdf"
import html2canvas from "html2canvas"
import dynamic from "next/dynamic";


interface PDFButtonProps {
  targetElementId: string; // The ID of the element you want to capture for the PDF
}

const PDFButton: React.FC<PDFButtonProps> = ({ targetElementId }) => {
  const handleDownloadPDF = async () => {
    const html2canvas = (await import('html2canvas')).default;
    const jsPDF = (await import('jspdf')).default;

    const element = document.getElementById(targetElementId);
    if (element) {
      const canvas = await html2canvas(element, { scale: 1 });
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, imgHeight > pdfHeight ? pdfHeight : imgHeight);
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