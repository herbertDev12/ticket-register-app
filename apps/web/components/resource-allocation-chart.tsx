"use client"

import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Asignación de Recursos por Proyecto",
    },
  },
}

const data = {
  labels: ["Rediseño de Sitio Web", "Implementación de CRM", "Campaña de Marketing Q2", "Desarrollo de App Móvil"],
  datasets: [
    {
      label: "Recursos Humanos",
      data: [12, 19, 3, 5],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Recursos Materiales",
      data: [2, 3, 20, 5],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Recursos Financieros",
      data: [3, 10, 13, 15],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
  ],
}

export function ResourceAllocationChart() {
  return <Bar options={options} data={data} />
}

