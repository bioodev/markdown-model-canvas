import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Template, ColorPalette } from "../types";

interface CanvasRendererProps {
  mdContent: string;
  template: Template | null;
  colorPalette: ColorPalette | null;
}

// CanvasRenderer.tsx

const CanvasRenderer: React.FC<CanvasRendererProps> = ({
  mdContent,
  template,
  colorPalette,
}) => {

  useEffect(() => {
    // Forzar re-render cuando cambie la paleta
  }, [colorPalette]);

  if (!template) {
    return (
      <div className="text-center text-gray-500">Please select a template</div>
    );
  }

  const sections = mdContent.split("---").map((section) => section.trim());

  const getFieldColor = (fieldName: string) => {
    if (!colorPalette || !colorPalette.colors) return "#ffffff";
    return colorPalette.colors[fieldName] || "#ffffff";
  };
  return (
    <div
      className="grid gap-4 p-4 h-full"
      style={{
        gridTemplateAreas: template.gridTemplate,
        gridTemplateColumns: "repeat(6, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
      }}
    >
      {template.fields.map((field, index) => (
        <div
          key={field.name}
          className="p-4 rounded-lg shadow transition-all duration-300 hover:shadow-lg overflow-auto flex flex-col"
          style={{
            gridArea: field.gridArea,
            backgroundColor: getFieldColor(field.name),
          }}
        >
          <h3 className="font-bold mb-2 text-gray-800 text-lg">{field.name}</h3>
          <ReactMarkdown className="text-sm text-gray-600 flex-grow">
            {sections[index] || field.placeholder}
          </ReactMarkdown>
        </div>
      ))}
    </div>
  );
};

export default CanvasRenderer;
