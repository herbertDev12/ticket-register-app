import Link from "next/link"
import { BarChart3, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DashboardNav } from "@/components/dashboard-nav"
import { UserNav } from "@/components/user-nav"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Configuración</h1>
          </div>

          <Tabs defaultValue="profile">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">Perfil</TabsTrigger>
              <TabsTrigger value="account">Cuenta</TabsTrigger>
              <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Información de Perfil</CardTitle>
                  <CardDescription>Actualiza tu información personal y preferencias</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo</Label>
                    <Input id="name" defaultValue="Juan Pérez" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" defaultValue="juan.perez@ejemplo.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Cargo</Label>
                    <Input id="title" defaultValue="Gerente de Proyecto" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Biografía</Label>
                    <Textarea id="bio" placeholder="Escribe una breve biografía..." />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Guardar Cambios
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="account" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Configuración de Cuenta</CardTitle>
                  <CardDescription>Administra la configuración de tu cuenta</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Idioma</Label>
                    <Select defaultValue="es">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un idioma" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="fr">Français</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Zona Horaria</Label>
                    <Select defaultValue="utc-3">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una zona horaria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="utc-3">UTC-03:00 Buenos Aires</SelectItem>
                        <SelectItem value="utc-5">UTC-05:00 Bogotá, Lima</SelectItem>
                        <SelectItem value="utc-6">UTC-06:00 Ciudad de México</SelectItem>
                        <SelectItem value="utc+1">UTC+01:00 Madrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="marketing">Recibir correos de marketing</Label>
                      <Switch id="marketing" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Guardar Cambios
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Preferencias de Notificaciones</CardTitle>
                  <CardDescription>Configura cómo y cuándo quieres recibir notificaciones</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Notificaciones por correo electrónico</Label>
                        <p className="text-sm text-muted-foreground">Recibe actualizaciones por correo electrónico</p>
                      </div>
                      <Switch id="email-notifications" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Notificaciones en la aplicación</Label>
                        <p className="text-sm text-muted-foreground">Recibe notificaciones dentro de la aplicación</p>
                      </div>
                      <Switch id="app-notifications" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Notificaciones de tareas asignadas</Label>
                        <p className="text-sm text-muted-foreground">
                          Recibe notificaciones cuando se te asigna una tarea
                        </p>
                      </div>
                      <Switch id="task-notifications" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Notificaciones de comentarios</Label>
                        <p className="text-sm text-muted-foreground">
                          Recibe notificaciones cuando alguien comenta en tus tareas
                        </p>
                      </div>
                      <Switch id="comment-notifications" defaultChecked />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Guardar Cambios
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

