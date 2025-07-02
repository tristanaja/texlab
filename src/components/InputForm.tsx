import { useEffect } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';

interface InputFormProps {
  setLatexInput: (latex: string) => void;
  latexInput: string;
  onDownloadPng: () => void;
  onDownloadPdf: () => void;
}

const InputForm: React.FC<InputFormProps> = ({
  setLatexInput,
  latexInput,
  onDownloadPng,
  onDownloadPdf,
}) => {

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(latexInput);
  };

  const handleClear = () => {
    setLatexInput('');
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'Enter') {
        // No longer needed for real-time rendering
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [latexInput]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>LaTeX Input</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          value={latexInput}
          onChange={(e) => setLatexInput(e.target.value)}
          placeholder="Enter your LaTeX math here..."
        />
      </CardContent>
      <CardFooter className="flex flex-wrap justify-end gap-2">
        <Button onClick={handleClear} variant="destructive">Clear</Button>
        <Button onClick={handleCopyToClipboard} variant="outline">Copy LaTeX</Button>
        <Button onClick={onDownloadPng} variant="outline">Download PNG</Button>
        <Button onClick={onDownloadPdf} variant="outline">Download PDF</Button>
      </CardFooter>
    </Card>
  );
};

export default InputForm;