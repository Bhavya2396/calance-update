'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)

interface Sentiment {
  positive: number
  negative: number
  neutral: number
  emotions: {
    joy: number
    sadness: number
    anger: number
    fear: number
    surprise: number
  }
}

interface SentimentChartProps {
  sentiment: Sentiment
}

const COLORS = {
  positive: '#FF6B2C',
  negative: '#EF4444',
  neutral: '#64748B',
  emotions: {
  joy: '#FF6B2C',
  sadness: '#3B82F6',
  anger: '#EF4444',
    fear: '#8B5CF6',
    surprise: '#F59E0B'
  }
}

const emotionDescriptions = {
  joy: 'Strong positive sentiment indicating high satisfaction levels',
  sadness: 'Notable customer concerns or dissatisfaction indicators',
  anger: 'Critical issues requiring immediate attention',
  fear: 'Risk factors and uncertainty indicators',
  surprise: 'Unexpected deviations from normal patterns'
}

export default function SentimentChart({ sentiment }: SentimentChartProps) {
  const [activeEmotion, setActiveEmotion] = useState<string | null>(null)

  const total = sentiment.positive + sentiment.negative + sentiment.neutral
  const getPercentage = (value: number) => ((value / total) * 100).toFixed(1)

  // Calculate dominant emotion and sentiment score
  const dominantEmotion = Object.entries(sentiment.emotions)
    .reduce((a, b) => a[1] > b[1] ? a : b)[0]
  
  const sentimentScore = ((sentiment.positive - sentiment.negative) / total * 100).toFixed(1)

  const doughnutData = {
    labels: ['Positive', 'Negative', 'Neutral'],
    datasets: [
      {
        data: [sentiment.positive, sentiment.negative, sentiment.neutral],
        backgroundColor: [COLORS.positive, COLORS.negative, COLORS.neutral],
        borderColor: ['rgba(34, 197, 94, 0.2)', 'rgba(220, 38, 38, 0.2)', 'rgba(100, 116, 139, 0.2)'],
        borderWidth: 2,
        hoverBackgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(220, 38, 38, 0.8)',
          'rgba(100, 116, 139, 0.8)'
        ],
      },
    ],
  }

  const doughnutOptions = {
    cutout: '75%',
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleColor: '#fff',
        titleFont: {
          size: 14,
          weight: 'bold' as const,
        },
        callbacks: {
          label: function(context: any) {
            const value = context.raw;
            const percentage = getPercentage(value);
            return `${context.label}: ${percentage}% (${value} responses)`;
          }
        }
      },
    },
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
          <div className="text-sm text-gray-400">Sentiment Score</div>
          <div className="text-xl sm:text-2xl font-bold" style={{ 
            color: Number(sentimentScore) > 0 ? COLORS.positive : 
                   Number(sentimentScore) < 0 ? COLORS.negative : 
                   COLORS.neutral 
          }}>
            {sentimentScore}%
            </div>
          <div className="text-sm text-gray-400">Net Sentiment Index</div>
        </motion.div>
            <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-3 sm:p-4 rounded-lg bg-black/20 border border-white/5"
        >
          <div className="text-sm text-gray-400">Response Volume</div>
          <div className="text-xl sm:text-2xl font-bold text-white">{total.toLocaleString()}</div>
          <div className="text-sm text-gray-400">Total Interactions</div>
        </motion.div>
              <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-3 sm:p-4 rounded-lg bg-black/20 border border-white/5"
        >
          <div className="text-sm text-gray-400">Dominant Pattern</div>
          <div className="text-xl sm:text-2xl font-bold" style={{ color: COLORS.emotions[dominantEmotion as keyof typeof COLORS.emotions] }}>
            {dominantEmotion.charAt(0).toUpperCase() + dominantEmotion.slice(1)}
          </div>
          <div className="text-sm text-gray-400">Primary Emotional Signal</div>
        </motion.div>
          </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 min-h-0">
        {/* Sentiment Distribution */}
        <div className="bg-black/20 rounded-lg border border-white/5 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 space-y-2 sm:space-y-0">
            <h3 className="text-sm text-gray-400">Sentiment Distribution</h3>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {[
                { label: 'Positive', color: COLORS.positive },
                { label: 'Negative', color: COLORS.negative },
                { label: 'Neutral', color: COLORS.neutral }
              ].map((item) => (
                <div key={item.label} className="flex items-center space-x-2">
                  <div 
                    className="w-2 h-2 rounded-full" 
                    style={{ backgroundColor: item.color }} 
                  />
                  <span className="text-xs text-gray-400">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center h-[200px] sm:h-[250px]">
            <Doughnut data={doughnutData} options={doughnutOptions} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {getPercentage(sentiment.positive)}%
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Positive Responses</div>
              </div>
            </div>
          </div>
        </div>

        {/* Emotional Analysis */}
        <div className="space-y-3 sm:space-y-4 overflow-y-auto max-h-[400px] sm:max-h-none">
          <div className="flex items-center justify-between sticky top-0 bg-black/80 backdrop-blur-sm p-2 rounded-lg z-10">
            <h3 className="text-sm text-gray-400">Emotional Analysis</h3>
            <div className="text-xs text-gray-500">Click for details</div>
      </div>
          {Object.entries(sentiment.emotions).map(([emotion, value], index) => (
            <motion.div
              key={emotion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-3 sm:p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                activeEmotion === emotion
                  ? 'bg-white/10 border-white/20'
                  : 'bg-black/20 border-white/5 hover:bg-black/30'
              }`}
              onClick={() => setActiveEmotion(activeEmotion === emotion ? null : emotion)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-2 h-2 rounded-full" 
                    style={{ backgroundColor: COLORS.emotions[emotion as keyof typeof COLORS.emotions] }} 
                  />
                  <span className="text-white font-medium capitalize">{emotion}</span>
                </div>
                <span className="text-sm font-medium" style={{ color: COLORS.emotions[emotion as keyof typeof COLORS.emotions] }}>
                  {value}%
                </span>
              </div>
              <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${value}%` }}
                  className="absolute inset-y-0 left-0 rounded-full"
                style={{ 
                    backgroundColor: COLORS.emotions[emotion as keyof typeof COLORS.emotions],
                    opacity: activeEmotion === emotion ? 1 : 0.6
                  }}
                />
              </div>
              {activeEmotion === emotion && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-xs sm:text-sm text-gray-400"
                >
                  {emotionDescriptions[emotion as keyof typeof emotionDescriptions]}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 