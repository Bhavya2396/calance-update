'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import * as d3 from 'd3'
import cloud from 'd3-cloud'

interface Word {
  text: string
  value: number
}

interface WordCloudProps {
  words: Word[]
}

interface PositionedWord extends Word {
  x?: number
  y?: number
  size?: number
  rotate?: number
}

const COLORS = {
  primary: '#FF6B2C',    // Main orange
  secondary: '#FF8F59',  // Lighter orange
  accent: '#F97316',     // Darker orange
  error: '#EF4444',      // Red
  neutral: '#64748B',    // Neutral gray
  background: 'rgba(0, 0, 0, 0.2)',
  border: 'rgba(255, 255, 255, 0.05)',
  text: {
    primary: '#FFFFFF',
    secondary: '#94A3B8'
  }
}

export default function WordCloud({ words }: WordCloudProps) {
  const [selectedWord, setSelectedWord] = useState<PositionedWord | null>(null)
  const [layout, setLayout] = useState<PositionedWord[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== 'undefined' && containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setDimensions({ width, height })
      }
    }

    updateDimensions()

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateDimensions)
      return () => window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  useEffect(() => {
    const maxValue = Math.max(...words.map(w => w.value))
    const fontSize = d3.scaleLinear()
      .domain([0, maxValue])
      .range([14, 48])

    const layout = cloud()
      .size([dimensions.width, dimensions.height])
      .words(words.map(w => ({ ...w })))
      .padding(3)
      .rotate(() => 0)
      .fontSize(d => fontSize((d as Word).value))
      .spiral('rectangular')
      .on('end', (words) => {
        setLayout(words as PositionedWord[])
      })

    layout.start()
  }, [words, dimensions])

  const maxValue = Math.max(...words.map(w => w.value))
  
  const color = d3.scaleLinear<string>()
    .domain([0, maxValue * 0.5, maxValue])
    .range([COLORS.neutral, COLORS.secondary, COLORS.primary])

  const getRelevanceDescription = (value: number) => {
    if (value >= maxValue * 0.8) return 'Critical Topic'
    if (value >= maxValue * 0.6) return 'Major Theme'
    if (value >= maxValue * 0.4) return 'Significant Pattern'
    if (value >= maxValue * 0.2) return 'Notable Mention'
    return 'Minor Reference'
  }

  const getTopRelatedWords = (word: Word) => {
    return words
      .filter(w => w.text !== word.text)
      .sort((a, b) => Math.abs(b.value - word.value) - Math.abs(a.value - word.value))
      .slice(0, 3)
  }

  const getTrendIndicator = (value: number) => {
    const ratio = value / maxValue
    if (ratio >= 0.8) return 'Trending Up'
    if (ratio >= 0.5) return 'Stable'
    return 'Low Volume'
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header with Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 sm:p-4 rounded-lg bg-black/20 border border-white/5"
        >
          <div className="text-sm text-gray-400">Topic Coverage</div>
          <div className="text-xl sm:text-2xl font-bold text-white">{words.length}</div>
          <div className="text-sm text-gray-400">Unique Themes</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-3 sm:p-4 rounded-lg bg-black/20 border border-white/5"
        >
          <div className="text-sm text-gray-400">Primary Theme</div>
          <div className="text-xl sm:text-2xl font-bold" style={{ color: COLORS.primary }}>
            {words.reduce((a, b) => a.value > b.value ? a : b).text}
          </div>
          <div className="text-sm text-gray-400">Highest Frequency</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-3 sm:p-4 rounded-lg bg-black/20 border border-white/5"
        >
          <div className="text-sm text-gray-400">Theme Density</div>
          <div className="text-xl sm:text-2xl font-bold text-white">
            {(words.reduce((sum, word) => sum + word.value, 0) / words.length).toFixed(1)}
          </div>
          <div className="text-sm text-gray-400">Average Frequency</div>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 min-h-0">
        {/* Word Cloud Visualization */}
        <div className="lg:col-span-2 bg-black/20 rounded-lg border border-white/5 p-4 min-h-[300px] sm:min-h-[400px]">
          <div ref={containerRef} className="w-full h-full relative">
            <svg width={dimensions.width} height={dimensions.height}>
              <g transform={`translate(${dimensions.width / 2},${dimensions.height / 2})`}>
                {layout.map((word, i) => (
                  <motion.text
                    key={word.text}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.02 }}
                    x={word.x}
                    y={word.y}
                    fontSize={word.size}
                    textAnchor="middle"
                    fill={selectedWord?.text === word.text ? COLORS.primary : color(word.value)}
                    className="cursor-pointer transition-colors duration-200 hover:fill-[#FF6B2C]"
                    onClick={() => setSelectedWord(word)}
                    style={{
                      opacity: selectedWord && selectedWord.text !== word.text ? 0.5 : 1
                    }}
                  >
                    {word.text}
                  </motion.text>
                ))}
              </g>
            </svg>
          </div>
        </div>

        {/* Topic Analysis */}
        <div className="space-y-3 sm:space-y-4 overflow-y-auto max-h-[400px] lg:max-h-none pr-2 scrollbar-thin scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20">
          {selectedWord ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 sm:p-4 rounded-lg bg-black/20 border border-white/5"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-medium text-white">{selectedWord.text}</h3>
                <button
                  onClick={() => setSelectedWord(null)}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Topic Analysis</div>
                  <div className="flex items-center space-x-2">
                    <div className="text-xl sm:text-2xl font-bold" style={{ color: COLORS.primary }}>
                      {selectedWord.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      ({getRelevanceDescription(selectedWord.value)})
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">
                    {getTrendIndicator(selectedWord.value)}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-400 mb-2">Relative Importance</div>
                  <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(selectedWord.value / maxValue) * 100}%` }}
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{ backgroundColor: color(selectedWord.value) }}
                    />
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-400 mb-2">Related Themes</div>
                  <div className="space-y-2">
                    {getTopRelatedWords(selectedWord).map((word, index) => (
                      <motion.div
                        key={word.text}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-2 rounded bg-white/5 cursor-pointer hover:bg-white/10 transition-colors"
                        onClick={() => {
                          const newWord = layout.find(w => w.text === word.text)
                          if (newWord) setSelectedWord(newWord)
                        }}
                      >
                        <span className="text-sm text-white">{word.text}</span>
                        <span className="text-xs sm:text-sm" style={{ color: color(word.value) }}>
                          {word.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="text-center p-4">
              <div className="text-gray-400 mb-2">Select any topic to analyze</div>
              <div className="text-xs sm:text-sm text-gray-500">Click words to explore relationships</div>
            </div>
          )}

          {/* Top Topics List */}
          {!selectedWord && (
            <div className="space-y-2">
              <div className="text-sm text-gray-400 mb-2 sticky top-0 bg-black/80 backdrop-blur-sm p-2 rounded-lg z-10">
                Top Themes
              </div>
              {words
                .sort((a, b) => b.value - a.value)
                .slice(0, 5)
                .map((word, index) => (
                  <motion.div
                    key={word.text}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 rounded-lg bg-black/20 border border-white/5 cursor-pointer hover:bg-black/30 transition-colors"
                    onClick={() => {
                      const layoutWord = layout.find(w => w.text === word.text)
                      if (layoutWord) setSelectedWord(layoutWord)
                    }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-white">{word.text}</span>
                      <span className="text-xs sm:text-sm" style={{ color: color(word.value) }}>
                        {word.value}
                      </span>
                    </div>
                    <div className="relative h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(word.value / maxValue) * 100}%` }}
                        className="absolute inset-y-0 left-0 rounded-full"
                        style={{ backgroundColor: color(word.value) }}
                      />
                    </div>
                  </motion.div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 