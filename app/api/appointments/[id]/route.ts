import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { appointments } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { status } = await request.json();

    if (!["confirmed", "rejected", "pending"].includes(status)) {
      return NextResponse.json({ error: "Invalid status." }, { status: 400 });
    }

    const existing = await db
      .select()
      .from(appointments)
      .where(eq(appointments.id, Number(id)));

    if (existing.length === 0) {
      return NextResponse.json(
        { error: "Appointment not found." },
        { status: 404 }
      );
    }

    const appointment = existing[0];

    await db
      .update(appointments)
      .set({ status })
      .where(eq(appointments.id, Number(id)));

    if (status === "confirmed" || status === "rejected") {
      const subject =
        status === "confirmed"
          ? "Your Appointment is Confirmed"
          : "Appointment Update";

      const message =
        status === "confirmed"
          ? `Dear ${appointment.name},\n\nYour appointment with Dr. Muhammad Ejaz Qamar (Orthopaedic Surgeon & Specialist) on ${appointment.date} has been CONFIRMED.\n\nClinic Address:\nUsman Plaza, Basement, Opposite H.H. Sheikh Khalifa Bin Zayed Hospital A.K. CMH Muzaffarabad\n\nPlease arrive on time. If you need to reschedule, call 0300-7582959.\n\nThank you.`
          : `Dear ${appointment.name},\n\nUnfortunately, Dr. Ejaz Qamar is unable to confirm your appointment on ${appointment.date} due to a scheduling conflict.\n\nPlease call 0300-7582959 to select another date and time.\n\nWe apologize for the inconvenience.`;

      try {
        await resend.emails.send({
          from: "Dr. Ejaz Qamar Orthopaedic Clinic <onboarding@resend.dev>",
          to: appointment.email,
          subject: subject,
          text: message,
        });
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        // Status is still updated even if email fails
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating appointment:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
