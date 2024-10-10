// src/utils/palettes.ts

import { ColorPalette } from "../types";

export const VIBRANT_PALETTE: ColorPalette = {
  name: 'Vibrant',
  colors: {
    'Key Partners': '#FF6B6B',
    'Key Activities': '#4ECDC4',
    'Value Propositions': '#45B7D1',
    'Customer Relationships': '#FFA07A',
    'Customer Segments': '#98D8C8',
    'Key Resources': '#F7DC6F',
    'Channels': '#82E0AA',
    'Cost Structure': '#D7BDE2',
    'Revenue Streams': '#FAD7A0',
    'Problem': '#FF6B6B',
    'Solution': '#4ECDC4',
    'Unique Value Proposition': '#45B7D1',
    'Unfair Advantage': '#FFA07A',
    'Key Metrics': '#F7DC6F',
  }
};
export const EARTHY_PALETTE: ColorPalette = {
  name: 'Earthy',
  colors: {
    'Key Partners': '#9B7653',
    'Key Activities': '#5D8C54',
    'Value Propositions': '#78A48D',
    'Customer Relationships': '#B08968',
    'Customer Segments': '#7F9B83',
    'Key Resources': '#C1A26B',
    'Channels': '#6F935F',
    'Cost Structure': '#9F8C7C',
    'Revenue Streams': '#D3B483',
    'Problem': '#9B7653',
    'Solution': '#5D8C54',
    'Unique Value Proposition': '#78A48D',
    'Unfair Advantage': '#B08968',
    'Key Metrics': '#C1A26B',
  }
};
export const PASTEL_PALETTE: ColorPalette = {
  name: 'Pastel',
  colors: {
    'Key Partners': '#F7CAC9',
    'Key Activities': '#A0E8B7',
    'Value Propositions': '#B7E4F7',
    'Customer Relationships': '#F4D4E4',
    'Customer Segments': '#C0D8C1',
    'Key Resources': '#F6E7B3',
    'Channels': '#AED6F1',
    'Cost Structure': '#EBD2CE',
    'Revenue Streams': '#F8E0B9',
    'Problem': '#F7CAC9',
    'Solution': '#A0E8B7',
    'Unique Value Proposition': '#B7E4F7',
    'Unfair Advantage': '#F4D4E4',
    'Key Metrics': '#F6E7B3',
  }
};
export const MUTED_PALETTE: ColorPalette = {
  name: 'Muted',
  colors: {
    'Key Partners': '#7F8C8D',
    'Key Activities': '#52BE80',
    'Value Propositions': '#5DADE2',
    'Customer Relationships': '#BB8FCE',
    'Customer Segments': '#82E6E6',
    'Key Resources': '#F4D03F',
    'Channels': '#76D7C4',
    'Cost Structure': '#D5D8DC',
    'Revenue Streams': '#F4B350',
    'Problem': '#7F8C8D',
    'Solution': '#52BE80',
    'Unique Value Proposition': '#5DADE2',
    'Unfair Advantage': '#BB8FCE',
    'Key Metrics': '#F4D03F',
  }
};
export const SUNRISE_PALETTE: ColorPalette = {
  name: 'Sunrise',
  colors: {
    // Left side (Key Partners, Key Activities, Key Resources)
    'Key Partners': '#FFA500',
    'Key Activities': '#FFD700',
    'Key Resources': '#F4D03F',
    // Top (Value Propositions, Channels)
    'Value Propositions': '#FF6B6B',
    'Channels': '#FF8C00',
    // Right side (Customer Relationships, Customer Segments, Revenue Streams)
    'Customer Relationships': '#FFA07A',
    'Customer Segments': '#FFBF00',
    'Revenue Streams': '#F7DC6F',
    // Bottom (Cost Structure, Problem, Solution, Unique Value Proposition, Unfair Advantage, Key Metrics)
    'Cost Structure': '#8B4513',
    'Problem': '#FF6B6B',
    'Solution': '#4ECDC4',
    'Unique Value Proposition': '#45B7D1',
    'Unfair Advantage': '#FFA07A',
    'Key Metrics': '#F7DC6F',
  }
};
export const OCEANIC_PALETTE: ColorPalette = {
  name: 'Oceanic',
  colors: {
    // Left side (Key Partners, Key Activities, Key Resources)
    'Key Partners': '#00BFFF',
    'Key Activities': '#00CED1',
    'Key Resources': '#00FA9A',
    // Top (Value Propositions, Channels)
    'Value Propositions': '#1E90FF',
    'Channels': '#00FFFF',
    // Right side (Customer Relationships, Customer Segments, Revenue Streams)
    'Customer Relationships': '#87CEEB',
    'Customer Segments': '#00BFFF',
    'Revenue Streams': '#00FA9A',
    // Bottom (Cost Structure, Problem, Solution, Unique Value Proposition, Unfair Advantage, Key Metrics)
    'Cost Structure': '#00008B',
    'Problem': '#1E90FF',
    'Solution': '#00CED1',
    'Unique Value Proposition': '#00BFFF',
    'Unfair Advantage': '#87CEEB',
    'Key Metrics': '#00FA9A',
  }
};
export const AUTUMN_PALETTE: ColorPalette = {
  name: 'Autumn',
  colors: {
    // Left side (Key Partners, Key Activities, Key Resources)
    'Key Partners': '#8B4513',
    'Key Activities': '#CD853F',
    'Key Resources': '#D2B48C',
    // Top (Value Propositions, Channels)
    'Value Propositions': '#B22222',
    'Channels': '#FF8C00',
    // Right side (Customer Relationships, Customer Segments, Revenue Streams)
    'Customer Relationships': '#CD5C5C',
    'Customer Segments': '#A0522D',
    'Revenue Streams': '#D2B48C',
    // Bottom (Cost Structure, Problem, Solution, Unique Value Proposition, Unfair Advantage, Key Metrics)
    'Cost Structure': '#8B0000',
    'Problem': '#B22222',
    'Solution': '#CD853F',
    'Unique Value Proposition': '#A0522D',
    'Unfair Advantage': '#CD5C5C',
    'Key Metrics': '#D2B48C',
  }
};

export const DEFAULT_PALETTES: ColorPalette[] = [
  VIBRANT_PALETTE,
  EARTHY_PALETTE,
  PASTEL_PALETTE,
  MUTED_PALETTE,
  SUNRISE_PALETTE,
  OCEANIC_PALETTE,
  AUTUMN_PALETTE,
  // Añade aquí otras paletas si las tienes
];