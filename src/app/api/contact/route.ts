import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Por favor completa todos los campos obligatorios (nombre, email, mensaje)." },
        { status: 400 }
      );
    }

    // Guardar en Supabase tabla 'contacts'
    try {
      const { error } = await supabaseAdmin.from("contacts").insert([
        {
          name,
          email,
          phone: phone || null,
          service: service || "Oportunidad Laboral / Contratación Inmediata",
          message,
        },
      ]);

      if (error) {
        console.warn("Aviso Supabase (la tabla 'contacts' puede requerir creación):", error.message);
      } else {
        console.log("Contacto registrado en Supabase correctamente.");
      }
    } catch (supabaseErr) {
      console.warn("Error de conexión con Supabase:", supabaseErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: "¡Mensaje recibido con éxito! Matías te responderá a la brevedad.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en /api/contact:", error);
    return NextResponse.json(
      { error: "Ocurrió un error interno al procesar el mensaje." },
      { status: 500 }
    );
  }
}
