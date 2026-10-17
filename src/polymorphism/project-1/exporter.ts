import type { Document } from "./document.js";

export interface Exporter {
  export(document: Document): void;
}
