"use client"

import Link from "next/link"
import { BarChart3, ChevronLeft, ChevronRight, Plus, Edit, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DashboardNav } from "@/components/dashboard-nav"
import { UserNav } from "@/components/user-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarView } from "@/components/calendar-view"
import { useData } from "@/contexts/DataContext"

export default function CalendarPage() {
  const { events, deleteEvent } = useData()

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <BarChart3 className="h-6 w-6" />
            <span>ProjectPro</span>
          </Link>
          <UserNav />
        </div>
      </header>
      <div className="grid flex-1 md:grid-cols-[220px_1fr]">
        <aside className="hidden border-r bg-muted/40 md:block">
          <DashboardNav />
        </aside>
        <main className="flex flex-col gap-6 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Calendario</h1>
            <div className="flex items-center gap-2">
              <Link href="/calendar/event/new">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Nuevo Evento
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h2 className="text-xl font-semibold">Marzo 2025</h2>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="month">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Vista" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Día</SelectItem>
                  <SelectItem value="week">Semana</SelectItem>
                  <SelectItem value="month">Mes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <CalendarView />
            </CardContent>
          </Card>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Eventos Próximos</h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Título</th>
                  <th className="text-left">Fecha</th>
                  <th className="text-left">Proyecto</th>
                  <th className="text-left">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id}>
                    <td>{event.title}</td>
                    <td>{new Date(event.date).toLocaleDateString()}</td>
                    <td>{event.projectId}</td>
                    <td>
                      <div className="flex items-center gap-2">
                        <Link href={`/calendar/event/edit/${event.id}`}>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm" onClick={() => deleteEvent(event.id)}>
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}

