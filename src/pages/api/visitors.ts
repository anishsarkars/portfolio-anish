import type { APIRoute } from 'astro';
import { generateVisitorId, getRedis, trackVisit, getVisitorStats, type RedisEnv } from '../../lib/visitors';

export const prerender = false;

// Read the client IP from the standard proxy headers set by the platform
// (Vercel sets x-forwarded-for / x-real-ip). Fall back to the adapter's
// clientAddress, wrapped in try/catch in case a runtime doesn't support it.
function getClientIp(context: Parameters<APIRoute>[0]): string | null {
  const headers = context.request.headers;
  const fromHeader =
    headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    headers.get('x-real-ip') ??
    headers.get('cf-connecting-ip');
  if (fromHeader) return fromHeader;
  try {
    return context.clientAddress ?? null;
  } catch {
    return null;
  }
}

// Runtime secrets come from process.env (Vercel serverless / Node.js).
function resolveEnv(): RedisEnv {
  const env = (typeof process !== 'undefined' ? process.env : {}) as Record<string, string | undefined>;
  return {
    UPSTASH_REDIS_REST_URL: env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: env.UPSTASH_REDIS_REST_TOKEN,
  };
}

export const GET: APIRoute = async () => {
  const redis = getRedis(resolveEnv());
  if (!redis) return Response.json({ success: false, uniqueVisitors: 0 });
  try {
    return Response.json({ success: true, ...(await getVisitorStats(redis)) });
  } catch {
    return Response.json({ success: false, uniqueVisitors: 0 }, { status: 500 });
  }
};

export const POST: APIRoute = async (context) => {
  const { request } = context;
  const redis = getRedis(resolveEnv());
  if (!redis) return Response.json({ success: false, uniqueVisitors: 0 });
  try {
    const body = (await request.json().catch(() => ({}))) as { fingerprint?: string };
    const ua = request.headers.get('user-agent');
    const id = generateVisitorId(getClientIp(context), ua, body.fingerprint);
    return Response.json({ success: true, ...(await trackVisit(redis, id)) });
  } catch {
    return Response.json({ success: false, uniqueVisitors: 0 }, { status: 500 });
  }
};
