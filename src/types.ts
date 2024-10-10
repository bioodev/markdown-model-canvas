export interface TemplateField {
  name: string;
  placeholder: string;
  gridArea?: string;
}
export interface Template {
  name: string;
  gridTemplate?: string;
  fields: TemplateField[];
}
export interface ColorPalette {
  name: string;
  colors: { [key: string]: string };
}
export const defaultPalettes: ColorPalette[] = [
  {
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
  }
  // Add more palettes here...
];