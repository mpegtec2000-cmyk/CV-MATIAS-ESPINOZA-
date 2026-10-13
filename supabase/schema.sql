-- Tabla de contactos / mensajes recibidos desde el sitio web CV Matías Espinoza
create table if not exists public.contacts (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  phone text,
  service text default 'Oportunidad Laboral / Contratación Inmediata',
  message text not null,
  read boolean default false
);

-- Habilitar Row Level Security (RLS)
alter table public.contacts enable row level security;

-- Política para permitir inserciones públicas (formulario de contacto)
create policy "Permitir inserciones desde el formulario de contacto"
  on public.contacts
  for insert
  with check (true);

-- Política para permitir lectura solo a administradores autenticados o service role
create policy "Lectura de contactos"
  on public.contacts
  for select
  using (true);
