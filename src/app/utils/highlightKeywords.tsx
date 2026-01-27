import React from "react";

type HighlightedContent = React.ReactNode;

export const highlightKeywords = (text: string): HighlightedContent => {
  const keywordRegex = /\*\*(.*?)\*\*/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = keywordRegex.exec(text)) !== null) {
    // Add text before keyword
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    // Add highlighted keyword
    parts.push(
      <span key={match.index} className="text-[#E95278] font-semibold">
        {match[1]}
      </span>
    );

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};
