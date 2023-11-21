/**
 * @class Todo
 *
 * Manages the data of the application.
 */
class TodoT {
  // type annotations to the class properties
  id: string;
  text: string;
  complete: boolean;

  // text is a required string, and complete is an optional boolean.
  constructor({ text, complete }: { text: string; complete?: boolean } = { text: '', complete: false }) {
    this.id = this.uuidv4();
    this.text = text;
    this.complete = complete!;
  }

  // Workaround: Generating a UUID with a more standard method using the 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx' format.
  
  private uuidv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = crypto.getRandomValues(new Uint8Array(1))[0] & 15;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}

