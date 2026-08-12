import React from "react";
import { Calendar, Clock, MapPin, Landmark, Coins, Ticket, CheckCircle2 } from "lucide-react";

export default function EventDetails({ event, availableTickets }) {
  const {
    name,
    department,
    institution,
    date,
    time,
    venue,
    ticketPrice,
    totalTickets,
  } = event;

  const progressPercent = (availableTickets / totalTickets) * 100;
  
  // Dynamic color for ticket counter and progress bar
  let ticketStatusColor = "text-emerald-400";
  let barColor = "bg-emerald-500 shadow-emerald-500/20";
  if (availableTickets === 0) {
    ticketStatusColor = "text-rose-500";
    barColor = "bg-rose-500 shadow-rose-500/20";
  } else if (availableTickets <= 20) {
    ticketStatusColor = "text-amber-500";
    barColor = "bg-amber-500 shadow-amber-500/20";
  }

  return (
    <div className="glass-panel glass-panel-hover rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full shadow-xl">
      <div>
        <div className="flex justify-between items-start gap-4 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Upcoming Event
          </span>
          {availableTickets === 0 && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-500/15 text-rose-400 border border-rose-500/30 animate-pulse">
              Sold Out
            </span>
          )}
        </div>

        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
          {name}
        </h2>

        {/* Institution & Department */}
        <div className="mt-4 space-y-2 border-b border-slate-800/60 pb-4">
          <div className="flex items-start gap-2 text-slate-300 text-sm">
            <Landmark className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">{institution}</p>
              <p className="text-xs text-slate-400 font-medium">{department}</p>
            </div>
          </div>
        </div>

        {/* Event Schedule Info */}
        <div className="mt-5 space-y-3.5">
          <div className="flex items-center gap-3 text-slate-300 text-sm">
            <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
              <Calendar className="w-4 h-4 text-indigo-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Date</p>
              <p className="font-medium">{date}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-slate-300 text-sm">
            <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
              <Clock className="w-4 h-4 text-indigo-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Time</p>
              <p className="font-medium">{time}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-slate-300 text-sm">
            <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
              <MapPin className="w-4 h-4 text-indigo-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Venue</p>
              <p className="font-medium">{venue}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-slate-300 text-sm">
            <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
              <Coins className="w-4 h-4 text-indigo-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Ticket Price</p>
              <p className="font-semibold text-indigo-300">₹{ticketPrice} per ticket</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ticket Counter & Progress bar */}
      <div className="mt-8 pt-6 border-t border-slate-800/60">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Ticket className="w-4.5 h-4.5 text-indigo-400" />
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Availability</span>
          </div>
          <span className={`text-sm font-extrabold ${ticketStatusColor}`}>
            {availableTickets === 0 
              ? "Sold Out" 
              : `${availableTickets} / ${totalTickets} Tickets Left`}
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
          <div 
            className={`h-full rounded-full transition-all duration-500 ease-out shadow-sm ${barColor}`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
