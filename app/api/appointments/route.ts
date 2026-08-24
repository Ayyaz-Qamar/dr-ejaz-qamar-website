import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { appointments } from "@/lib/schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, date, reason } = body;

    if (!name || !phone || !email || !date) {
      return NextResponse.json(
        { error: "Name, phone, email, and date are required." },
        { status: 400 }
      );
    }

    const result = await db
      .insert(appointments)
      .values({
        name,
        phone,
        email,
        date,
        reason: reason || "",
        status: "pending",
        createdAt: new Date().toISOString(),
      })
      .returning();

    return NextResponse.json({ success: true, appointment: result[0] });
  } catch (error) {
    console.error("Error saving appointment:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const allAppointments = await db.select().from(appointments);
    return NextResponse.json(allAppointments);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
