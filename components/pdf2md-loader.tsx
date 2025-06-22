"use client"

import { useEffect, useState } from "react"
import { toast } from "sonner"

interface PDF2MDLoaderProps {
  file: File | null
  isConverting: boolean
  onLoad: () => void
  onConversionComplete: (markdown: string) => void
  onError: (error: string) => void
}

export default function PDF2MDLoader({ file, isConverting, onLoad, onConversionComplete, onError }: PDF2MDLoaderProps) {
  const [pdf2md, setPdf2md] = useState<any>(null)

  // Load the pdf2md library
  useEffect(() => {
    const loadPdf2md = async () => {
      try {
        // Dynamic import of the pdf2md library
        const pdf2mdModule = await import("@opendocsg/pdf2md")
        setPdf2md(() => pdf2mdModule.default)
        onLoad()
      } catch (error) {
        console.error("Failed to load pdf2md library:", error)
        toast.error("Failed to load conversion library. Please try again later.")
        onError("Failed to load conversion library. Please try again later.")
      }
    }

    loadPdf2md()
  }, [onLoad, onError])

  // Handle the conversion when triggered
  useEffect(() => {
    const convertPdf = async () => {
      if (!file || !pdf2md || !isConverting) return

      try {
        // Convert the file to an ArrayBuffer
        const pdfBuffer = await file.arrayBuffer()

        // Convert PDF to Markdown using pdf2md
        const markdown = await pdf2md(pdfBuffer)

        // Return the result
        onConversionComplete(markdown)
        toast.success("Conversion complete!")
      } catch (error) {
        console.error("Error converting PDF:", error)
        toast.error("Failed to convert PDF. The file might be corrupted or unsupported.")
        onError("Failed to convert PDF. The file might be corrupted or unsupported.")
      }
    }

    if (isConverting && file && pdf2md) {
      convertPdf()
    }
  }, [file, pdf2md, isConverting, onConversionComplete, onError])

  // This component doesn't render anything visible
  return null
}
