import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FaqSection() {
  return (
    <Card className="mt-10">
      <CardHeader>
        <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How does the PDF to Markdown conversion work?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                This tool uses the <code>@opendocsg/pdf2md</code> library to convert PDF documents to Markdown format.
                The process works as follows:
              </p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Your PDF file is processed entirely in your browser</li>
                <li>The PDF content is extracted, including text, basic formatting, and structure</li>
                <li>The extracted content is converted to Markdown syntax</li>
                <li>The resulting Markdown is displayed in your browser</li>
              </ol>
              <p className="mt-2">
                <strong>Your files never leave your device</strong> - all processing happens locally in your browser.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>What are the limitations of PDF to Markdown conversion?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                While our converter works well for most documents, PDF to Markdown conversion has some inherent
                limitations:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Complex layouts may not be preserved exactly as in the original PDF</li>
                <li>Tables might not convert perfectly, especially complex ones with merged cells</li>
                <li>Images in the PDF are not included in the Markdown output</li>
                <li>PDF-specific features like forms, annotations, and comments are not supported</li>
                <li>Some special characters or symbols might not convert correctly</li>
                <li>Documents with multiple columns may have text flow issues in the conversion</li>
              </ul>
              <p className="mt-2">For best results, use PDFs with simple layouts and primarily text content.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>What formatting is preserved in the conversion?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">The converter attempts to preserve the following elements:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Headings and subheadings (converted to Markdown heading levels)</li>
                <li>Paragraphs and basic text flow</li>
                <li>Basic lists (bulleted and numbered)</li>
                <li>Simple tables (converted to Markdown table syntax)</li>
                <li>Basic text formatting like bold and italic (when detectable)</li>
                <li>Links (when properly embedded in the PDF)</li>
              </ul>
              <p className="mt-2">
                More complex formatting like colors, fonts, text size, and alignment are not preserved in Markdown.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Is there a file size limit?</AccordionTrigger>
            <AccordionContent>
              <p>
                Yes, the recommended maximum file size is 75MB. Larger files may cause performance issues or browser
                slowdowns. Since all processing happens in your browser, very large files might cause your browser to
                become unresponsive.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Is my PDF content secure?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">Yes, your data is completely secure:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>100% browser-based</strong> - your files never leave your device
                </li>
                <li>No data is uploaded to any server</li>
                <li>No data is stored anywhere except temporarily in your browser's memory</li>
                <li>The tool works even when you're offline</li>
                <li>Your privacy is completely protected</li>
              </ul>
              <p className="mt-2">
                This makes our tool ideal for sensitive documents, as the content never leaves your computer.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Why is my conversion taking a long time?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">Conversion time depends on several factors:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>File size - larger PDFs take longer to process</li>
                <li>Document complexity - PDFs with complex layouts require more processing</li>
                <li>Your device's processing power - faster computers will convert more quickly</li>
                <li>Browser performance - some browsers handle PDF processing better than others</li>
              </ul>
              <p className="mt-2">
                Most conversions complete within a few seconds. If your browser becomes unresponsive, try using a
                smaller PDF or a more powerful device.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>Which browsers are supported?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">This tool works on all modern browsers, including:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Google Chrome (recommended)</li>
                <li>Mozilla Firefox</li>
                <li>Microsoft Edge</li>
                <li>Safari</li>
                <li>Opera</li>
              </ul>
              <p className="mt-2">For the best experience, make sure your browser is updated to the latest version.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>Can I use this tool offline?</AccordionTrigger>
            <AccordionContent>
              <p>
                Yes! Once the page has loaded, you can use this tool completely offline. All the necessary code is
                loaded in your browser, and no internet connection is required for the conversion process. This makes it
                perfect for working in environments with limited or no internet access.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger>How can I improve conversion results?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">For better conversion results:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use PDFs with clear text (not scanned documents)</li>
                <li>Choose PDFs with simple layouts rather than complex designs</li>
                <li>Ensure the PDF has proper text encoding (not just images of text)</li>
                <li>Use PDFs with standard fonts</li>
                <li>Remove unnecessary elements like headers, footers, and page numbers if possible</li>
              </ul>
              <p className="mt-2">
                If you're creating a PDF specifically for conversion to Markdown, use a simple layout with clear heading
                structure.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger>Can I use this tool for commercial purposes?</AccordionTrigger>
            <AccordionContent>
              <p>
                Yes, this tool can be used for both personal and commercial purposes. However, please note that the
                underlying library (@opendocsg/pdf2md) has its own license terms that you should review if you're
                planning to incorporate this functionality into your own applications.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
