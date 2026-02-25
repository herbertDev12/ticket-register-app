import { ProjectCard } from "@/components/project-card"

export function ProjectGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
      <ProjectCard
        title="Desarrollo de App Móvil"
        description="Creación de una aplicación móvil para clientes"
        progress={60}
        dueDate="22 Jun 2025"
        team={6}
        tasks={36}
        completedTasks={22}
      />
      <ProjectCard
        title="Migración de Base de Datos"
        description="Migración de la base de datos a una nueva infraestructura"
        progress={90}
        dueDate="5 Mar 2025"
        team={3}
        tasks={15}
        completedTasks={13}
      />
      <ProjectCard
        title="Optimización de SEO"
        description="Mejora del posicionamiento en motores de búsqueda"
        progress={30}
        dueDate="18 Abr 2025"
        team={2}
        tasks={20}
        completedTasks={6}
      />
    </div>
  )
}

