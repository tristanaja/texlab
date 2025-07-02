import React from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  return (
    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
      <code>{children}</code>
    </pre>
  );
};

export default CodeBlock;
