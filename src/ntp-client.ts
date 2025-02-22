import { createSocket, Socket } from 'dgram';

class NTPClient { private readonly ntpServer: string; private socket: Socket;

constructor(server: string = 'pool.ntp.org') { this.ntpServer = server; this.socket = createSocket('udp4'); }

async getNetworkTime(): Promise<Date> { return new Promise((resolve, reject) => { const ntpData = Buffer.alloc(48); ntpData[0] = 0x1B; // NTP version 4, mode client

this.socket.send(ntpData, 123, this.ntpServer, (err) => {
    if (err) reject(err);
  });

  this.socket.once('message', (msg) => {
    const offsetTransmitTime = 40;
    const seconds = msg.readUInt32BE(offsetTransmitTime) - 2208988800; // Convertir en epoch Unix
    const milliseconds = msg.readUInt32BE(offsetTransmitTime + 4) * 1000 / 2 ** 32;
    resolve(new Date((seconds * 1000) + milliseconds));
  });
});

} }

export default NTPClient;

// Exemple d'utilisation (async () => { const client = new NTPClient(); try { const networkTime = await client.getNetworkTime(); console.log('Heure réseau:', networkTime.toISOString()); } catch (error) { console.error('Erreur lors de la récupération de l'heure:', error); } })();

