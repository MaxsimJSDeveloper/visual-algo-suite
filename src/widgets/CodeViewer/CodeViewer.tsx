import { useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import py from "react-syntax-highlighter/dist/esm/languages/prism/python";
import csharp from "react-syntax-highlighter/dist/esm/languages/prism/csharp";

import type { CodeLanguage } from "@/shared/lib/algoEngine/types";

SyntaxHighlighter.registerLanguage("python", py);
SyntaxHighlighter.registerLanguage("csharp", csharp);

interface CodeViewerProps {
  snippets?: Partial<Record<CodeLanguage, string>>;
}

const LANGUAGE_LABELS: Record<CodeLanguage, string> = {
  python: "Python",
  csharp: "C#",
};

const CodeViewer = ({ snippets }: CodeViewerProps) => {
  const availableLangs = Object.keys(snippets || {}) as CodeLanguage[];

  const [activeLang, setActiveLang] = useState<CodeLanguage>(
    availableLangs[0] || "python",
  );

  if (!snippets || availableLangs.length === 0) return null;

  return (
    <div className="w-full mt-8 rounded-xl overflow-hidden border border-slate-700/50 bg-[#1E1E1E]">
      <div className="flex bg-slate-800/80 border-b border-slate-700/50">
        {availableLangs.map((lang) => (
          <button
            key={lang}
            onClick={() => setActiveLang(lang)}
            className={`px-4 py-3 text-sm font-medium transition-colors ${
              activeLang === lang
                ? "bg-[#1E1E1E] text-brand-accent border-b-2 border-brand-accent"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/50"
            }`}
          >
            {LANGUAGE_LABELS[lang]}
          </button>
        ))}
      </div>

      <div className="p-4 overflow-x-auto overflow-y-auto text-sm h-[400px] sm:h-[450px]">
        <SyntaxHighlighter
          language={activeLang}
          style={vscDarkPlus}
          customStyle={{ margin: 0, background: "transparent" }}
        >
          {snippets[activeLang] || "// Code not available"}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeViewer;
