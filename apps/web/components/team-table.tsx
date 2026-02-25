import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function TeamTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Miembro</TableHead>
          <TableHead>Rol</TableHead>
          <TableHead>Departamento</TableHead>
          <TableHead>Proyectos Asignados</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead className="text-right">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Juan Pérez</div>
                <div className="text-sm text-muted-foreground">juan.perez@ejemplo.com</div>
              </div>
            </div>
          </TableCell>
          <TableCell>Gerente de Proyecto</TableCell>
          <TableCell>Tecnología</TableCell>
          <TableCell>3</TableCell>
          <TableCell>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Activo
            </Badge>
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
                <DropdownMenuItem>Ver Perfil</DropdownMenuItem>
                <DropdownMenuItem>Editar Rol</DropdownMenuItem>
                <DropdownMenuItem>Asignar a Proyecto</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">Eliminar</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                <AvatarFallback>AP</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Ana Pérez</div>
                <div className="text-sm text-muted-foreground">ana.perez@ejemplo.com</div>
              </div>
            </div>
          </TableCell>
          <TableCell>Diseñador UX/UI</TableCell>
          <TableCell>Diseño</TableCell>
          <TableCell>2</TableCell>
          <TableCell>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Activo
            </Badge>
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
                <DropdownMenuItem>Ver Perfil</DropdownMenuItem>
                <DropdownMenuItem>Editar Rol</DropdownMenuItem>
                <DropdownMenuItem>Asignar a Proyecto</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">Eliminar</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                <AvatarFallback>CG</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Carlos García</div>
                <div className="text-sm text-muted-foreground">carlos.garcia@ejemplo.com</div>
              </div>
            </div>
          </TableCell>
          <TableCell>Desarrollador Full Stack</TableCell>
          <TableCell>Tecnología</TableCell>
          <TableCell>4</TableCell>
          <TableCell>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Activo
            </Badge>
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
                <DropdownMenuItem>Ver Perfil</DropdownMenuItem>
                <DropdownMenuItem>Editar Rol</DropdownMenuItem>
                <DropdownMenuItem>Asignar a Proyecto</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">Eliminar</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">María Rodríguez</div>
                <div className="text-sm text-muted-foreground">maria.rodriguez@ejemplo.com</div>
              </div>
            </div>
          </TableCell>
          <TableCell>Especialista en Marketing</TableCell>
          <TableCell>Marketing</TableCell>
          <TableCell>2</TableCell>
          <TableCell>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Activo
            </Badge>
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
                <DropdownMenuItem>Ver Perfil</DropdownMenuItem>
                <DropdownMenuItem>Editar Rol</DropdownMenuItem>
                <DropdownMenuItem>Asignar a Proyecto</DropdownMenuItem>
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

