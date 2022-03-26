import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import styles from '../../styles/Home.module.scss'

function printDocument({propsToPass}) {
      const yourName = propsToPass[0]
      const id = propsToPass[1]
      const input = document.getElementById(id);
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

const PrintBtn = (propsToPass) => {

    return <button className={styles.btns} onClick={()=> printDocument(propsToPass)} >Export to PDF</button>
}

export {printDocument, PrintBtn}