import Link from "next/link"
import { BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardNav } from "@/components/dashboard-nav"
import { UserNav } from "@/components/user-nav"
import { ResourceAllocationChart } from "@/components/resource-allocation-chart"
import { ResourceMetricsChart } from "@/components/resource-metrics-chart"

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <BarChart3 className="h-6 w-6" />
            <span>ProjectPro</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
              Dashboard
            </Link>
            <Link href="/projects" className="text-sm font-medium transition-colors hover:text-primary">
              Proyectos
            </Link>
            <Link href="/tasks" className="text-sm font-medium transition-colors hover:text-primary">
              Tareas
            </Link>
            <Link href="/team" className="text-sm font-medium transition-colors hover:text-primary">
              Equipo
            </Link>
            <Link href="/resources" className="text-sm font-medium transition-colors hover:text-primary">
              Recursos
            </Link>
          </nav>
          <UserNav />
        </div>
      </header>
      <div className="grid flex-1 md:grid-cols-[220px_1fr]">
        <aside className="hidden border-r bg-muted/40 md:block">
          <DashboardNav />
        </aside>
        <main className="flex flex-col gap-6 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Analíticas</h1>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Asignación de Recursos</CardTitle>
                <CardDescription>Distribución de recursos por proyecto</CardDescription>
              </CardHeader>
              <CardContent>
                <ResourceAllocationChart />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Métricas de Recursos</CardTitle>
                <CardDescription>Utilización y eficiencia de recursos a lo largo del tiempo</CardDescription>
              </CardHeader>
              <CardContent>
                <ResourceMetricsChart />
              </CardContent>
            </Card>
          </div>

          {/* Aquí puedes agregar más secciones de análisis según sea necesario */}
        </main>
      </div>
    </div>
  )
}

