import React, { useEffect } from 'react';
import katex from 'katex';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface LatexRendererProps {
  latex: string;
}

const LatexRenderer = React.forwardRef<HTMLDivElement, LatexRendererProps>(({ latex }, ref) => {
  const internalRef = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(ref, () => internalRef.current as HTMLDivElement);

  useEffect(() => {
    if (internalRef.current) {
      try {
        katex.render(latex, internalRef.current, {
          throwOnError: false,
          displayMode: true,
        });
      } catch (error) {
        if (error instanceof Error) {
          internalRef.current.innerText = `Error rendering LaTeX: ${error.message}`;
        }
      }
    }
  }, [latex]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Rendered Output</CardTitle>
      </CardHeader>
      <CardContent>
        <div ref={internalRef} className="p-4 sm:p-2 text-xl md:text-2xl text-center"></div>
      </CardContent>
    </Card>
  );
});

export default LatexRenderer;
