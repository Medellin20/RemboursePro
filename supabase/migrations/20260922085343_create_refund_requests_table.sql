/*
# Create refund_requests table (single-tenant, no auth)

1. New Tables
- `refund_requests`
  - `id` (uuid, primary key)
  - `full_name` (text, client full name)
  - `email` (text, client email)
  - `phone` (text, client phone)
  - `reservation_number` (text, reservation or visit reference)
  - `reason` (text, reason for refund)
  - `amount` (numeric, amount to refund)
  - `currency` (text, default EUR)
  - `refund_method` (text, e.g. "card")
  - `card_number_last4` (text, last 4 digits of card)
  - `card_expiry` (text, card expiry date MM/YY)
  - `status` (text, default "pending")
  - `created_at` (timestamp)

2. Security
- Enable RLS on `refund_requests`.
- Allow anon + authenticated INSERT only (public can submit requests, not read them).
- No SELECT/UPDATE/DELETE for anon (admin-only via service role).
*/

CREATE TABLE IF NOT EXISTS refund_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  reservation_number text NOT NULL,
  reason text,
  amount numeric(10,2) NOT NULL,
  currency text NOT NULL DEFAULT 'EUR',
  refund_method text DEFAULT 'card',
  card_number_last4 text,
  card_expiry text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE refund_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_refund_requests" ON refund_requests;
CREATE POLICY "anon_insert_refund_requests"
ON refund_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);
