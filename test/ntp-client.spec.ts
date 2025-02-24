import { NTPClient } from '../src/ntp-client';

describe('NTPClient', () => {
  it('should return a valid Date', async () => {
    const client = new NTPClient();
    const networkTime = await client.getNetworkTime();
    expect(networkTime).toBeInstanceOf(Date);
    client.close();
  });
});
