import React, { useState } from 'react';

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  function handleCopyText() {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button onClick={handleCopyText}>{copied ? 'Copied!' : 'Copy text'}</button>
  );
}

export default CopyButton;
