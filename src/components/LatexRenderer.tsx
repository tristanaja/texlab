import React, { useRef, useEffect, useState, useCallback } from 'react';
import katex from 'katex';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface LatexRendererProps {
  latex: string;
}

const LatexRenderer = React.forwardRef<HTMLDivElement, LatexRendererProps>(({ latex }, ref) => {
  const internalRef = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(ref, () => internalRef.current as HTMLDivElement);

  const [currentFontSize, setCurrentFontSize] = useState<string | undefined>(undefined);
  const baseFontSizeRef = useRef<number | null>(null);

  // Function to adjust the font size based on content overflow
  const adjustFontSize = useCallback(() => {
    if (!internalRef.current) return;

    const container = internalRef.current;

    // Ensure baseFontSizeRef is set
    if (baseFontSizeRef.current === null) {
      const computedStyle = window.getComputedStyle(container);
      baseFontSizeRef.current = parseFloat(computedStyle.fontSize);
      setCurrentFontSize(`${baseFontSizeRef.current}px`);
    }

    // Temporarily reset font size to base for accurate measurement
    container.style.fontSize = `${baseFontSizeRef.current}px`;

    // KaTeX renders its output inside a div with class 'katex'
    const katexOutput = container.querySelector('.katex');

    if (katexOutput) {
      const contentWidth = katexOutput.scrollWidth; // Natural width of the rendered content
      const containerWidth = container.clientWidth; // Available width of the container

      if (contentWidth > containerWidth) {
        let newFontSize = (containerWidth / contentWidth) * baseFontSizeRef.current;
        const minFontSize = 12; // Define a minimum font size in pixels

        // Ensure the new font size doesn't go below the minimum
        if (newFontSize < minFontSize) {
          newFontSize = minFontSize;
        }
        setCurrentFontSize(`${newFontSize}px`);
      } else {
        setCurrentFontSize(`${baseFontSizeRef.current}px`); // Reset to original size if content fits
      }
    }
  }, []); // useCallback ensures this function reference is stable

  useEffect(() => {
    if (internalRef.current) {
      // Clear previous content
      internalRef.current.innerHTML = '';

      // Render KaTeX into the div
      try {
        katex.render(latex, internalRef.current, {
          throwOnError: false,
          displayMode: true, // Use display mode for block equations
        });

        // Adjust font size immediately after rendering to fit content
        adjustFontSize();

      } catch (error) {
        if (error instanceof Error) {
          internalRef.current.innerText = `Error rendering LaTeX: ${error.message}`;
          setCurrentFontSize(`${baseFontSizeRef.current || 24}px`); // Use base or default if error
        }
      }
    }
  }, [latex, adjustFontSize]); // Re-run when latex input changes or adjustFontSize function changes

  // Add a resize event listener to re-adjust font size when the window size changes
  useEffect(() => {
    window.addEventListener('resize', adjustFontSize);
    return () => {
      window.removeEventListener('resize', adjustFontSize);
    };
  }, [adjustFontSize]); // Listener is added/removed only when adjustFontSize changes

  return (
    <Card>
      <CardHeader>
        <CardTitle>Rendered Output</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <div
          ref={internalRef}
          className="p-4 sm:p-2 text-2xl sm:text-xl"
          style={{
            fontSize: currentFontSize,
            overflowX: 'scroll', // Hide horizontal overflow if font size isn't enough
            maxWidth: '100%', // Ensure it doesn't exceed container width initially
            margin: '0 auto', // Explicitly center the element horizontally
          }}
        ></div>
      </CardContent>
    </Card>
  );
});

export default LatexRenderer;
