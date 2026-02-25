import Link from "next/link"
import { BarChart3, Send, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DashboardNav } from "@/components/dashboard-nav"
import { UserNav } from "@/components/user-nav"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function InviteMemberPage() {
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
            <Link href="/team" className="text-sm font-medium text-primary">
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
            <h1 className="text-3xl font-bold tracking-tight">Invitar Miembro</h1>
            <div className="flex items-center gap-2">
              <Link href="/team">
                <Button variant="outline">
                  <X className="mr-2 h-4 w-4" />
                  Cancelar
                </Button>
              </Link>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Invitar Nuevo Miembro</CardTitle>
              <CardDescription>Envía invitaciones a nuevos miembros para unirse a tu equipo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="emails">Correos Electrónicos</Label>
                <Textarea
                  id="emails"
                  placeholder="Ingresa las direcciones de correo electrónico separadas por comas"
                  className="min-h-[100px]"
                />
                <p className="text-sm text-muted-foreground">
                  Puedes invitar a múltiples personas a la vez separando sus correos con comas.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Rol</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un rol" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="member">Miembro</SelectItem>
                    <SelectItem value="admin">Administrador</SelectItem>
                    <SelectItem value="viewer">Visualizador</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="department">Departamento</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un departamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Tecnología</SelectItem>
                    <SelectItem value="design">Diseño</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Ventas</SelectItem>
                    <SelectItem value="hr">Recursos Humanos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje Personalizado (opcional)</Label>
                <Textarea
                  id="message"
                  placeholder="Escribe un mensaje personalizado para incluir en la invitación"
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                <X className="mr-2 h-4 w-4" />
                Cancelar
              </Button>
              <Button>
                <Send className="mr-2 h-4 w-4" />
                Enviar Invitaciones
              </Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  )
}

