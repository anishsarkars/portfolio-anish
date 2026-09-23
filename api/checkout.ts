import type { VercelRequest, VercelResponse } from '@vercel/node';
import DodoPayments from 'dodopayments';
import * as cookie from 'cookie';

// Initialize the SDK
// Make sure to add DODO_PAYMENTS_API_KEY to your Vercel Environment Variables
const client = new DodoPayments({
  bearerToken: process.env.DODO_PAYMENTS_API_KEY || '',
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { productId } = req.body;
    
    if (!productId) {
      return res.status(400).json({ error: 'Product ID is required' });
    }

    // Parse cookies from the request
    const cookies = cookie.parse(req.headers.cookie || '');
    const visitorIdFromCookie = cookies['datafast_visitor_id'];

    // Define the checkout session configuration
    const sessionConfig: any = {
      product_cart: [
        {
          product_id: productId,
          quantity: 1,
        },
      ],
      return_url: `https://${req.headers.host}/success`,
    };

    // Only add metadata if the tracking cookie exists
    if (visitorIdFromCookie) {
      sessionConfig.metadata = {
        datafast_visitor_id: visitorIdFromCookie,
      };
    }

    // Create the checkout session
    const session = await client.checkoutSessions.create(sessionConfig);
    
    // Fallbacks just in case the SDK format differs slightly
    const url = session.url || session.checkout_url || session.link;

    if (!url) {
       return res.status(500).json({ error: 'Failed to retrieve checkout URL from Dodo Payments', session });
    }

    return res.status(200).json({ url });
  } catch (error: any) {
    console.error('Checkout error:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
