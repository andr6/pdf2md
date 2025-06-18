import '@testing-library/jest-dom'

if (!(File.prototype as any).arrayBuffer) {
  File.prototype.arrayBuffer = async function () {
    const text = await this.text()
    return new TextEncoder().encode(text).buffer
  }
}
