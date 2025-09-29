declare module "@vercel/analytics" {
  export function track(event: string, properties?: Record<string, any>): void;
}
