import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';

interface InputFormProps {
  setLatex: (latex: string) => void;
  latex: string;
  onDownloadPng: () => void;
  onDownloadPdf: () => void;
}

const InputForm: React.FC<InputFormProps> = ({
  setLatex,
  latex,
  onDownloadPng,
  onDownloadPdf,
}) => {
  const [input, setInput] = useState(latex);

  const handleRender = () => {
    setLatex(input);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(latex);
  };

  const handleClear = () => {
    setInput('');
    setLatex('');
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'Enter') {
        handleRender();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [input]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>LaTeX Input</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your LaTeX math here..."
        />
      </CardContent>
      <CardFooter className="flex flex-wrap justify-end gap-2">
        <Button onClick={handleClear} variant="destructive">Clear</Button>
        <Button onClick={handleCopyToClipboard} variant="outline">Copy LaTeX</Button>
        <Button onClick={onDownloadPng} variant="outline">Download PNG</Button>
        <Button onClick={onDownloadPdf} variant="outline">Download PDF</Button>
        <Button onClick={handleRender}>Render</Button>
      </CardFooter>
    </Card>
  );
};

export default InputForm;