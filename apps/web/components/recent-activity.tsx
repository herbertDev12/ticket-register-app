import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentActivity() {
  return (
    <div className="space-y-8">
      <div className="flex items-start gap-4">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="@user" />
          <AvatarFallback>AP</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">
            <span className="font-semibold">Ana Pérez</span> completó la tarea{" "}
            <span className="font-semibold">Diseñar wireframes</span>
          </p>
          <p className="text-sm text-muted-foreground">Hace 2 horas</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="@user" />
          <AvatarFallback>CG</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">
            <span className="font-semibold">Carlos García</span> comentó en{" "}
            <span className="font-semibold">Implementación de API</span>
          </p>
          <p className="text-sm text-muted-foreground">Hace 4 horas</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="@user" />
          <AvatarFallback>MR</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">
            <span className="font-semibold">María Rodríguez</span> creó un nuevo proyecto{" "}
            <span className="font-semibold">Campaña de Marketing Q2</span>
          </p>
          <p className="text-sm text-muted-foreground">Hace 6 horas</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="@user" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">
            <span className="font-semibold">Juan Pérez</span> asignó{" "}
            <span className="font-semibold">3 nuevas tareas</span> a <span className="font-semibold">Ana Pérez</span>
          </p>
          <p className="text-sm text-muted-foreground">Hace 8 horas</p>
        </div>
      </div>
    </div>
  )
}

