import {createClient} from '@supabase/supabase-js';

const supabaseUrl='https://xdktczhbitlusykuilfx.supabase.co';
const supabaseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhka3RjemhiaXRsdXN5a3VpbGZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5MTAzNzYsImV4cCI6MjAyMDQ4NjM3Nn0.Lza3Sll8FucW0fO_IFOF68d8eNoGEegonmhZU4-XFIg';

export const supabase = createClient(supabaseUrl, supabaseKey)