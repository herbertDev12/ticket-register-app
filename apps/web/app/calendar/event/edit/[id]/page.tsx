"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { BarChart3, Save, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/date-picker"
import { DashboardNav } from "@/components/dashboard-nav"
import { UserNav } from "@/components/user-nav"
import { useData } from "@/contexts/DataContext"

export default function EditEventPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { events, editEvent, projects } = useData()
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
    projectId: "",
  })

  useEffect(() => {
    const event = events.find((e) => e.id === params.id)
    if (event) {
      setEventData(event)
    }
  }, [events, params.id])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEventData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setEventData((prev) => ({ ...prev, projectId: value }))
  }

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setEventData((prev) => ({ ...prev, date: date.toISOString() }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    editEvent(params.id, eventData)
    router.push("/calendar")
  }

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
            <h1 className="text-3xl font-bold tracking-tight">Editar Evento</h1>
            <div className="flex items-center gap-2">
              <Link href="/calendar">
                <Button variant="outline">
                  <X className="mr-2 h-4 w-4" />
                  Cancelar
                </Button>
              </Link>
            </div>
          </div>

          <Card>
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Información del Evento</CardTitle>
                <CardDescription>Edita los detalles del evento</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Título del Evento</Label>
                  <Input
                    id="title"
                    name="title"
                    value={eventData.title}
                    onChange={handleInputChange}
                    placeholder="Ingresa el título del evento"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Descripción</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={eventData.description}
                    onChange={handleInputChange}
                    placeholder="Describe el evento"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="date">Fecha del Evento</Label>
                  <DatePicker onSelect={handleDateChange} defaultDate={new Date(eventData.date)} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="projectId">Proyecto Relacionado</Label>
                  <Select onValueChange={handleSelectChange} defaultValue={eventData.projectId}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un proyecto" />
                    </SelectTrigger>
                    <SelectContent>
                      {projects.map((project) => (
                        <SelectItem key={project.id} value={project.id}>
                          {project.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button type="submit">
                  <Save className="mr-2 h-4 w-4" />
                  Guardar Cambios
                </Button>
              </CardFooter>
            </form>
          </Card>
        </main>
      </div>
    </div>
  )
}

