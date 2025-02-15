import { closeDatabase, connect } from '../db-handler.js';
import { GuildModel } from '../../src/database/models/guild.js';
import { createDiscordClient } from '../../src/bot.js';
import { expectArraysIntersect } from '../utils/test.utils.js';

beforeAll(async () => {
  await connect();
});
afterEach(async () => {
  await GuildModel.deleteMany();
});
afterAll(async () => {
  await closeDatabase();
});

describe('bot', function () {
  it('should create client without issue', async function () {
    const client = await createDiscordClient();
    expect(client).toBeTruthy();

    const accessors = Object.keys(client);
    const expectedAtLeast = ['commands', 'database', 'tools', 'intents'];

    expectArraysIntersect(accessors, expectedAtLeast);
  });
});
