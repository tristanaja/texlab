import React, { useRef, useEffect } from 'react';
import katex from 'katex';

interface DocLatexRendererProps {
  latex: string;
}

const DocLatexRenderer: React.FC<DocLatexRendererProps> = ({ latex }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(latex, containerRef.current, {
          throwOnError: false,
          displayMode: false,
        });
      } catch (error) {
        if (error instanceof Error) {
          containerRef.current.innerText = `Error: ${error.message}`;
        }
      }
    }
  }, [latex]);

  return <div ref={containerRef} className="p-2"></div>;
};

export default DocLatexRenderer;
