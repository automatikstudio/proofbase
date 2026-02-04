import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Forward to tracking server if configured
    const trackingUrl = process.env.TRACKING_URL;
    if (trackingUrl) {
      fetch(trackingUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...body,
          product: "proofbase",
          timestamp: new Date().toISOString(),
        }),
      }).catch(() => {});
    }

    // Log locally
    console.log("[track]", JSON.stringify({ ...body, product: "proofbase" }));

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true });
  }
}
