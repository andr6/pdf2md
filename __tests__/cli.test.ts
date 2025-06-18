import { execFileSync } from 'child_process'
import path from 'path'

describe('pdf2md CLI', () => {
  it('converts a sample PDF', () => {
    const pdf = path.join(__dirname, 'samples', 'sample.pdf')
    const output = execFileSync('node', ['scripts/pdf2md-cli.js', pdf], { encoding: 'utf8' })
    expect(output.toLowerCase()).toContain('hello')
  })
})
