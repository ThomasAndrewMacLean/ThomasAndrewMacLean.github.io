import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

document.getElementById('dwnbtn').addEventListener('click',() => {

    html2canvas(document.body).then(canvas => {

        console.log('DOWNLOAD');
        
        const img= canvas.toDataURL('image/png')
        const doc = new jsPDF();
    
   //     doc.fromHTML(document.body)
    doc.addImage(img, 'PNG', 0,0)
        doc.save('cvThomas.pdf')

    })

});