import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.REACT_APP_SUPABASE_URL ||
  "https://cwdebqxvzmovziofibst.supabase.co";
const supabaseAnonKey =
  process.env.REACT_APP_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3ZGVicXh2em1vdnppb2ZpYnN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2NzAxMjAsImV4cCI6MjA3MDI0NjEyMH0.-cLbCnTdRGOHT1pm24M6jLgQ8id03YbccRgtVrMlA0Y";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
