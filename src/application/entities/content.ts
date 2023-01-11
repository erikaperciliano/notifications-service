/* eslint-disable prettier/prettier */
export class Content {
  private readonly content: string;

  get Value(): string {
    return this.content;
    }

  private validateContetLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
    }

  constructor(content: string) {
    const isContentLengthValid = this.validateContetLength(content);

    if (!isContentLengthValid) {
      throw new Error('Content length error.');
    }

    this.content = content;
    }
}