import {createClient} from '@supabase/supabase-js';

const supabaseUrl = process.env.SUP_URL;
const supabaseKey = process.env.SUP_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);