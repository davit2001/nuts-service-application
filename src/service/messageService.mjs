import { saveMessage } from '../data/messageRepository.mjs';

export async function processMessage(rawMessage) {
  if (!rawMessage || typeof rawMessage !== 'string') return;

  await saveMessage(rawMessage);
}