import { Clock, Users } from "lucide-react"

import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  progress: number
  dueDate: string
  team: number
  tasks: number
  completedTasks: number
}

export function ProjectCard({ title, description, progress, dueDate, team, tasks, completedTasks }: ProjectCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-base">{title}</CardTitle>
          <Badge variant={progress < 30 ? "destructive" : progress < 70 ? "outline" : "default"}>{progress}%</Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div>Progreso</div>
            <div className="font-medium">
              {completedTasks}/{tasks} tareas
            </div>
          </div>
          <Progress value={progress} />
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="mr-1 h-3 w-3" />
          {dueDate}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="mr-1 h-3 w-3" />
          {team}
        </div>
      </CardFooter>
    </Card>
  )
}

