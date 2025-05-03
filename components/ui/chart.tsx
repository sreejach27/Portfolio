"use client"

import { useRef, useEffect } from "react"
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  RadarController,
  type ChartOptions,
  type ChartData,
} from "chart.js"

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, RadarController)

interface ChartProps {
  type: "radar"
  data: ChartData<"radar">
  options: ChartOptions<"radar">
  className?: string
}

export function Chart({ type, data, options, className }: ChartProps) {
  const chartRef = useRef<ChartJS | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    if (chartRef.current) {
      chartRef.current.destroy()
    }

    chartRef.current = new ChartJS(ctx, {
      type: type,
      data: data,
      options: options,
    })

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy()
      }
    }
  }, [type, data, options])

  return <canvas ref={canvasRef} className={className} />
}

export type { ChartData, ChartOptions }
export type ChartArea = "top" | "bottom" | "left" | "right" | "chartArea"

