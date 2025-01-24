'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DocumentTextIcon, DocumentMagnifyingGlassIcon, XMarkIcon, DocumentArrowUpIcon, DocumentIcon } from '@heroicons/react/24/outline'

interface DocumentProcessorProps {
  onAnalyze: (result: any) => void
}

interface DocumentAnalysis {
  type: string
  confidence: number
  entities: Array<{
    text: string
    type: string
    confidence: number
  }>
  summary: string
  keyPoints: string[]
}

export default function DocumentProcessor({ onAnalyze }: DocumentProcessorProps) {
  const [file, setFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<DocumentAnalysis | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const validFileTypes = ['application/pdf', 'text/plain', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
  const maxFileSize = 10 * 1024 * 1024 // 10MB

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const validateFile = (file: File): string | null => {
    if (!validFileTypes.includes(file.type)) {
      return 'Invalid file type. Please upload a PDF, TXT, or DOC file.'
    }
    if (file.size > maxFileSize) {
      return 'File size exceeds 10MB limit.'
    }
    return null
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    setError(null)

    const droppedFile = e.dataTransfer.files[0]
    const validationError = validateFile(droppedFile)
    
    if (validationError) {
      setError(validationError)
      return
    }

    setFile(droppedFile)
    await processDocument(droppedFile)
  }

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null)
    const selectedFile = e.target.files?.[0]
    
    if (!selectedFile) return
    
    const validationError = validateFile(selectedFile)
    if (validationError) {
      setError(validationError)
      return
    }

    setFile(selectedFile)
    await processDocument(selectedFile)
  }

  const processDocument = async (file: File): Promise<DocumentAnalysis> => {
    setIsProcessing(true)
    setResult(null)

    try {
      // Simulate document processing
      await new Promise(resolve => setTimeout(resolve, 2000))

      const mockResult: DocumentAnalysis = {
        type: 'Business Contract',
        confidence: 0.92,
        entities: [
          { text: 'Company A', type: 'Organization', confidence: 0.95 },
          { text: 'January 1, 2024', type: 'Date', confidence: 0.98 },
          { text: '$50,000', type: 'Amount', confidence: 0.97 }
        ],
        summary: 'Service agreement between Company A and Company B for software development services.',
        keyPoints: [
          'Contract duration: 12 months',
          'Total value: $50,000',
          'Deliverables: Custom software solution',
          'Payment terms: Monthly installments'
        ]
      }

      setResult(mockResult)
      return mockResult
    } catch (error) {
      setError('Error processing document. Please try again.')
      throw error
    } finally {
      setIsProcessing(false)
    }
  }

  const handleProcessDocument: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    if (!file) return;
    
    setIsProcessing(true);
    setError(null);

    try {
      const result = await processDocument(file);
      setResult(result);
      if (onAnalyze) {
        onAnalyze(result);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while processing the document');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header with Status */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 sm:p-4 rounded-lg bg-black/20 border border-white/5"
        >
          <div className="text-sm text-gray-400">Status</div>
          <div className="text-lg sm:text-2xl font-bold text-white">
            {isProcessing ? 'Processing' : result ? 'Completed' : 'Ready'}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-3 sm:p-4 rounded-lg bg-black/20 border border-white/5"
        >
          <div className="text-sm text-gray-400">Document Type</div>
          <div className="text-lg sm:text-2xl font-bold text-[#FF6B2C]">
            {result?.type || 'N/A'}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-3 sm:p-4 rounded-lg bg-black/20 border border-white/5"
        >
          <div className="text-sm text-gray-400">Confidence</div>
          <div className="text-lg sm:text-2xl font-bold text-white">
            {result ? `${(result.confidence * 100).toFixed(1)}%` : 'N/A'}
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-0">
        {/* File Upload Area */}
        <div className="relative">
          <div 
            className={`h-full rounded-lg border-2 border-dashed transition-colors ${
              isDragging ? 'border-[#FF6B2C] bg-[#FF6B2C]/5' : 'border-white/10 hover:border-white/20'
            } ${file ? 'bg-black/20' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6">
              {!file && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <DocumentArrowUpIcon className="w-10 h-10 sm:w-12 sm:h-12 text-[#FF6B2C] mx-auto mb-4" />
                  <div className="text-base sm:text-lg font-medium text-white mb-2">
                    Drop your document here
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    or click to browse from your computer
                  </p>
                  <div className="text-xs text-gray-500">
                    Supported formats: PDF, DOC, DOCX, TXT (Max 10MB)
                  </div>
                </motion.div>
              )}
              
              {file && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center w-full"
                >
                  <DocumentIcon className="w-10 h-10 sm:w-12 sm:h-12 text-[#FF6B2C] mx-auto mb-4" />
                  <div className="text-base sm:text-lg font-medium text-white mb-2">
                    {file.name}
                  </div>
                  <div className="text-sm text-gray-400 mb-4">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                    <button
                      onClick={() => setFile(null)}
                      className="px-4 py-2 rounded-lg bg-white/5 text-white text-sm hover:bg-white/10 transition-colors"
                    >
                      Remove
                    </button>
                    <button
                      onClick={handleProcessDocument}
                      disabled={isProcessing}
                      className={`px-4 py-2 rounded-lg text-sm ${
                        isProcessing
                          ? 'bg-[#FF6B2C]/50 cursor-not-allowed'
                          : 'bg-[#FF6B2C] hover:bg-[#FF6B2C]/90'
                      } text-white transition-colors`}
                    >
                      {isProcessing ? 'Processing...' : 'Analyze Document'}
                    </button>
                  </div>
                </motion.div>
              )}
              
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept=".pdf,.doc,.docx,.txt"
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20"
              >
                <div className="flex items-center text-sm text-red-400">
                  <XMarkIcon className="w-4 h-4 mr-2" />
                  {error}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Analysis Results */}
        <div className="space-y-3 sm:space-y-4 overflow-y-auto max-h-[400px] lg:max-h-none pr-2 scrollbar-thin scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20">
          {result && (
            <>
              {/* Summary */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-3 sm:p-4 rounded-lg bg-black/20 border border-white/5"
              >
                <h3 className="text-sm text-gray-400 mb-2">Summary</h3>
                <p className="text-sm sm:text-base text-white">{result.summary}</p>
              </motion.div>

              {/* Key Points */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="p-3 sm:p-4 rounded-lg bg-black/20 border border-white/5"
              >
                <h3 className="text-sm text-gray-400 mb-2">Key Points</h3>
                <ul className="space-y-2">
                  {result.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#FF6B2C] mr-2" />
                      <span className="text-sm sm:text-base text-white">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Entities */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="p-3 sm:p-4 rounded-lg bg-black/20 border border-white/5"
              >
                <h3 className="text-sm text-gray-400 mb-2">Detected Entities</h3>
                <div className="space-y-3">
                  {result.entities.map((entity, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <span className="text-sm sm:text-base text-white font-medium">{entity.text}</span>
                        <span className="text-xs sm:text-sm text-gray-400 ml-2">({entity.type})</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-12 sm:w-16 h-1.5 rounded-full bg-white/10 mr-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${entity.confidence * 100}%` }}
                            className="h-full rounded-full bg-[#FF6B2C]"
                          />
                        </div>
                        <span className="text-xs sm:text-sm text-gray-400">
                          {(entity.confidence * 100).toFixed(0)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  )
} 