"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"
import { Chart, type ChartData, type ChartOptions } from "@/components/ui/chart"

interface SkillChartProps {
  skills: { name: string; level: number }[]
}

export default function SkillChart({ skills }: SkillChartProps) {
  const { theme } = useTheme()
  const chartRef = useRef<Chart | null>(null)

  const data: ChartData = {
    labels: skills.map((skill) => skill.name),
    datasets: [
      {
        label: "Skill Level",
        data: skills.map((skill) => skill.level),
        backgroundColor: "rgba(var(--chart-primary), 0.2)",
        borderColor: "rgb(var(--chart-primary))",
        borderWidth: 2,
        pointBackgroundColor: "rgb(var(--chart-primary))",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(var(--chart-primary))",
      },
    ],
  }

  const options: ChartOptions = {
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          backdropColor: "transparent",
          color: "rgb(var(--chart-foreground))",
        },
        pointLabels: {
          color: "rgb(var(--chart-foreground))",
          font: {
            size: 12,
          },
        },
        grid: {
          color: "rgba(var(--chart-grid), 0.1)",
        },
        angleLines: {
          color: "rgba(var(--chart-grid), 0.1)",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  useEffect(() => {
    // Update chart colors based on theme
    const updateChartColors = () => {
      if (!chartRef.current) return

      const isDark = theme === "dark"

      chartRef.current.data.datasets[0].backgroundColor = isDark
        ? "rgba(var(--chart-primary), 0.2)"
        : "rgba(var(--chart-primary), 0.2)"

      chartRef.current.data.datasets[0].borderColor = isDark ? "rgb(var(--chart-primary))" : "rgb(var(--chart-primary))"

      chartRef.current.options.scales!.r!.pointLabels!.color = isDark
        ? "rgb(var(--chart-foreground))"
        : "rgb(var(--chart-foreground))"

      chartRef.current.options.scales!.r!.grid!.color = isDark
        ? "rgba(var(--chart-grid), 0.1)"
        : "rgba(var(--chart-grid), 0.1)"

      chartRef.current.options.scales!.r!.angleLines!.color = isDark
        ? "rgba(var(--chart-grid), 0.1)"
        : "rgba(var(--chart-grid), 0.1)"

      chartRef.current.update()
    }

    updateChartColors()
  }, [theme])

  return (
    <div className="w-full max-w-md">
      <Chart type="radar" data={data} options={options} ref={chartRef} className="w-full h-full" />
    </div>
  )
}

