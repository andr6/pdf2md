import { render, screen, fireEvent } from '@testing-library/react'
import { FileUploader } from '@/components/file-uploader'

jest.mock('next/dynamic', () => {
  return () => () => null
})

describe('FileUploader validation', () => {
  const renderUploader = () =>
    render(
      <FileUploader
        onConversionComplete={jest.fn()}
        isConverting={false}
        setIsConverting={jest.fn()}
      />
    )

  it('rejects non-PDF files', () => {
    const { container } = renderUploader()
    const input = container.querySelector('input[type="file"]') as HTMLInputElement
    const file = new File(['text'], 'test.txt', { type: 'text/plain' })
    fireEvent.change(input, { target: { files: [file] } })
    expect(screen.getByText('Please upload a PDF file')).toBeInTheDocument()
  })

  it('rejects files over 75MB', () => {
    const { container } = renderUploader()
    const input = container.querySelector('input[type="file"]') as HTMLInputElement
    const big = new File([new ArrayBuffer(76 * 1024 * 1024)], 'big.pdf', { type: 'application/pdf' })
    fireEvent.change(input, { target: { files: [big] } })
    expect(screen.getByText('File size exceeds 75MB limit')).toBeInTheDocument()
  })
})
