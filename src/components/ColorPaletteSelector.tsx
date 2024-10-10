
import React, { useState, useEffect } from "react";
import { ColorPalette } from "../types";
import { DEFAULT_PALETTES, VIBRANT_PALETTE } from "../utils/palettes";

interface ColorPaletteSelectorProps {
  onSelect: (palette: ColorPalette) => void;
}

const ColorPaletteSelector: React.FC<ColorPaletteSelectorProps> = ({
  onSelect,
}) => {
  const [palettes, setPalettes] = useState<ColorPalette[]>([]);
  const [selectedPaletteName, setSelectedPaletteName] = useState<string>("Vibrant");

  useEffect(() => {
    setPalettes(DEFAULT_PALETTES);
  
    const savedPalette = localStorage.getItem("selectedPalette");
    if (savedPalette) {
      const parsedPalette = JSON.parse(savedPalette) as ColorPalette;
      setSelectedPaletteName(parsedPalette.name);
      onSelect(parsedPalette);
    } else {
      // Si no hay paleta guardada, usa VIBRANT_PALETTE
      setSelectedPaletteName(VIBRANT_PALETTE.name);
      onSelect(VIBRANT_PALETTE);
      localStorage.setItem("selectedPalette", JSON.stringify(VIBRANT_PALETTE));
    }
  }, [onSelect]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = e.target.value;
    setSelectedPaletteName(selectedName);
    const selected = palettes.find((p) => p.name === selectedName);
    if (selected) {
      onSelect(selected);
      localStorage.setItem("selectedPalette", JSON.stringify(selected));
    } else {
      // If no palette is selected, use the first one
      const defaultPalette = palettes[0];
      setSelectedPaletteName(defaultPalette.name);
      onSelect(defaultPalette);
      localStorage.setItem("selectedPalette", JSON.stringify(defaultPalette));
    }
  };

  return (
    <select
      value={selectedPaletteName}
      onChange={handleChange}
      className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
    >
      <option value="">Select Color Palette</option>
      {palettes.map((palette) => (
        <option key={palette.name} value={palette.name}>
          {palette.name}
        </option>
      ))}
    </select>
  );
};

export default ColorPaletteSelector;
