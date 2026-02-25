import Link from "next/link"
import { BarChart3, Calendar, CheckSquare, Clock, Plus, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardNav } from "@/components/dashboard-nav"
import { UserNav } from "@/components/user-nav"
import { ProjectCard } from "@/components/project-card"
import { RecentActivity } from "@/components/recent-activity"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <BarChart3 className="h-6 w-6" />
            <span>ProjectPro</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/dashboard" className="text-sm font-medium text-primary">
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
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <div className="flex items-center gap-2">
              <Link href="/projects/new">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Nuevo Proyecto
                </Button>
              </Link>
            </div>
          </div>
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Resumen</TabsTrigger>
              <TabsTrigger value="analytics">Analíticas</TabsTrigger>
              <TabsTrigger value="reports">Reportes</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Proyectos Activos</CardTitle>
                    <CheckSquare className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">+2 desde el mes pasado</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Tareas Pendientes</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">34</div>
                    <p className="text-xs text-muted-foreground">-4 desde la semana pasada</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Miembros del Equipo</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">+4 desde el mes pasado</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Próximos Eventos</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">7</div>
                    <p className="text-xs text-muted-foreground">+2 desde la semana pasada</p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Proyectos Recientes</CardTitle>
                    <CardDescription>Tienes 12 proyectos activos actualmente</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <ProjectCard
                      title="Rediseño de Sitio Web"
                      description="Actualización completa del sitio web corporativo"
                      progress={75}
                      dueDate="15 Mar 2025"
                      team={5}
                      tasks={24}
                      completedTasks={18}
                    />
                    <ProjectCard
                      title="Implementación de CRM"
                      description="Integración del nuevo sistema CRM con los sistemas existentes"
                      progress={45}
                      dueDate="30 Abr 2025"
                      team={8}
                      tasks={42}
                      completedTasks={19}
                    />
                    <ProjectCard
                      title="Campaña de Marketing Q2"
                      description="Planificación y ejecución de la campaña del segundo trimestre"
                      progress={20}
                      dueDate="10 May 2025"
                      team={4}
                      tasks={18}
                      completedTasks={4}
                    />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Actividad Reciente</CardTitle>
                    <CardDescription>Últimas actualizaciones en tus proyectos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentActivity />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Rendimiento del Proyecto</CardTitle>
                  <CardDescription>Análisis de métricas de funcionalidad y usabilidad</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Rediseño de Sitio Web</div>
                      <div className="text-sm text-muted-foreground">75%</div>
                    </div>
                    <Progress value={75} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Implementación de CRM</div>
                      <div className="text-sm text-muted-foreground">45%</div>
                    </div>
                    <Progress value={45} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Campaña de Marketing Q2</div>
                      <div className="text-sm text-muted-foreground">20%</div>
                    </div>
                    <Progress value={20} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Desarrollo de App Móvil</div>
                      <div className="text-sm text-muted-foreground">60%</div>
                    </div>
                    <Progress value={60} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reports" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Reportes de Proyectos</CardTitle>
                  <CardDescription>Informes detallados sobre el estado de los proyectos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <div className="font-medium">Informe de Progreso Semanal</div>
                      <div className="text-sm text-muted-foreground">
                        Resumen del progreso de todos los proyectos activos durante la última semana
                      </div>
                      <Button variant="outline" size="sm" className="w-fit">
                        Descargar PDF
                      </Button>
                    </div>
                    <div className="grid gap-2">
                      <div className="font-medium">Informe de Asignación de Recursos</div>
                      <div className="text-sm text-muted-foreground">
                        Análisis detallado de la asignación de recursos en todos los proyectos
                      </div>
                      <Button variant="outline" size="sm" className="w-fit">
                        Descargar PDF
                      </Button>
                    </div>
                    <div className="grid gap-2">
                      <div className="font-medium">Informe de Rendimiento del Equipo</div>
                      <div className="text-sm text-muted-foreground">
                        Evaluación del rendimiento de los miembros del equipo en los proyectos
                      </div>
                      <Button variant="outline" size="sm" className="w-fit">
                        Descargar PDF
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

