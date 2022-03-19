import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

function printDocument(yourName) {
      const input = document.getElementById('divToPrint');
      html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'mm', [400, 1210]
          //   {
          //   orientation: "portrait",
          //   unit: "in",
          //   format: [8.5 ,11]
          // }
          );
          pdf.addImage(imgData, 'JPEG', 0, 0);
          // pdf.output('dataurlnewwindow');
          // pdf.addHTML($('#resume'))
          pdf.save(`${yourName}-Resueme.pdf`);
        })
      ;
    }

const PrintBtn = ({yourName}) => {
    return <button onClick={()=> printDocument(yourName)} >Export to PDF</button>
}

export {printDocument, PrintBtn}