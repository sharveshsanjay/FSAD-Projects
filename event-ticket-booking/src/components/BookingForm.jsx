import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { User, Mail, GraduationCap, Tickets, RotateCcw, AlertTriangle } from "lucide-react";

export default function BookingForm({ availableTickets, onBook }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    tickets: "",
  });

  const [errors, setErrors] = useState({});

  const isSoldOut = availableTickets === 0;

  const departments = [
    "Computer Science and Engineering",
    "Information Technology",
    "Electronics and Communication Engineering",
    "Electrical and Electronics Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Other",
  ];

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for that field as they type
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Reset functionality
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      department: "",
      tickets: "",
    });
    setErrors({});
  };

  // Submit Handler with Client-side validations
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSoldOut) return;

    const newErrors = {};

    // 1. Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    // 2. Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else {
      // Standard email regex that rejects student@, student.com@, student, etc.
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    // 3. Department validation
    if (!formData.department) {
      newErrors.department = "Department is required.";
    }

    // 4. Ticket count validation
    const ticketValue = formData.tickets;
    if (ticketValue === "" || ticketValue === undefined) {
      newErrors.tickets = "Please enter the number of tickets.";
    } else {
      const parsedTickets = Number(ticketValue);
      if (isNaN(parsedTickets)) {
        newErrors.tickets = "Please enter a valid number.";
      } else if (parsedTickets < 0) {
        newErrors.tickets = "Number of tickets must be positive.";
      } else if (parsedTickets === 0) {
        newErrors.tickets = "Number of tickets must be at least 1.";
      } else if (!Number.isInteger(parsedTickets)) {
        newErrors.tickets = "Number of tickets must be a whole number.";
      } else if (parsedTickets > availableTickets) {
        newErrors.tickets = `Only ${availableTickets} tickets are available.`;
      }
    }

    // Set errors or proceed
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // Call parenting handler to store booking
      onBook({
        name: formData.name.trim(),
        email: formData.email.trim(),
        department: formData.department,
        tickets: parseInt(formData.tickets, 10),
      });
      // Clear form inputs after booking
      handleReset();
    }
  };

  return (
    <div className="glass-panel rounded-3xl p-6 md:p-8 shadow-xl">
      <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-3">
        <Tickets className="w-5 h-5 text-indigo-400" />
        <h2 className="text-xl font-bold text-slate-100">Book Your Tickets</h2>
      </div>

      {isSoldOut ? (
        <div className="flex flex-col items-center justify-center py-10 px-4 text-center bg-rose-500/10 border border-rose-500/20 rounded-2xl animate-pulse">
          <AlertTriangle className="w-12 h-12 text-rose-500 mb-3" />
          <h3 className="text-lg font-bold text-rose-400">Tickets Sold Out</h3>
          <p className="text-sm text-slate-400 mt-1 max-w-xs">
            We are sorry, but all tickets for this event have been fully booked.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Full Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500">
                <User className="w-4 h-4" />
              </span>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`w-full bg-slate-900/60 border ${
                  errors.name ? "border-rose-500/60 focus:ring-rose-500/30" : "border-slate-800 focus:ring-indigo-500/30"
                } rounded-xl pl-10 pr-4 py-2.5 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-4 focus:border-indigo-500/60 transition-all`}
              />
            </div>
            <ErrorMessage message={errors.name} />
          </div>

          {/* Email ID Field */}
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500">
                <Mail className="w-4 h-4" />
              </span>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={`w-full bg-slate-900/60 border ${
                  errors.email ? "border-rose-500/60 focus:ring-rose-500/30" : "border-slate-800 focus:ring-indigo-500/30"
                } rounded-xl pl-10 pr-4 py-2.5 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-4 focus:border-indigo-500/60 transition-all`}
              />
            </div>
            <ErrorMessage message={errors.email} />
          </div>

          {/* Department Dropdown */}
          <div>
            <label htmlFor="department" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Department
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500">
                <GraduationCap className="w-4 h-4" />
              </span>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className={`w-full bg-slate-900/60 border ${
                  errors.department ? "border-rose-500/60 focus:ring-rose-500/30" : "border-slate-800 focus:ring-indigo-500/30"
                } rounded-xl pl-10 pr-4 py-2.5 text-slate-100 text-sm focus:outline-none focus:ring-4 focus:border-indigo-500/60 transition-all appearance-none cursor-pointer`}
              >
                <option value="" disabled className="text-slate-600 bg-slate-950">
                  Select your department
                </option>
                {departments.map((dept, idx) => (
                  <option key={idx} value={dept} className="bg-slate-950 text-slate-200">
                    {dept}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
            <ErrorMessage message={errors.department} />
          </div>

          {/* Number of Tickets Field */}
          <div>
            <label htmlFor="tickets" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Number of Tickets
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500">
                <Tickets className="w-4 h-4" />
              </span>
              <input
                type="number"
                id="tickets"
                name="tickets"
                value={formData.tickets}
                onChange={handleChange}
                placeholder="Enter number of tickets"
                min="1"
                step="1"
                className={`w-full bg-slate-900/60 border ${
                  errors.tickets ? "border-rose-500/60 focus:ring-rose-500/30" : "border-slate-800 focus:ring-indigo-500/30"
                } rounded-xl pl-10 pr-4 py-2.5 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-4 focus:border-indigo-500/60 transition-all`}
              />
            </div>
            <ErrorMessage message={errors.tickets} />
          </div>

          {/* Actions: Book & Reset Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-650 hover:to-purple-750 text-white font-semibold py-2.5 px-4 rounded-xl shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 active:scale-98 transition-all cursor-pointer text-sm"
            >
              Book Tickets
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-850 text-slate-300 font-medium py-2.5 px-4 rounded-xl border border-slate-800 hover:border-slate-700 active:scale-98 transition-all cursor-pointer text-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
