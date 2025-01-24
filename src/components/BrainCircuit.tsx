'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Node {
  x: number
  y: number
  connections: Node[]
  pulseRadius: number
  pulseOpacity: number
  pulseDirection: number
}

interface BrainCircuitProps {
  className?: string
}

export default function BrainCircuit({ className = '' }: BrainCircuitProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const nodes: Node[] = []
    let animationFrameId: number

    const resizeCanvas = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createNode = (x: number, y: number): Node => ({
      x,
      y,
      connections: [],
      pulseRadius: 0,
      pulseOpacity: 0,
      pulseDirection: 1
    })

    const initNodes = () => {
      nodes.length = 0
      const nodeCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 40000), 50)
      
      for (let i = 0; i < nodeCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        nodes.push(createNode(x, y))
      }

      // Connect nodes
      nodes.forEach(node => {
        const closestNodes = nodes
          .filter(n => n !== node)
          .sort((a, b) => {
            const distA = Math.hypot(node.x - a.x, node.y - a.y)
            const distB = Math.hypot(node.x - b.x, node.y - b.y)
            return distA - distB
          })
          .slice(0, 3)

        node.connections = closestNodes
      })
    }

    const drawNode = (node: Node) => {
      if (!ctx) return

      // Draw connections
      node.connections.forEach(connection => {
        ctx.beginPath()
        ctx.moveTo(node.x, node.y)
        ctx.lineTo(connection.x, connection.y)
        ctx.strokeStyle = 'rgba(255, 107, 44, 0.2)'
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Draw node
      ctx.beginPath()
      ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
      ctx.fillStyle = '#FF6B2C'
      ctx.fill()

      // Draw pulse
      if (node.pulseOpacity > 0) {
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.pulseRadius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(255, 107, 44, ${node.pulseOpacity})`
        ctx.stroke()
      }
    }

    const animate = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      nodes.forEach(node => {
        // Update pulse
        if (node.pulseDirection > 0) {
          node.pulseRadius += 0.5
          node.pulseOpacity -= 0.02
          if (node.pulseOpacity <= 0) {
            node.pulseDirection = -1
            node.pulseRadius = 0
            node.pulseOpacity = 0
          }
        } else if (Math.random() < 0.02) {
          node.pulseDirection = 1
          node.pulseOpacity = 0.3
        }

        drawNode(node)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initNodes()
    animate()

    window.addEventListener('resize', () => {
      resizeCanvas()
      initNodes()
    })

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className={`fixed inset-0 z-0 bg-transparent pointer-events-none ${className}`}
    />
  )
} 