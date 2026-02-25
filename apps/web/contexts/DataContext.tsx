"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Project = {
  id: string
  title: string
  description: string
  startDate: string
  endDate: string
  status: string
}

type Task = {
  id: string
  title: string
  description: string
  projectId: string
  assignedTo: string
  dueDate: string
  status: string
}

type TeamMember = {
  id: string
  name: string
  email: string
  role: string
}

type Event = {
  id: string
  title: string
  description: string
  date: string
  projectId: string
}

type Resource = {
  id: string
  name: string
  type: string
  quantity: number
  assignedTo: string
}

type DataContextType = {
  projects: Project[]
  tasks: Task[]
  teamMembers: TeamMember[]
  events: Event[]
  resources: Resource[]
  addProject: (project: Omit<Project, "id">) => void
  editProject: (id: string, project: Partial<Project>) => void
  deleteProject: (id: string) => void
  addTask: (task: Omit<Task, "id">) => void
  editTask: (id: string, task: Partial<Task>) => void
  deleteTask: (id: string) => void
  addTeamMember: (member: Omit<TeamMember, "id">) => void
  editTeamMember: (id: string, member: Partial<TeamMember>) => void
  deleteTeamMember: (id: string) => void
  addEvent: (event: Omit<Event, "id">) => void
  editEvent: (id: string, event: Partial<Event>) => void
  deleteEvent: (id: string) => void
  addResource: (resource: Omit<Resource, "id">) => void
  editResource: (id: string, resource: Partial<Resource>) => void
  deleteResource: (id: string) => void
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([])
  const [tasks, setTasks] = useState<Task[]>([])
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [events, setEvents] = useState<Event[]>([])
  const [resources, setResources] = useState<Resource[]>([])

  useEffect(() => {
    const loadedProjects = localStorage.getItem("projects")
    const loadedTasks = localStorage.getItem("tasks")
    const loadedTeamMembers = localStorage.getItem("teamMembers")
    const loadedEvents = localStorage.getItem("events")
    const loadedResources = localStorage.getItem("resources")

    if (loadedProjects) setProjects(JSON.parse(loadedProjects))
    if (loadedTasks) setTasks(JSON.parse(loadedTasks))
    if (loadedTeamMembers) setTeamMembers(JSON.parse(loadedTeamMembers))
    if (loadedEvents) setEvents(JSON.parse(loadedEvents))
    if (loadedResources) setResources(JSON.parse(loadedResources))
  }, [])

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects))
    localStorage.setItem("tasks", JSON.stringify(tasks))
    localStorage.setItem("teamMembers", JSON.stringify(teamMembers))
    localStorage.setItem("events", JSON.stringify(events))
    localStorage.setItem("resources", JSON.stringify(resources))
  }, [projects, tasks, teamMembers, events, resources])

  const addProject = (project: Omit<Project, "id">) => {
    setProjects([...projects, { ...project, id: Date.now().toString() }])
  }

  const editProject = (id: string, project: Partial<Project>) => {
    setProjects(projects.map((p) => (p.id === id ? { ...p, ...project } : p)))
  }

  const deleteProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id))
  }

  const addTask = (task: Omit<Task, "id">) => {
    setTasks([...tasks, { ...task, id: Date.now().toString() }])
  }

  const editTask = (id: string, task: Partial<Task>) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, ...task } : t)))
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  const addTeamMember = (member: Omit<TeamMember, "id">) => {
    setTeamMembers([...teamMembers, { ...member, id: Date.now().toString() }])
  }

  const editTeamMember = (id: string, member: Partial<TeamMember>) => {
    setTeamMembers(teamMembers.map((m) => (m.id === id ? { ...m, ...member } : m)))
  }

  const deleteTeamMember = (id: string) => {
    setTeamMembers(teamMembers.filter((m) => m.id !== id))
  }

  const addEvent = (event: Omit<Event, "id">) => {
    setEvents([...events, { ...event, id: Date.now().toString() }])
  }

  const editEvent = (id: string, event: Partial<Event>) => {
    setEvents(events.map((e) => (e.id === id ? { ...e, ...event } : e)))
  }

  const deleteEvent = (id: string) => {
    setEvents(events.filter((e) => e.id !== id))
  }

  const addResource = (resource: Omit<Resource, "id">) => {
    setResources([...resources, { ...resource, id: Date.now().toString() }])
  }

  const editResource = (id: string, resource: Partial<Resource>) => {
    setResources(resources.map((r) => (r.id === id ? { ...r, ...resource } : r)))
  }

  const deleteResource = (id: string) => {
    setResources(resources.filter((r) => r.id !== id))
  }

  return (
    <DataContext.Provider
      value={{
        projects,
        tasks,
        teamMembers,
        events,
        resources,
        addProject,
        editProject,
        deleteProject,
        addTask,
        editTask,
        deleteTask,
        addTeamMember,
        editTeamMember,
        deleteTeamMember,
        addEvent,
        editEvent,
        deleteEvent,
        addResource,
        editResource,
        deleteResource,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  const context = useContext(DataContext)
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider")
  }
  return context
}

