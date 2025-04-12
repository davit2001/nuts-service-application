import { startSubscription } from './api/nutsSubscriber.mjs';
import { connect } from 'nats';
import { initDb } from './db/initDb.mjs';

export const nc = await connect({ servers: 'localhost:4222' });
await initDb();
await startSubscription();
