"use client"

export function ResourceUsageChart() {
  // En un caso real, aquí se implementaría un gráfico con una biblioteca como recharts o chart.js
  // Para este ejemplo, usaremos una representación visual simple

  const projects = [
    { name: "Rediseño de Sitio Web", percentage: 35, color: "bg-blue-500" },
    { name: "Implementación de CRM", percentage: 25, color: "bg-green-500" },
    { name: "Campaña de Marketing Q2", percentage: 15, color: "bg-yellow-500" },
    { name: "Desarrollo de App Móvil", percentage: 20, color: "bg-purple-500" },
    { name: "Otros", percentage: 5, color: "bg-gray-500" },
  ]

  return (
    <div className="space-y-6">
      <div className="h-8 w-full flex rounded-md overflow-hidden">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${project.color} h-full`}
            style={{ width: `${project.percentage}%` }}
            title={`${project.name}: ${project.percentage}%`}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className={`h-3 w-3 rounded-full ${project.color}`} />
            <div className="text-sm">{project.name}</div>
            <div className="text-sm font-medium ml-auto">{project.percentage}%</div>
          </div>
        ))}
      </div>
    </div>
  )
}

