import '@testing-library/jest-dom'

if (!(File.prototype as any).arrayBuffer) {
  File.prototype.arrayBuffer = async function (): Promise<ArrayBuffer> {
    const text = await this.text()
    return new TextEncoder().encode(text).buffer as ArrayBuffer
  }
}
