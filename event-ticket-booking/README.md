# Internal Department Event Ticket Booking System

A complete, fully functional, beginner-friendly **React JS web application** for booking tickets to an internal department event. This project demonstrates core React fundamentals and features a modern, responsive user interface built using **Vite** and **Tailwind CSS v4**.

It is ideal for college academic practicals, project demonstrations, and viva examinations.

---

## 🚀 Technologies Used

*   **React JS** (v18)
*   **Vite** (Next-generation frontend tooling)
*   **Tailwind CSS v4** (Utility-first styling framework)
*   **JavaScript (ES6+)**
*   **Lucide React** (Modern, clean icon pack)
*   **HTML5 & CSS3**

---

## ⚡ React Concepts Demonstrated

*   **Functional Components**: Modulized, reusable components for different sections of the page.
*   **JSX**: Embedding XML-like markup directly in JavaScript.
*   **useState Hook**: Managing state for ticket counts, booking submissions, form values, and error validation.
*   **Props**: Passing configuration and state change handlers between parent and child components.
*   **Event Handling**: Managing user interactions (clicks, input changes, form submissions, and reset events).
*   **Conditional Rendering**: Dynamically swapping between the booking form and the booking summary upon successful ticket registration, and displaying "Sold Out" states.
*   **Form Validation**: Client-side field checking, custom email regex verification, and dynamic ticket capacity checking.

---

## 🌟 Features

1.  **Dynamic Ticket Availability**: Tickets start at 100 and decrease dynamically with each successful booking.
2.  **Overbooking Prevention**: Ensures bookings cannot exceed currently available tickets.
3.  **Strict Form Validation**:
    *   Mandatory check for all fields (Name, Email, Department, Tickets).
    *   Regex-based validation for email ID format.
    *   Ticket count checks: must be positive, non-zero, integers, and within availability limits.
4.  **Booking Summary Screen**: On successful booking, presents a clean, invoice-like digital ticket displaying event metadata, details of the attendee, ticket counts, and total amount.
5.  **Stateful Reset Buttons**: Clear form inputs and validation errors without altering the global tickets booked tally.
6.  **Interactive Sold Out Badge**: Disables booking controls and presents a clean "Sold Out" state card if availability reaches 0.
7.  **Responsive Layout**: Optimized using CSS Flexbox/Grid for Desktop, Tablet, and Mobile screens.

---

## 📂 Project Structure

```text
event-ticket-booking/
├── package.json          # Node dependencies and project scripts
├── vite.config.js       # Vite configuration with Tailwind CSS plugin
├── index.html           # Main entry HTML file with Google Font imports
├── README.md            # Project documentation
└── src/
    ├── main.jsx         # App mounting entry point
    ├── App.jsx          # Main application state and layout
    ├── index.css        # Tailwind and custom utility CSS styles
    └── components/
        ├── Header.jsx         # App header with logo & subtitle
        ├── EventDetails.jsx   # Event metadata card and ticket counter
        ├── BookingForm.jsx    # Stateful booking inputs and validation rules
        ├── BookingSummary.jsx # Post-booking invoice ticket and success feedback
        └── ErrorMessage.jsx   # Reusable inline error text indicator
```

---

## 🛠️ Installation & Running

Follow these steps to run the project locally on your machine:

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

3.  **Open the application**:
    Open the development URL (usually `http://localhost:5173`) in your web browser.
