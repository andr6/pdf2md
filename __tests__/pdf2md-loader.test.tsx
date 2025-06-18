import { render, waitFor } from '@testing-library/react'
import PDF2MDLoader from '@/components/pdf2md-loader'

jest.mock('@opendocsg/pdf2md', () => ({
  __esModule: true,
  default: jest.fn(async () => 'MOCK_MD'),
}))

describe('PDF2MDLoader', () => {
  it('converts PDF and returns markdown', async () => {
    const file = { arrayBuffer: jest.fn(async () => new ArrayBuffer(8)) } as unknown as File
    const onLoad = jest.fn()
    const onComplete = jest.fn()
    const onError = jest.fn()

    render(
      <PDF2MDLoader
        file={file}
        isConverting={true}
        onLoad={onLoad}
        onConversionComplete={onComplete}
        onError={onError}
      />
    )

    await waitFor(() => expect(onLoad).toHaveBeenCalled())
    await waitFor(() => expect(onComplete).toHaveBeenCalledWith('MOCK_MD'))
    expect(onError).not.toHaveBeenCalled()
  })
})
