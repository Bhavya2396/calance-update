'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface BrainCircuitProps {
  className?: string
}

export default function BrainCircuit({ className }: BrainCircuitProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    // Circuit node class
    class Node {
      x: number
      y: number
      connections: Node[]
      pulseOffset: number
      pulseSpeed: number
      size: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.connections = []
        this.pulseOffset = Math.random() * Math.PI * 2
        this.pulseSpeed = 0.02 + Math.random() * 0.02
        this.size = 2 + Math.random() * 2
      }

      connect(node: Node) {
        if (!this.connections.includes(node)) {
          this.connections.push(node)
          node.connections.push(this)
        }
      }

      update(time: number) {
        this.pulseOffset += this.pulseSpeed
        this.size = 2 + Math.sin(this.pulseOffset) * 1
      }

      draw(ctx: CanvasRenderingContext2D, time: number) {
        // Draw node
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 107, 44, ${0.3 + Math.sin(this.pulseOffset) * 0.2})`
        ctx.fill()

        // Draw connections
        this.connections.forEach(node => {
          const dx = node.x - this.x
          const dy = node.y - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          // Only draw if within reasonable distance
          if (distance < 200) {
            ctx.beginPath()
            ctx.moveTo(this.x, this.y)
            ctx.lineTo(node.x, node.y)
            
            // Pulse effect along the line
            const gradient = ctx.createLinearGradient(this.x, this.y, node.x, node.y)
            const pulsePos = (Math.sin(time * 0.001 + this.pulseOffset) + 1) / 2
            
            gradient.addColorStop(0, 'rgba(255, 107, 44, 0)')
            gradient.addColorStop(pulsePos, 'rgba(255, 107, 44, 0.2)')
            gradient.addColorStop(1, 'rgba(255, 107, 44, 0)')
            
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      }
    }

    // Create nodes in a brain-like shape
    const nodes: Node[] = []
    const numNodes = 50
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    for (let i = 0; i < numNodes; i++) {
      const angle = (i / numNodes) * Math.PI * 2
      const radius = 100 + Math.random() * 100
      const x = centerX + Math.cos(angle) * radius
      const y = centerY + Math.sin(angle) * radius
      nodes.push(new Node(x, y))
    }

    // Connect nodes
    nodes.forEach(node => {
      const nearestNodes = nodes
        .filter(n => n !== node)
        .sort((a, b) => {
          const distA = Math.sqrt(Math.pow(a.x - node.x, 2) + Math.pow(a.y - node.y, 2))
          const distB = Math.sqrt(Math.pow(b.x - node.x, 2) + Math.pow(b.y - node.y, 2))
          return distA - distB
        })
        .slice(0, 3)

      nearestNodes.forEach(nearNode => node.connect(nearNode))
    })

    // Animation loop
    let animationFrameId: number
    let time = 0

    const animate = () => {
      time++
      
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      nodes.forEach(node => {
        node.update(time)
        node.draw(ctx, time)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className={`w-full h-full ${className || ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
} 