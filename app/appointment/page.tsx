"use client";

import { useState } from "react";

function getAvailability(dateStr: string): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const day = date.getDay();

  if (day === 5 || day === 6) {
    return "Available: 10:00 AM to 5:00 PM";
  }
  return "Available: 6:00 PM to 8:00 PM";
}

export default function AppointmentPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !phone || !email || !date) {
      setError(
        "Please fill in your name, phone number, email, and preferred date."
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, date, reason }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      const whatsappMessage = `New Appointment Request:%0A%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0APreferred Date: ${date}%0AReason: ${
        reason || "Not specified"
      }`;
      const whatsappUrl = `https://wa.me/923007582959?text=${whatsappMessage}`;

      setSuccess(true);
      setLoading(false);
      window.open(whatsappUrl, "_blank");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  if (success) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-teal-50 to-white">
        <div className="text-center max-w-md bg-white p-10 rounded-2xl shadow-lg border border-teal-100">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">✓</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            Appointment Request Sent
          </h1>
          <p className="mt-4 text-gray-600">
            Thank you, {name}. Your appointment request has been received.
            You will get a confirmation email once Dr. Ejaz Qamar reviews
            your request. A WhatsApp message window has also been opened
            for you to send directly.
          </p>
          <button
            onClick={() => {
              setSuccess(false);
              setName("");
              setPhone("");
              setEmail("");
              setDate("");
              setReason("");
            }}
            className="mt-6 bg-teal-700 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-800 transition-colors"
          >
            Book Another Appointment
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-16 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            ORTHOPAEDIC CARE
          </span>
          <h1 className="text-3xl font-bold text-gray-900">
            Book an Appointment
          </h1>
          <p className="mt-2 text-gray-600">
            Fill in your details below. Dr. Ejaz Qamar will confirm your
            appointment.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg border border-teal-100 p-8 space-y-5"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
              placeholder="03XX-XXXXXXX"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
              placeholder="you@example.com"
            />
            <p className="mt-1 text-xs text-gray-500">
              You will receive your appointment confirmation here.
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1.5">
              Preferred Date
            </label>
            <input
              type="date"
              value={date}
              min={today}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
            />
            {date && (
              <p className="mt-1.5 text-sm text-teal-700 font-medium bg-teal-50 px-3 py-1.5 rounded-md inline-block">
                {getAvailability(date)}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1.5">
              Reason for Visit (Optional)
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
              placeholder="Briefly describe your concern"
            />
          </div>

          {error && (
            <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-800 transition-colors disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Appointment Request"}
          </button>
        </form>
      </div>
    </main>
  );
}
