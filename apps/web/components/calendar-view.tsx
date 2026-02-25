"use client"

import { useState } from "react"
import { format, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isSameDay, addDays, subDays } from "date-fns"
import { es } from "date-fns/locale"

// Datos de ejemplo para eventos
const events = [
  {
    id: 1,
    title: "Reunión de Planificación",
    project: "Campaña de Marketing Q2",
    date: new Date(2025, 2, 5),
    time: "10:00 - 11:30",
  },
  {
    id: 2,
    title: "Revisión de Diseño",
    project: "Rediseño de Sitio Web",
    date: new Date(2025, 2, 10),
    time: "14:00 - 15:00",
  },
  {
    id: 3,
    title: "Demo de Producto",
    project: "Implementación de CRM",
    date: new Date(2025, 2, 15),
    time: "11:00 - 12:00",
  },
  {
    id: 4,
    title: "Retrospectiva Sprint",
    project: "Desarrollo de App Móvil",
    date: new Date(2025, 2, 20),
    time: "16:00 - 17:00",
  },
  {
    id: 5,
    title: "Presentación a Stakeholders",
    project: "Rediseño de Sitio Web",
    date: new Date(2025, 2, 25),
    time: "09:30 - 11:00",
  },
]

export function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 2, 1))
  const [view, setView] = useState("month")

  const renderMonthView = () => {
    const days = eachDayOfInterval({
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0),
    })

    return (
      <div className="grid grid-cols-7 gap-1">
        {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((day) => (
          <div key={day} className="text-center font-medium p-2">
            {day}
          </div>
        ))}
        {days.map((day) => {
          const dayEvents = events.filter((event) => isSameDay(event.date, day))
          return (
            <div
              key={day.toString()}
              className={`min-h-[100px] p-1 border ${isSameMonth(day, currentDate) ? "bg-white" : "bg-gray-100"}`}
            >
              <div className="font-medium text-sm">{format(day, "d")}</div>
              {dayEvents.map((event) => (
                <div
                  key={event.id}
                  className="text-xs p-1 mb-1 rounded bg-blue-100 truncate"
                  title={`${event.title} - ${event.time}`}
                >
                  {event.title}
                </div>
              ))}
            </div>
          )
        })}
      </div>
    )
  }

  const renderWeekView = () => {
    const start = startOfWeek(currentDate, { weekStartsOn: 1 })
    const end = endOfWeek(currentDate, { weekStartsOn: 1 })
    const days = eachDayOfInterval({ start, end })

    return (
      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => (
          <div key={day.toString()} className="border p-2">
            <div className="font-medium">{format(day, "EEEE", { locale: es })}</div>
            <div className="text-sm">{format(day, "d MMM")}</div>
            {events
              .filter((event) => isSameDay(event.date, day))
              .map((event) => (
                <div key={event.id} className="text-xs p-1 mt-1 bg-blue-100 rounded">
                  {event.title} - {event.time}
                </div>
              ))}
          </div>
        ))}
      </div>
    )
  }

  const renderDayView = () => {
    const dayEvents = events.filter((event) => isSameDay(event.date, currentDate))

    return (
      <div className="border p-4">
        <h3 className="font-bold text-lg mb-4">{format(currentDate, "EEEE, d MMMM yyyy", { locale: es })}</h3>
        {dayEvents.length > 0 ? (
          dayEvents.map((event) => (
            <div key={event.id} className="mb-2 p-2 bg-blue-100 rounded">
              <div className="font-medium">{event.title}</div>
              <div className="text-sm">{event.time}</div>
              <div className="text-sm text-gray-600">{event.project}</div>
            </div>
          ))
        ) : (
          <p>No hay eventos programados para este día.</p>
        )}
      </div>
    )
  }

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <button onClick={() => setCurrentDate((prev) => subDays(prev, view === "day" ? 1 : view === "week" ? 7 : 30))}>
          Anterior
        </button>
        <select value={view} onChange={(e) => setView(e.target.value)}>
          <option value="month">Mes</option>
          <option value="week">Semana</option>
          <option value="day">Día</option>
        </select>
        <button onClick={() => setCurrentDate((prev) => addDays(prev, view === "day" ? 1 : view === "week" ? 7 : 30))}>
          Siguiente
        </button>
      </div>
      {view === "month" && renderMonthView()}
      {view === "week" && renderWeekView()}
      {view === "day" && renderDayView()}
    </div>
  )
}

