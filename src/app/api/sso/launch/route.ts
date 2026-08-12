import { NextRequest, NextResponse } from "next/server";
import { agents } from "@/data/agents";
import { getSessionUser } from "@/lib/auth";
import { agentSupportsSso, appendSsoToken, signSsoToken } from "@/lib/sso";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const agentId = req.nextUrl.searchParams.get("agent");
  const agent = agents.find((a) => a.id === agentId);

  if (!agent || agent.accessLink === null) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!agentSupportsSso(agent.accessLink)) {
    return NextResponse.redirect(new URL(agent.accessLink, req.url));
  }

  const user = await getSessionUser();
  if (!user) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirect", `/api/sso/launch?agent=${agent.id}`);
    return NextResponse.redirect(loginUrl);
  }

  try {
    const token = await signSsoToken(user, agent.id);
    return NextResponse.redirect(appendSsoToken(agent.accessLink, token));
  } catch {
    return NextResponse.redirect(new URL(agent.accessLink, req.url));
  }
}
