import { createClient } from '@supabase/supabase-js'
import useAuthUser from 'src/composables/UseAuthUser'

const supabaseUrl = 'https://ghghuxvhzxxfqiufqzzs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoZ2h1eHZoenh4ZnFpdWZxenpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY4OTc1ODEsImV4cCI6MTk4MjQ3MzU4MX0.m_j_sKPZo34SgQWa7CLZy6puoZfh2qad2SzM_9IvNVA'
const supabase = createClient(supabaseUrl, supabaseKey)

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser()

  user.value = session?.user || null
})

console.log('init supabase:', supabase)
export default function useSupabase () {
  return { supabase }
}
