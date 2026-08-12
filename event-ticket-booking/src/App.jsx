import React, { useState } from "react";
import Header from "./components/Header";
import EventDetails from "./components/EventDetails";
import BookingForm from "./components/BookingForm";
import BookingSummary from "./components/BookingSummary";

const EVENT_INFO = {
  name: "TechFest 2026",
  department: "Department of Computer Science and Engineering",
  institution: "Veltech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
  date: "25 August 2026",
  time: "10:00 AM – 4:00 PM",
  venue: "Department Seminar Hall",
  ticketPrice: 100,
  totalTickets: 100,
};

export default function App() {
  const [availableTickets, setAvailableTickets] = useState(EVENT_INFO.totalTickets);
  const [currentBooking, setCurrentBooking] = useState(null);

  // Callback after successful form submission and validations
  const handleBooking = (bookingData) => {
    // Double check capacity in App.jsx to prevent overbooking state issues
    if (bookingData.tickets > availableTickets) {
      return; // Safeguard
    }

    // Safely update available tickets state avoiding race conditions
    setAvailableTickets((prevAvailable) => prevAvailable - bookingData.tickets);

    // Set currently successful booking summary data to show summary screen
    setCurrentBooking(bookingData);
  };

  // Callback to return back to form and allow subsequent bookings
  const handleBookMore = () => {
    setCurrentBooking(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
      {/* Header section */}
      <Header />

      {/* Main Grid Content */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-4">
        
        {/* Left Side: Event Details (takes 5/12 columns on desktop) */}
        <section className="lg:col-span-5 h-full">
          <EventDetails event={EVENT_INFO} availableTickets={availableTickets} />
        </section>

        {/* Right Side: Interactive Booking Module (takes 7/12 columns on desktop) */}
        <section className="lg:col-span-7 h-full">
          {currentBooking ? (
            <BookingSummary
              booking={currentBooking}
              event={EVENT_INFO}
              onBookMore={handleBookMore}
            />
          ) : (
            <BookingForm
              availableTickets={availableTickets}
              onBook={handleBooking}
            />
          )}
        </section>
        
      </main>

      {/* Footer copyright */}
      <footer className="text-center mt-16 text-xs text-slate-500 font-medium">
        &copy; {new Date().getFullYear()} {EVENT_INFO.institution}. All rights reserved.
      </footer>
    </div>
  );
}
