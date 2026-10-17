import type {Document} from './document.js';
import type {Exporter} from './exporter.js';

export class MicrosoftWordExporter implements Exporter {
  export(document: Document): void {
    console.log(`Exporting ${document.fileName} as a Word...`);
  }
}
