import React from "react";
import { CheckCircle2, Ticket, Calendar, MapPin, Sparkles, User, GraduationCap, Coins, Mail, PlusCircle } from "lucide-react";

export default function BookingSummary({ booking, event, onBookMore }) {
  if (!booking) return null;

  const { name, email, department, tickets } = booking;
  const { name: eventName, date, venue, ticketPrice } = event;
  const totalAmount = tickets * ticketPrice;

  return (
    <div className="glass-panel rounded-3xl overflow-hidden shadow-2xl border border-emerald-500/20 animate-fadeIn">
      {/* Top Banner Success Message */}
      <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-b border-emerald-500/20 px-6 py-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl -z-10" />
        <div className="inline-flex items-center justify-center bg-emerald-500/20 p-3 rounded-full mb-3 shadow-inner">
          <CheckCircle2 className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-xl font-bold text-emerald-400">Booking Successful!</h3>
        <p className="text-sm text-slate-300 mt-1">
          Your tickets have been successfully booked.
        </p>
      </div>

      {/* Ticket Details Body */}
      <div className="p-6 md:p-8 space-y-6">
        
        {/* Ticket Header (Event Details) */}
        <div className="bg-slate-950/50 border border-slate-900 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Event Ticket</span>
            <h4 className="font-bold text-slate-100">{eventName}</h4>
            <div className="flex items-center gap-3 text-slate-400 text-xs mt-1">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {date}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {venue}
              </span>
            </div>
          </div>
          
          <div className="flex sm:flex-col items-baseline sm:items-end justify-between border-t sm:border-t-0 sm:border-l border-slate-800 pt-3 sm:pt-0 sm:pl-4 shrink-0">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Total Amount</span>
            <span className="text-2xl font-extrabold text-indigo-300">₹{totalAmount}</span>
          </div>
        </div>

        {/* Attendee Details */}
        <div className="space-y-4">
          <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Attendee Summary</h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Name */}
            <div className="flex items-start gap-2.5">
              <User className="w-4 h-4 text-indigo-400 mt-0.5" />
              <div>
                <p className="text-[11px] text-slate-500 font-semibold uppercase">Name</p>
                <p className="text-sm font-medium text-slate-200">{name}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-indigo-400 mt-0.5" />
              <div>
                <p className="text-[11px] text-slate-500 font-semibold uppercase">Email ID</p>
                <p className="text-sm font-medium text-slate-200 truncate max-w-[200px]">{email}</p>
              </div>
            </div>

            {/* Department */}
            <div className="flex items-start gap-2.5">
              <GraduationCap className="w-4 h-4 text-indigo-400 mt-0.5" />
              <div>
                <p className="text-[11px] text-slate-500 font-semibold uppercase">Department</p>
                <p className="text-sm font-medium text-slate-200">{department}</p>
              </div>
            </div>

            {/* Ticket Breakdown */}
            <div className="flex items-start gap-2.5">
              <Ticket className="w-4 h-4 text-indigo-400 mt-0.5" />
              <div>
                <p className="text-[11px] text-slate-500 font-semibold uppercase">Tickets Booked</p>
                <p className="text-sm font-medium text-slate-200">
                  {tickets} {tickets === 1 ? "Ticket" : "Tickets"}
                  <span className="text-xs text-slate-400 ml-1.5 font-normal">
                    (₹{ticketPrice} &times; {tickets})
                  </span>
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Print / Done Button */}
        <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row gap-3">
          <button
            onClick={onBookMore}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold py-2.5 px-4 rounded-xl shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-98 transition-all cursor-pointer text-sm"
          >
            <PlusCircle className="w-4 h-4" />
            Book More Tickets
          </button>
        </div>

      </div>
    </div>
  );
}
