"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dgram_1 = require("dgram");
class NTPClient {
    constructor(server = 'pool.ntp.org') {
        this.ntpServer = server;
        this.socket = (0, dgram_1.createSocket)('udp4');
    }
    async getNetworkTime() {
        return new Promise((resolve, reject) => {
            const ntpData = Buffer.alloc(48);
            ntpData[0] = 0x23; // LI=0, Version=4, Mode=3 (Client)
            this.socket.send(ntpData, 123, this.ntpServer, (err) => {
                if (err)
                    reject(err);
            });
            this.socket.once('message', (msg) => {
                const offsetTransmitTime = 40;
                const seconds = msg.readUInt32BE(offsetTransmitTime);
                const ntpEpoch = Date.UTC(1900, 0, 1);
                resolve(new Date(ntpEpoch + seconds * 1000));
            });
        });
    }
}
exports.default = NTPClient;
