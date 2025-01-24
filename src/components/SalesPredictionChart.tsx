'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

interface SalesPredictionChartProps {
  timeRange: number
  baselinePredictions: number[]
  optimisticPredictions: number[]
  pessimisticPredictions: number[]
}

export default function SalesPredictionChart({
  timeRange,
  baselinePredictions,
  optimisticPredictions,
  pessimisticPredictions
}: SalesPredictionChartProps) {
  const [selectedDataset, setSelectedDataset] = useState<'baseline' | 'optimistic' | 'pessimistic'>('baseline')
  const [hoveredMonth, setHoveredMonth] = useState<number | null>(null)

  const months = Array.from({ length: timeRange }, (_, i) => {
    const date = new Date()
    date.setMonth(date.getMonth() + i)
    return date.toLocaleString('default', { month: 'short' })
  })

  const calculateGrowth = (data: number[]) => {
    const firstValue = data[0]
    const lastValue = data[data.length - 1]
    return ((lastValue - firstValue) / firstValue * 100).toFixed(1)
  }

  const data = {
    labels: months,
    datasets: [
      {
        label: 'Baseline',
        data: baselinePredictions,
        borderColor: '#FF6B2C',
        backgroundColor: 'rgba(255, 107, 44, 0.1)',
        fill: true,
        tension: 0.4,
        borderWidth: selectedDataset === 'baseline' ? 3 : 1,
        opacity: selectedDataset === 'baseline' ? 1 : 0.3
      },
      {
        label: 'Optimistic',
        data: optimisticPredictions,
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4,
        borderWidth: selectedDataset === 'optimistic' ? 3 : 1,
        opacity: selectedDataset === 'optimistic' ? 1 : 0.3
      },
      {
        label: 'Pessimistic',
        data: pessimisticPredictions,
        borderColor: '#EF4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        fill: true,
        tension: 0.4,
        borderWidth: selectedDataset === 'pessimistic' ? 3 : 1,
        opacity: selectedDataset === 'pessimistic' ? 1 : 0.3
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: ${context.parsed.y.toFixed(1)}%`
          }
        }
      }
    },
    scales: {
      y: {
        type: 'linear' as const,
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#9CA3AF',
          callback: function(this: any, tickValue: number | string) {
            const value = typeof tickValue === 'string' ? parseFloat(tickValue) : tickValue
            return value.toFixed(0) + '%'
          }
        }
      },
      x: {
        type: 'category' as const,
        grid: {
          display: false
        },
        ticks: {
          color: '#9CA3AF'
        }
      }
    },
    onHover: (event: any, elements: any[]) => {
      if (elements && elements[0]) {
        setHoveredMonth(elements[0].index)
      } else {
        setHoveredMonth(null)
      }
    }
  } as const

  return (
    <div className="h-full flex flex-col">
      {/* Key Metrics */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-lg bg-black/20 border border-white/5"
        >
          <div className="text-sm text-gray-400">Projected Growth</div>
          <div className="text-2xl font-bold text-[#FF6B2C]">
            {calculateGrowth(baselinePredictions)}%
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-4 rounded-lg bg-black/20 border border-white/5"
        >
          <div className="text-sm text-gray-400">Best Case</div>
          <div className="text-2xl font-bold text-[#10B981]">
            {calculateGrowth(optimisticPredictions)}%
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-4 rounded-lg bg-black/20 border border-white/5"
        >
          <div className="text-sm text-gray-400">Worst Case</div>
          <div className="text-2xl font-bold text-[#EF4444]">
            {calculateGrowth(pessimisticPredictions)}%
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-4 gap-6 min-h-0">
        {/* Chart */}
        <div className="col-span-3 bg-black/20 rounded-lg border border-white/5 p-4">
          <div className="h-full">
            <Line data={data} options={options} />
          </div>
        </div>

        {/* Scenario Selection */}
        <div className="space-y-4">
          {[
            { id: 'baseline', label: 'Baseline', color: '#FF6B2C' },
            { id: 'optimistic', label: 'Optimistic', color: '#10B981' },
            { id: 'pessimistic', label: 'Pessimistic', color: '#EF4444' }
          ].map((scenario) => (
            <motion.button
              key={scenario.id}
              onClick={() => setSelectedDataset(scenario.id as any)}
              className={`w-full p-3 rounded-lg border transition-all duration-200 ${
                selectedDataset === scenario.id
                  ? 'bg-white/10 border-white/20'
                  : 'bg-black/20 border-white/5 hover:bg-black/30'
              }`}
            >
              <div className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: scenario.color }}
                />
                <span className="text-white font-medium">{scenario.label}</span>
              </div>
              {selectedDataset === scenario.id && hoveredMonth !== null && (
                <div className="mt-2 text-sm">
                  <div className="text-gray-400">
                    {months[hoveredMonth]}:{' '}
                    <span className="text-white font-medium">
                      {scenario.id === 'baseline'
                        ? baselinePredictions[hoveredMonth]
                        : scenario.id === 'optimistic'
                        ? optimisticPredictions[hoveredMonth]
                        : pessimisticPredictions[hoveredMonth]
                      }%
                    </span>
                  </div>
                </div>
              )}
            </motion.button>
          ))}

          {selectedDataset && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-lg bg-black/40 border border-white/5 mt-4"
            >
              <div className="text-sm text-gray-400 mb-2">Scenario Analysis</div>
              <div className="text-sm text-gray-400">
                {selectedDataset === 'baseline' && 'Expected trajectory based on current trends and market conditions.'}
                {selectedDataset === 'optimistic' && 'Best-case scenario assuming favorable market conditions and growth.'}
                {selectedDataset === 'pessimistic' && 'Conservative estimate accounting for potential market challenges.'}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
} 