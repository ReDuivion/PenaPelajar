import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://kpjnqfbilodmstrhodru.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtwam5xZmJpbG9kbXN0cmhvZHJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxNTc5MTEsImV4cCI6MjAxODczMzkxMX0.eXYXwd9YofeJCzReEiybkM11-yBbJJZU_umd0iotp6k')