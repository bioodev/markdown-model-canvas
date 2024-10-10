import React, { useState, useCallback } from "react";
import Editor from "@monaco-editor/react";
import { Upload, Download } from "lucide-react";
import CanvasRenderer from "./components/CanvasRenderer";
import TemplateSelector from "./components/TemplateSelector";
import ColorPaletteSelector from "./components/ColorPaletteSelector";
import { Template, ColorPalette } from "./types";
import { VIBRANT_PALETTE } from "./utils/palettes";
import { DEFAULT_TEMPLATES } from "./utils/templates";

function App() {
  const [mdContent, setmdContent] = useState<string>(
    () => localStorage.getItem("mdContent") || ""
  );

  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    () => {
      const saved = localStorage.getItem("selectedTemplate");
      return saved ? JSON.parse(saved) : DEFAULT_TEMPLATES[0];
    }
  );

  const [selectedPalette, setSelectedPalette] = useState<ColorPalette>(() => {
    const saved = localStorage.getItem("selectedPalette");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.colors) {
        return parsed;
      }
    }
    return VIBRANT_PALETTE;
  });

  const handleEditorChange = useCallback((value: string | undefined) => {
    if (value !== undefined) {
      setmdContent(value);
      localStorage.setItem("mdContent", value);
    }
  }, []);

  const handleFileUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result as string;
          handleEditorChange(content);
        };
        reader.readAsText(file);
      }
    },
    [handleEditorChange]
  );

  const handleFileDownload = useCallback(() => {
    const blob = new Blob([mdContent], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "canvas-model.md";
    a.click();
    URL.revokeObjectURL(url);
  }, [mdContent]);

  const handleTemplateSelect = useCallback((template: Template) => {
    setSelectedTemplate(template);
    localStorage.setItem("selectedTemplate", JSON.stringify(template));

    const initialContent = template.fields
      .map((field) => `# ${field.name}\n\n${field.placeholder}\n\n`)
      .join("---\n\n");

    setmdContent(initialContent);
    localStorage.setItem("mdContent", initialContent);
  }, []);

  const handlePaletteSelect = useCallback((palette: ColorPalette) => {
    setSelectedPalette(palette);
    localStorage.setItem("selectedPalette", JSON.stringify(palette));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Markdown Canvas Model Editor
          </h1>
          <div className="flex space-x-4">
            <button
              onClick={() => document.getElementById("file-upload")?.click()}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Upload className="h-5 w-5 mr-2" />
              Upload
            </button>
            <input
              id="file-upload"
              type="file"
              accept=".mdx,.md"
              onChange={handleFileUpload}
              className="hidden"
            />
            <button
              onClick={handleFileDownload}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              <Download className="h-5 w-5 mr-2" />
              Download
            </button>
            <TemplateSelector onSelect={handleTemplateSelect} />
            <ColorPaletteSelector onSelect={handlePaletteSelect} />
          </div>
        </div>
      </header>
      <main className="flex-grow flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 p-4 h-[calc(100vh-70px)]">
          {/* Ajusta la altura según el tamaño de tu header */}
          <Editor
            height="100%"
            defaultLanguage="markdown"
            value={mdContent}
            onChange={handleEditorChange}
            options={{
              minimap: { enabled: false },
              wordWrap: "on",
            }}
          />
        </div>
        <div className="w-full md:w-2/3 p-4 h-[calc(100vh-70px)]">
          {/* Ajusta la altura según el tamaño de tu header */}
          <CanvasRenderer
            mdContent={mdContent}
            template={selectedTemplate}
            colorPalette={selectedPalette}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
