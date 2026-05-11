-- Run this SQL in your Supabase SQL editor to create the bookings table
-- Go to: Supabase Dashboard > SQL Editor > New Query > paste & run

create table if not exists bookings (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default now(),
  full_name text not null,
  email text not null,
  phone text not null,
  preferred_contact text not null,
  event_type text not null,
  event_date date not null,
  start_time time not null,
  duration text not null,
  estimated_guests integer not null,
  event_location text not null,
  services text[] not null,
  notes text
);

-- Enable Row Level Security (recommended)
alter table bookings enable row level security;

-- Allow anonymous inserts (for the booking form)
create policy "Allow anonymous inserts" on bookings
  for insert to anon
  with check (true);

-- Only allow authenticated users (you) to read bookings
create policy "Allow authenticated reads" on bookings
  for select to authenticated
  using (true);
