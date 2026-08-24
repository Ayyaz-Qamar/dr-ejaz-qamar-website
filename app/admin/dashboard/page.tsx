"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Phone, Mail, Calendar, FileText, LogOut } from "lucide-react";

type Appointment = {
  id: number;
  name: string;
  phone: string;
  email: string;
  date: string;
  reason: string | null;
  status: string;
  createdAt: string;
};

export default function AdminDashboardPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const router = useRouter();

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/appointments");
      const data = await res.json();
      const sorted = data.sort(
        (a: Appointment, b: Appointment) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setAppointments(sorted);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const updateStatus = async (id: number, status: string) => {
    setUpdatingId(id);
    try {
      await fetch(`/api/appointments/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      await fetchAppointments();
    } catch (err) {
      console.error(err);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  };

  const pendingCount = appointments.filter((a) => a.status === "pending").length;
  const confirmedCount = appointments.filter((a) => a.status === "confirmed").length;
  const rejectedCount = appointments.filter((a) => a.status === "rejected").length;

  const filteredAppointments =
    filter === "all"
      ? appointments
      : appointments.filter((a) => a.status === filter);

  const statusStyles: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-800",
    confirmed: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
  };

  const borderStyles: Record<string, string> = {
    pending: "border-l-yellow-400",
    confirmed: "border-l-green-500",
    rejected: "border-l-red-400",
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 sm:px-6 py-6 sm:py-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <Image
              src="/images/doctor.jpg"
              alt="Dr. Muhammad Ejaz Qamar"
              width={52}
              height={52}
              className="rounded-full object-cover border-2 border-blue-100"
            />
            <div>
              <p className="font-semibold text-gray-900">
                Dr. Muhammad Ejaz Qamar
              </p>
              <p className="text-xs text-gray-500">
                Orthopaedic Surgeon & Specialist
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-1.5 self-start sm:self-auto text-sm font-medium text-red-700 border border-red-200 bg-red-50 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <button
            onClick={() => setFilter("pending")}
            className={`bg-white rounded-xl border p-4 text-center transition-all ${
              filter === "pending"
                ? "border-yellow-400 ring-2 ring-yellow-200"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <p className="text-2xl font-bold text-yellow-600">
              {pendingCount}
            </p>
            <p className="text-xs text-gray-500 mt-1">Pending</p>
          </button>
          <button
            onClick={() => setFilter("confirmed")}
            className={`bg-white rounded-xl border p-4 text-center transition-all ${
              filter === "confirmed"
                ? "border-green-400 ring-2 ring-green-200"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <p className="text-2xl font-bold text-green-600">
              {confirmedCount}
            </p>
            <p className="text-xs text-gray-500 mt-1">Confirmed</p>
          </button>
          <button
            onClick={() => setFilter("rejected")}
            className={`bg-white rounded-xl border p-4 text-center transition-all ${
              filter === "rejected"
                ? "border-red-400 ring-2 ring-red-200"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <p className="text-2xl font-bold text-red-600">
              {rejectedCount}
            </p>
            <p className="text-xs text-gray-500 mt-1">Rejected</p>
          </button>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg sm:text-xl font-bold text-gray-900">
            {filter === "all"
              ? "All Requests"
              : `${filter.charAt(0).toUpperCase()}${filter.slice(1)} Requests`}
          </h1>
          {filter !== "all" && (
            <button
              onClick={() => setFilter("all")}
              className="text-xs font-medium text-blue-700 hover:underline"
            >
              Show All
            </button>
          )}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 mb-6 text-sm text-blue-800">
          When you Confirm or Reject a request, the patient automatically
          receives an email notification. No further action needed.
        </div>

        {/* Appointments List */}
        {loading ? (
          <p className="text-gray-600">Loading appointments...</p>
        ) : filteredAppointments.length === 0 ? (
          <p className="text-gray-600">No appointment requests here.</p>
        ) : (
          <div className="space-y-3">
            {filteredAppointments.map((apt) => (
              <div
                key={apt.id}
                className={`bg-white rounded-xl border border-gray-200 border-l-4 shadow-sm p-4 sm:p-5 ${
                  borderStyles[apt.status] || "border-l-gray-300"
                }`}
              >
                <div className="flex items-start justify-between flex-wrap gap-3">
                  <div className="min-w-0 space-y-1">
                    <p className="font-semibold text-gray-900 break-words">
                      {apt.name}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-1.5">
                      <Phone size={13} className="text-gray-400 shrink-0" />
                      {apt.phone}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-1.5 break-all">
                      <Mail size={13} className="text-gray-400 shrink-0" />
                      {apt.email}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-1.5">
                      <Calendar size={13} className="text-gray-400 shrink-0" />
                      {apt.date}
                    </p>
                    {apt.reason && (
                      <p className="text-sm text-gray-600 flex items-start gap-1.5">
                        <FileText
                          size={13}
                          className="text-gray-400 shrink-0 mt-0.5"
                        />
                        <span className="break-words">{apt.reason}</span>
                      </p>
                    )}
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full capitalize shrink-0 ${
                      statusStyles[apt.status] || "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {apt.status}
                  </span>
                </div>

                {apt.status === "pending" && (
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <button
                      onClick={() => updateStatus(apt.id, "confirmed")}
                      disabled={updatingId === apt.id}
                      className="text-sm font-medium bg-green-700 text-white px-4 py-2.5 rounded-lg hover:bg-green-800 transition-colors disabled:opacity-60"
                    >
                      {updatingId === apt.id ? "Sending..." : "Confirm"}
                    </button>
                    <button
                      onClick={() => updateStatus(apt.id, "rejected")}
                      disabled={updatingId === apt.id}
                      className="text-sm font-medium bg-gray-100 text-gray-800 px-4 py-2.5 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-60"
                    >
                      {updatingId === apt.id ? "Sending..." : "Reject"}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
