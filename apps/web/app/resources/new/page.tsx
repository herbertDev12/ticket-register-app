"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { BarChart3, Save, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DashboardNav } from "@/components/dashboard-nav"
import { UserNav } from "@/components/user-nav"
import { useData } from "@/contexts/DataContext"

export default function NewResourcePage() {
  const router = useRouter()
  const { addResource, projects } = useData()
  const [resourceData, setResourceData] = useState({
    name: "",
    type: "",
    quantity: 0,
    assignedTo: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setResourceData((prev) => ({ ...prev, [name]: name === "quantity" ? Number.parseInt(value) : value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setResourceData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addResource(resourceData)
    router.push("/resources")
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
            <h1 className="text-3xl font-bold tracking-tight">Nuevo Recurso</h1>
            <div className="flex items-center gap-2">
              <Link href="/resources">
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
                <CardTitle>Información del Recurso</CardTitle>
                <CardDescription>Ingresa los detalles del nuevo recurso</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nombre del Recurso</Label>
                  <Input
                    id="name"
                    name="name"
                    value={resourceData.name}
                    onChange={handleInputChange}
                    placeholder="Ingresa el nombre del recurso"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="type">Tipo de Recurso</Label>
                  <Select onValueChange={handleSelectChange("type")}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona el tipo de recurso" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hardware">Hardware</SelectItem>
                      <SelectItem value="software">Software</SelectItem>
                      <SelectItem value="human">Humano</SelectItem>
                      <SelectItem value="financial">Financiero</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="quantity">Cantidad</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="number"
                    value={resourceData.quantity}
                    onChange={handleInputChange}
                    placeholder="Ingresa la cantidad"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="assignedTo">Asignado a</Label>
                  <Select onValueChange={handleSelectChange("assignedTo")}>
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
                  Guardar Recurso
                </Button>
              </CardFooter>
            </form>
          </Card>
        </main>
      </div>
    </div>
  )
}

