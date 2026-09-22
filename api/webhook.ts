import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Webhook } from 'standardwebhooks';
import DodoPayments from 'dodopayments';

// Initialize the SDK using your secret key from environment variables
const client = new DodoPayments({
  bearerToken: process.env.DODO_PAYMENTS_API_KEY || '',
  environment: 'test_env', // IMPORTANT: change to 'live_env' for production
});

// Your Webhook Secret from Dodo Payments Dashboard
const WEBHOOK_SECRET = process.env.DODO_PAYMENTS_WEBHOOK_SECRET || '';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // We only accept POST requests for webhooks
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // 1. Get the payload and headers
    const payload = JSON.stringify(req.body);
    const headers = req.headers as Record<string, string>;

    // 2. Verify the webhook signature using StandardWebhooks
    const webhook = new Webhook(WEBHOOK_SECRET);
    const event = webhook.verify(payload, headers) as any;

    // 3. Handle the 'payment.succeeded' event
    if (event.type === 'payment.succeeded') {
      const paymentData = event.data;
      
      const customerEmail = paymentData.customer?.email || 'Unknown Email';
      const productId = paymentData.product_id;
      const amount = paymentData.total_amount;

      console.log(`[Webhook] Payment succeeded! Product: ${productId}, Amount: ${amount}, Email: ${customerEmail}`);

      // =========================================================================
      // TODO: IMPLEMENT YOUR CUSTOM LICENSE KEY LOGIC HERE
      // =========================================================================
      // 1. Generate a License Key (e.g., using `uuid` or a custom format)
      const generatedLicenseKey = "XXXX-XXXX-XXXX-XXXX"; 
      
      // 2. Save it to your Database (Supabase/Firebase/Vercel Postgres)
      console.log(`[Action Required] Save ${generatedLicenseKey} to DB for ${customerEmail}.`);

      // 3. Trigger an email to `customerEmail` with the DMG link and License Key
      // (Using Resend, SendGrid, etc.)
      console.log(`[Action Required] Trigger email to ${customerEmail}.`);
    }

    // Acknowledge receipt back to Dodo Payments
    return res.status(200).json({ received: true });
    
  } catch (err: any) {
    console.error('Webhook Error:', err.message);
    return res.status(400).json({ error: 'Webhook signature verification failed' });
  }
}
