/**
 * Local logo data for ToolIcon. SVGs also live in src/assets/stack/.
 * Sources (Iconify set:name, fetched once, no runtime requests):
 *   Figma            simple-icons:figma
 *   Photoshop        devicon-plain:photoshop
 *   Illustrator      devicon-plain:illustrator
 *   After Effects    streamline-logos:adobe-after-effects-logo-block
 *   Blender          simple-icons:blender
 *   Spline           official spline.design gradient orb, redrawn with each color band as a grey tone
 *   Canva            bxl:canva
 *   Google Workspace official 4-segment Google G, each block a different grey tone
 *   Slack            mdi:slack
 *   Notion           simple-icons:notion
 *   Claude           simple-icons:claude
 *   GitHub           simple-icons:github
 */
export type ToolKind = "path" | "orb" | "multi";
export type ToolPart = {
    d: string;
    opacity: number;
};
export type ToolDef = {
    viewBox: string;
    path: string;
    source: string;
    kind: ToolKind;
    parts?: ToolPart[];
    fillRule?: "evenodd" | "nonzero";
};
export declare const TOOLS: Record<string, ToolDef>;
