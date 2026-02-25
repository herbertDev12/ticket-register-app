import { CheckCircle2, Clock, Edit, MoreHorizontal, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function ProjectTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nombre</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Progreso</TableHead>
          <TableHead>Fecha Límite</TableHead>
          <TableHead>Metodología</TableHead>
          <TableHead className="text-right">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Rediseño de Sitio Web</TableCell>
          <TableCell>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              En Progreso
            </Badge>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Progress value={75} className="w-[80px]" />
              <span className="text-sm text-muted-foreground">75%</span>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-muted-foreground" />
              <span className="text-sm">15 Mar 2025</span>
            </div>
          </TableCell>
          <TableCell>Ágil (RUP)</TableCell>
          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  Editar
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Marcar como Completado
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <Trash className="mr-2 h-4 w-4" />
                  Eliminar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Implementación de CRM</TableCell>
          <TableCell>
            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
              Planificación
            </Badge>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Progress value={45} className="w-[80px]" />
              <span className="text-sm text-muted-foreground">45%</span>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-muted-foreground" />
              <span className="text-sm">30 Abr 2025</span>
            </div>
          </TableCell>
          <TableCell>Cascada</TableCell>
          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  Editar
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Marcar como Completado
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <Trash className="mr-2 h-4 w-4" />
                  Eliminar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Campaña de Marketing Q2</TableCell>
          <TableCell>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              Nuevo
            </Badge>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Progress value={20} className="w-[80px]" />
              <span className="text-sm text-muted-foreground">20%</span>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-muted-foreground" />
              <span className="text-sm">10 May 2025</span>
            </div>
          </TableCell>
          <TableCell>Basado en Prototipo</TableCell>
          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  Editar
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Marcar como Completado
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <Trash className="mr-2 h-4 w-4" />
                  Eliminar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

