import React, { useState, useEffect } from "react";
import { Template } from "../types";
import { DEFAULT_TEMPLATES } from "../utils/templates";

interface TemplateSelectorProps {
  onSelect: (template: Template) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ onSelect }) => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [selectedTemplateName, setSelectedTemplateName] = useState<string>("");

  useEffect(() => {
    setTemplates(DEFAULT_TEMPLATES);

    const savedTemplate = localStorage.getItem("selectedTemplate");
    if (savedTemplate) {
      const parsedTemplate = JSON.parse(savedTemplate) as Template;
      setSelectedTemplateName(parsedTemplate.name);
      onSelect(parsedTemplate);
    }
  }, [onSelect]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = e.target.value;
    setSelectedTemplateName(selectedName);
    const selected = templates.find((t) => t.name === selectedName);
    if (selected) onSelect(selected);
  };

  return (
    <select
      value={selectedTemplateName}
      onChange={handleChange}
      className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
    >
      <option value="">Select Template</option>
      {templates.map((template) => (
        <option key={template.name} value={template.name}>
          {template.name}
        </option>
      ))}
    </select>
  );
};

export default TemplateSelector;
