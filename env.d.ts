/// <reference types="astro/client" />

// SVG jako URL (string)
declare module '*.svg' {
  const src: string;
  export default src;
}

// Volitelně, pokud bys někdy používal ?url
declare module '*.svg?url' {
  const src: string;
  export default src;
}
