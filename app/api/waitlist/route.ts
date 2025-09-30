export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    console.log("[v0] waitlist signup:", email)
    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (e) {
    console.log("[v0] waitlist error:", (e as Error).message)
    return new Response(JSON.stringify({ ok: false }), { status: 400 })
  }
}
