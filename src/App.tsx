import 'katex/dist/katex.min.css';
import './App.css';
import LatexRenderer from './components/LatexRenderer';
import InputForm from './components/InputForm';
import Documentation from './components/Documentation';
import { useState, useRef } from 'react';
import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';

function App() {
  const [latex, setLatex] = useState('E = mc^2');
  const renderedOutputRef = useRef<HTMLDivElement>(null);

  const handleDownloadPng = () => {
    if (renderedOutputRef.current) {
      toPng(renderedOutputRef.current)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = 'latex_render.png';
          link.href = dataUrl;
          link.click();
        });
    }
  };

  const handleDownloadPdf = () => {
    if (renderedOutputRef.current) {
      toPng(renderedOutputRef.current)
        .then((dataUrl) => {
          const pdf = new jsPDF();
          const width = pdf.internal.pageSize.getWidth();
          pdf.addImage(dataUrl, 'PNG', 10, 10, width - 20, 0);
          pdf.save('latex_render.pdf');
        });
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <header className="container mx-auto mt-5 p-2 md:p-4 flex flex-col justify-center items-center">
        <img src="/logo_f.svg" alt="TexLab" className='mb-2 p-0 w-42' />
        <p className="text-md md:text-lg font-normal">A simple LaTeX editor</p>
      </header>
      <main className="container mx-auto p-4 sm:p-2 space-y-4">
        <LatexRenderer latex={latex} ref={renderedOutputRef} />
        <InputForm
          setLatex={setLatex}
          latex={latex}
          onDownloadPng={handleDownloadPng}
          onDownloadPdf={handleDownloadPdf}
        />
      </main>
      <footer className="container mx-auto p-4">
        <Documentation />
      </footer>
    </div>
  );
}

export default App;