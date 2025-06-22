"use client"

import { useState } from "react"
import { FileUploader } from "@/components/file-uploader"
import { MarkdownPreview } from "@/components/markdown-preview"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Code, ArrowRight} from "lucide-react"
import { FaqSection } from "@/components/faq-section"
import { ScrollArea } from "@/components/ui/scroll-area"
import { GitHubStarButton } from "@/components/github-star-button"
import { toast } from "sonner"

export default function Home() {
  const [markdown, setMarkdown] = useState<string | null>(null)
  const [isConverting, setIsConverting] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/20">
      <div className="container mx-auto py-16 px-4 max-w-4xl">
        <div className="relative">
          {/* Top accent line with gradient */}
          <div className="absolute -top-16 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
          
          {/* Header content */}
          <div className="space-y-8">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  100% browser-based conversion
                </span>
              </div>
              
              <h1 className="text-5xl font-bold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-300 dark:to-gray-500 mb-4 max-w-2xl">
                Transform Your PDFs into Clean Markdown
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mb-8">
                Instantly convert PDF documents to perfectly formatted Markdown. Your files never leave your device — everything happens right in your browser.
              </p>
              
              <div className="flex items-center gap-6">
                <Button 
                  className="h-12 px-6 text-sm font-medium bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors"
                  onClick={() => {
                    // Scroll to file uploader
                    document.querySelector('#file-uploader')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Convert PDF Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <GitHubStarButton className="h-12" />
              </div>
            </div>
          </div>
          
          {/* Bottom accent line with gradient */}
          <div className="absolute -bottom-16 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
        </div>

        <div className="grid gap-12 mt-24" id="file-uploader">
          <div className="transition-all duration-200 hover:scale-[1.01]">
            <FileUploader
              onConversionComplete={(result, file) => {
                setMarkdown(result)
                setFileName(file.name)
              }}
              isConverting={isConverting}
              setIsConverting={setIsConverting}
            />
          </div>

          {markdown && (
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-8">
                <div className="space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                    Conversion Result
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {fileName?.replace(/\.pdf$/i, '')}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => {
                      navigator.clipboard.writeText(markdown || "")
                      toast.success("Markdown copied to clipboard!")
                    }}
                    className="h-9 font-medium bg-white hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
                  >
                    Copy
                  </Button>
                  <Button
                    onClick={() => {
                      if (!markdown || !fileName) return

                      const element = document.createElement("a")
                      const file = new Blob([markdown], { type: "text/markdown" })
                      element.href = URL.createObjectURL(file)
                      element.download = fileName.replace(/\.pdf$/i, "") + ".md"
                      document.body.appendChild(element)
                      element.click()
                      document.body.removeChild(element)
                    }}
                    className="h-9 font-medium bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100"
                  >
                    <FileText className="mr-1.5 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden shadow-sm">
                <Tabs defaultValue="preview" className="w-full">
                  <TabsList className="flex h-12 items-center gap-4 px-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
                    <TabsTrigger 
                      value="preview" 
                      className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm transition-all"
                    >
                      <FileText className="h-4 w-4" />
                      Preview
                    </TabsTrigger>
                    <TabsTrigger 
                      value="markdown"
                      className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm transition-all"
                    >
                      <Code className="h-4 w-4" />
                      Markdown
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="preview" className="p-6">
                    <div className="overflow-x-auto">
                      <div className="max-w-full">
                        <MarkdownPreview markdown={markdown} />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="markdown">
                    <div className="relative">
                      <ScrollArea className="h-[600px] w-full">
                        <div className="p-6">
                          <pre className="text-sm font-mono text-gray-800 dark:text-gray-200 overflow-x-auto">
                            <code className="whitespace-pre-wrap [overflow-wrap:anywhere]">{markdown}</code>
                          </pre>
                        </div>
                      </ScrollArea>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-20">
          <FaqSection />
        </div>

        <footer className="mt-20 text-center text-sm text-gray-500 dark:text-gray-400">
          <div className="flex justify-center mb-4">
            <GitHubStarButton />
          </div>
          <p>
            Made with ❤️ by <a href="https://twitter.com/michael_chomsky" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:underline">@michael_chomsky</a>. If you found this tool helpful, please consider starring it on
            GitHub.
          </p>
        </footer>
      </div>
    </main>
  )
}

