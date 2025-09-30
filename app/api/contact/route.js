export async function POST(request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let payload = {};

    if (contentType.includes("application/json")) {
      payload = await request.json();
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      const formData = await request.formData();
      payload = Object.fromEntries(formData.entries());
    } else if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      payload = Object.fromEntries(formData.entries());
    } else {
      // Fallback try formData
      try {
        const formData = await request.formData();
        payload = Object.fromEntries(formData.entries());
      } catch (_) {}
    }

    // TODO: integrate with email/CRM (HubSpot/Zoho/SendGrid) here
    console.log("Contact submission:", payload);

    return Response.json({ ok: true, message: "Received" }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json({ ok: false, message: "Failed" }, { status: 500 });
  }
}
