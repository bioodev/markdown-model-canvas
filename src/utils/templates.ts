// src/utils/templates.ts

import { Template } from "../types";

export const BUSINESS_MODEL_CANVAS: Template = {
  name: "Business Model Canvas",
  gridTemplate: `
    "partners activities value_prop value_prop relationships segments"
    "partners resources value_prop value_prop channels segments"
    "cost_structure cost_structure cost_structure revenue_streams revenue_streams revenue_streams"
  `,
  fields: [
    {
      name: "Customer Segments",
      placeholder: "For whom are we creating value?",
      gridArea: "segments",
    },
    {
      name: "Value Propositions",
      placeholder: "What value do we deliver to the customer?",
      gridArea: "value_prop",
    },
    {
      name: "Channels",
      placeholder:
        "Through which Channels do our Customer Segments want to be reached?",
      gridArea: "channels",
    },
    {
      name: "Customer Relationships",
      placeholder:
        "What type of relationship does each of our Customer Segments expect us to establish?",
      gridArea: "relationships",
    },
    {
      name: "Revenue Streams",
      placeholder: "For what value are our customers really willing to pay?",
      gridArea: "revenue_streams",
    },
    {
      name: "Key Resources",
      placeholder: "What Key Resources do our Value Propositions require?",
      gridArea: "resources",
    },
    {
      name: "Key Activities",
      placeholder: "What Key Activities do our Value Propositions require?",
      gridArea: "activities",
    },
    {
      name: "Key Partners",
      placeholder: "Who are our Key Partners?",
      gridArea: "partners",
    },
    {
      name: "Cost Structure",
      placeholder:
        "What are the most important costs inherent in our business model?",
      gridArea: "cost_structure",
    },
  ],
};

export const LEAN_CANVAS: Template = {
  name: "Lean Canvas",
  gridTemplate: `
    "problem solution value_prop value_prop unfair_advantage customer_segments"
    "problem key_metrics value_prop value_prop channels customer_segments"
    "cost_structure cost_structure cost_structure revenue_streams revenue_streams revenue_streams"
  `,
  fields: [
    {
      name: "Problem",
      placeholder: "List your top 1-3 problems",
      gridArea: "problem",
    },
    {
      name: "Customer Segments",
      placeholder: "List your target customers and users",
      gridArea: "customer_segments",
    },
    {
      name: "Unique Value Proposition",
      placeholder:
        "Single, clear, compelling message that states why you are different and worth paying attention",
      gridArea: "value_prop",
    },
    {
      name: "Solution",
      placeholder: "Outline a possible solution for each problem",
      gridArea: "solution",
    },
    {
      name: "Channels",
      placeholder: "List your path to customers (inbound or outbound)",
      gridArea: "channels",
    },
    {
      name: "Revenue Streams",
      placeholder: "List your sources of revenue",
      gridArea: "revenue_streams",
    },
    {
      name: "Cost Structure",
      placeholder: "List your fixed and variable costs",
      gridArea: "cost_structure",
    },
    {
      name: "Key Metrics",
      placeholder:
        "List the key numbers that tell you how your business is doing",
      gridArea: "key_metrics",
    },
    {
      name: "Unfair Advantage",
      placeholder: "Something that cannot be easily copied or bought",
      gridArea: "unfair_advantage",
    },
  ],
};

export const DEFAULT_TEMPLATES: Template[] = [
  BUSINESS_MODEL_CANVAS,
  LEAN_CANVAS,
  // Añade aquí otras plantillas si las tienes
];
