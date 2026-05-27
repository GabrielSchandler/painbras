import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validations/lead";

export const runtime = "nodejs";

/**
 * Recebe lead validado e encaminha para webhook configurado (CRM) e/ou e-mail.
 * Configurar LEAD_WEBHOOK_URL e LEAD_NOTIFY_EMAIL em .env.local.
 */
export async function POST(request: Request) {
  try {
    const json = await request.json();

    // Honeypot — bot preencheu o campo invisível
    if (json?.website && String(json.website).length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const parse = leadSchema.safeParse(json);
    if (!parse.success) {
      return NextResponse.json(
        { ok: false, errors: parse.error.flatten() },
        { status: 422 },
      );
    }

    const payload = {
      ...parse.data,
      utm: typeof json.utm === "string" ? json.utm : "",
      referrer: typeof json.referrer === "string" ? json.referrer : "",
      receivedAt: new Date().toISOString(),
      source: "site-painbras",
    };

    const webhook = process.env.LEAD_WEBHOOK_URL;
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => null);
    }

    // Aqui poderia integrar com serviço de e-mail (Resend, SES, etc.)
    // Mantemos opcional via LEAD_NOTIFY_EMAIL.

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "Erro no processamento do lead." },
      { status: 500 },
    );
  }
}
