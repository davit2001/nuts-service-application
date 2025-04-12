import { processMessage } from '../service/messageService.mjs';
import { nc } from '../index.mjs';

export async function startSubscription() {
  console.info(`Connected to NATS: ${nc.getServer()}`);

  const sub = nc.subscribe('messages');

  for await (const m of sub) {
    const msg = new TextDecoder().decode(m.data);
    console.info(`Received: ${msg}`);
    await processMessage(msg);
  }

}
