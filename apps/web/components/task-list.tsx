import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function TaskList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]"></TableHead>
          <TableHead>Tarea</TableHead>
          <TableHead>Proyecto</TableHead>
          <TableHead>Prioridad</TableHead>
          <TableHead>Fecha Límite</TableHead>
          <TableHead>Asignado a</TableHead>
          <TableHead className="text-right">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <Checkbox id="task1" />
          </TableCell>
          <TableCell className="font-medium">Diseñar wireframes para la página de inicio</TableCell>
          <TableCell>Rediseño de Sitio Web</TableCell>
          <TableCell>
            <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
              Alta
            </Badge>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-muted-foreground" />
              <span className="text-sm">10 Mar 2025</span>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                <AvatarFallback>AP</AvatarFallback>
              </Avatar>
              <span className="text-sm">Ana Pérez</span>
            </div>
          </TableCell>
          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                <DropdownMenuItem>Editar</DropdownMenuItem>
                <DropdownMenuItem>Reasignar</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">Eliminar</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Checkbox id="task2" />
          </TableCell>
          <TableCell className="font-medium">Implementar autenticación de usuarios</TableCell>
          <TableCell>Implementación de CRM</TableCell>
          <TableCell>
            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
              Media
            </Badge>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-muted-foreground" />
              <span className="text-sm">15 Mar 2025</span>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                <AvatarFallback>CG</AvatarFallback>
              </Avatar>
              <span className="text-sm">Carlos García</span>
            </div>
          </TableCell>
          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                <DropdownMenuItem>Editar</DropdownMenuItem>
                <DropdownMenuItem>Reasignar</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">Eliminar</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Checkbox id="task3" />
          </TableCell>
          <TableCell className="font-medium">Crear contenido para redes sociales</TableCell>
          <TableCell>Campaña de Marketing Q2</TableCell>
          <TableCell>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Baja
            </Badge>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-muted-foreground" />
              <span className="text-sm">20 Mar 2025</span>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
              <span className="text-sm">María Rodríguez</span>
            </div>
          </TableCell>
          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                <DropdownMenuItem>Editar</DropdownMenuItem>
                <DropdownMenuItem>Reasignar</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">Eliminar</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

