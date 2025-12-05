const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const postTasks = async (data: any) => {
  const response = await fetch(`${SUPABASE_URL}/functions/v1/planner-bot/tasks`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${SUPABASE_ANON_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};

// Аналогично для profile, habits и т.д.
