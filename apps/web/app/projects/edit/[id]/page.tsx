"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Save, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/date-picker"
import { DashboardNav } from "@/components/dashboard-nav"
import { useData } from "@/contexts/DataContext"

export default function EditProjectPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { projects, editProject } = useData()
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "",
  })

  useEffect(() => {
    const project = projects.find((p) => p.id === params.id)
    if (project) {
      setProjectData(project)
    }
  }, [params.id, projects])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProjectData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setProjectData((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateChange = (name: string) => (date: Date | undefined) => {
    if (date) {
      setProjectData((prev) => ({ ...prev, [name]: date.toISOString() }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    editProject(params.id, projectData)
    router.push("/projects")
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header y navegación... */}
      <div className="grid flex-1 md:grid-cols-[220px_1fr]">
        <aside className="hidden border-r bg-muted/40 md:block">
          <DashboardNav />
        </aside>
        <main className="flex flex-col gap-6 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Editar Proyecto</h1>
            <div className="flex items-center gap-2">
              <Link href="/projects">
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
                <CardTitle>Información del Proyecto</CardTitle>
                <CardDescription>Edita los detalles del proyecto</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Nombre del Proyecto</Label>
                  <Input
                    id="title"
                    name="title"
                    value={projectData.title}
                    onChange={handleInputChange}
                    placeholder="Ingresa el nombre del proyecto"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Descripción</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={projectData.description}
                    onChange={handleInputChange}
                    placeholder="Describe el proyecto y sus objetivos"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="startDate">Fecha de Inicio</Label>
                    <DatePicker
                      onSelect={handleDateChange("startDate")}
                      defaultDate={new Date(projectData.startDate)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="endDate">Fecha de Finalización</Label>
                    <DatePicker onSelect={handleDateChange("endDate")} defaultDate={new Date(projectData.endDate)} />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="status">Estado</Label>
                  <Select onValueChange={handleSelectChange("status")} defaultValue={projectData.status}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona el estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="planning">Planificación</SelectItem>
                      <SelectItem value="in-progress">En Progreso</SelectItem>
                      <SelectItem value="completed">Completado</SelectItem>
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

