import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import CodeBlock from './CodeBlock';
import DocLatexRenderer from './DocLatexRenderer';

const Documentation: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Latex Syntax Documentation</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          LaTeX is a high-quality typesetting system; it includes features designed
          for the production of technical and scientific documentation. Here are some
          of the most common commands for mathematical expressions.
        </p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Basic Syntax</AccordionTrigger>
            <AccordionContent>
              <p>Inline math is enclosed in (...), and display math is enclosed in [...]</p>
              <CodeBlock>
                {`(x^2 + y^2 = z^2) vs [x^2 + y^2 = z^2]`}
              </CodeBlock>
              <DocLatexRenderer latex={`(x^2 + y^2 = z^2) vs  [x^2 + y^2 = z^2]`} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Superscripts & Subscripts</AccordionTrigger>
            <AccordionContent>
              <p>Use ^ for superscripts and _ for subscripts. Use {} for grouping.</p>
              <CodeBlock>{`x^2, x_1, x^{2a}, x_{1b}`}</CodeBlock>
              <DocLatexRenderer latex={`x^2, x_1, x^{2a}, x_{1b}`} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Fractions & Roots</AccordionTrigger>
            <AccordionContent>
              <p>{"Use frac{num}{den} for fractions, sqrt{x} for square roots, and sqrt[n]{x} for nth roots."}</p>
              <CodeBlock>{`\\frac{a}{b}, \\sqrt{x}, \\sqrt[n]{x}`}</CodeBlock>
              <DocLatexRenderer latex={`\\frac{a}{b}, \\sqrt{x}, \\sqrt[n]{x}`} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Greek Letters</AccordionTrigger>
            <AccordionContent>
              <p>Lowercase: \alpha, \beta, \gamma. Uppercase: \Alpha, \Beta, \Gamma.</p>
              <CodeBlock>{`\\alpha, \\beta, \\gamma, \\Alpha, \\Beta, \\Gamma`}</CodeBlock>
              <DocLatexRenderer latex={`\\alpha, \\beta, \\gamma, \\Alpha, \\Beta, \\Gamma`} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Operators</AccordionTrigger>
            <AccordionContent>
              <p>Common operators: \pm, \times, \div, \leq, \geq, \neq.</p>
              <CodeBlock>{`\\pm, \\times, \\div, \\leq, \\geq, \\neq`}</CodeBlock>
              <DocLatexRenderer latex={`\\pm, \\times, \\div, \\leq, \\geq, \\neq`} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Summations & Integrals</AccordionTrigger>
            <AccordionContent>
              <p>Use \sum for summations and \int for integrals. Use _ and ^ for limits.</p>
              <CodeBlock>{`\\sum_{i=1}^n i^2, \\int_0^\\infty e^{-x} dx`}</CodeBlock>
              <DocLatexRenderer latex={`\\sum_{i=1}^n i^2, \\int_0^\\infty e^{-x} dx`} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Matrices</AccordionTrigger>
            <AccordionContent>
              <p>Use the matrix environment. Use & to separate columns and \ to separate rows.</p>
              <CodeBlock>{`\\begin{matrix} a & b \\ c & d \\end{matrix}`}</CodeBlock>
              <DocLatexRenderer latex={`\\begin{matrix} a & b \\ c & d \\end{matrix}`} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default Documentation;