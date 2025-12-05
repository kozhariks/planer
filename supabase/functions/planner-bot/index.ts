import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { kv } from '@vercel/kv-edge' // Или Supabase KV

const app = new Hono()

app.use('*', cors())

const BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN') || '6013810514:AAHhTjsNgaLQxpvdXHtDFq_Wv8I7f3fnEls';

app.post('/register', async (c) => {
  const body = await c.req.json();
  // Сохрани user в KV: await kv.set(`user:${body.userId}`, body);
  return c.json({ success: true });
});

app.post('/tasks', async (c) => {
  const body = await c.req.json();
  // Сохрани задачи: await kv.set(`tasks:${body.userId}`, body.tasks);
  return c.json({ success: true });
});

// Cron endpoints для уведомлений
app.get('/cron/task-reminders', async (c) => {
  // Логика: найди задачи на час вперёд, отправь через Telegram API
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  // Пример: await fetch(url, { method: 'POST', body: JSON.stringify({chat_id: userId, text: 'Напоминание!'}) });
  return c.json({ sent: true });
});

app.get('/cron/daily-summary', async (c) => {
  // Итог дня в 20:00 Minsk (UTC+3, cron в 17:00 UTC)
  // Аналогично, отправь мотивацию
  return c.json({ sent: true });
});

app.get('/cron/planning-reminder', async (c) => {
  // Планирование в 21:00 (18:00 UTC)
  return c.json({ sent: true });
});

export default app;
