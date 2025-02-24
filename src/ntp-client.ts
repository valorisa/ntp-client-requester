import { createSocket, Socket } from 'dgram';

export class NTPClient {
  private readonly ntpServer: string;
  private socket: Socket;

  constructor(server: string = 'pool.ntp.org') {
    this.ntpServer = server;
    this.socket = createSocket('udp4');
  }

  async getNetworkTime(): Promise<Date> {
    return new Promise((resolve, reject) => {
      const ntpData = Buffer.alloc(48);
      ntpData[0] = 0x23; // LI=0, Version=4, Mode=3 (Client)

      this.socket.send(ntpData, 123, this.ntpServer, (err) => {
        if (err) reject(err);
      });

      this.socket.once('message', (msg) => {
        const offsetTransmitTime = 40;
        const seconds = msg.readUInt32BE(offsetTransmitTime);
        const ntpEpoch = Date.UTC(1900, 0, 1); // L'epoch NTP est le 1er janvier 1900
        const networkTime = new Date(ntpEpoch + seconds * 1000);

        // Affiche la date et l'heure dans un format lisible
        console.log(`Date et heure NTP : ${networkTime.toLocaleString()}`);

        resolve(networkTime);
      });
    });
  }

  /** Ferme le socket UDP pour éviter les processus ouverts */
  close() {
    if (this.socket) {
      this.socket.close();
    }
  }
}
