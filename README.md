# NTP Client Requester

**NTP Client Requester** is a high-precision Network Time Protocol (NTP) client implementation in TypeScript, designed for Alpine Linux environments. It adheres to RFC 5905, offering accurate time synchronization with minimal network latency.

## Features

- **Precision**: Sub-100ms time synchronization with network latency compensation.
- **NTPv4 Compliance**: Fully implements NTPv4 protocol (RFC 5905).
- **Clock Filtering**: Uses algorithms to mitigate clock offset errors.
- **Lightweight**: Optimized Docker container size (<15MB).
- **Zero Dependencies**: Pure TypeScript solution.
- **Security**: Support for NTS (optional), KoD validation, and rate-limiting.
- **Compatibility**: Runs on Alpine Linux, compatible with both IPv4 and IPv6.
- **Extensibility**: WebSocket support for real-time clock updates.

## Installation

To get started with the NTP Client Requester, clone the repository and install the dependencies.

### 1. Clone the repository
```bash
git clone https://github.com/valorisa/ntp-client-requester.git
cd ntp-client-requester
```
### 2. Install dependencies
```bash
npm install
```
### 3. Build the project
```bash
npm run build
```
### 4. Run the client
```bash
npm start
```
### Docker Installation

Alternatively, you can run the project in a Docker container for an isolated environment.

### 1. Build the Docker image
```bash
docker build -f Dockerfile.alpine -t ntp-client .
```
### 2. Run the Docker container
```bash
docker run --rm ntp-client
```
### Structure
Here is the project structure for ntp-client-requester after adding the necessary files:

```bash
ntp-client-requester/
├── .git/
│   ├── COMMIT_EDITMSG
│   ├── HEAD
│   ├── branches/
│   ├── config/
│   ├── description
│   ├── hooks/
│   ├── index
│   ├── info/
│   ├── logs/
│   ├── objects/
│   └── refs/
├── Dockerfile.alpine
├── Licence.md
├── README.md
├── dist/
│   └── ntp-client.js
├── package.json
├── src/
│   └── ntp-client.ts
└── tsconfig.json
```

### Description of folders and files:

**.git/** : Hidden Git directory containing the repository configuration and objects.

**Dockerfile.alpine** : File to build the Docker image based on Alpine Linux.

**Licence.md** : Project license file.

**README.md** : Project documentation with instructions and details.

**dist/** : Directory containing compiled files (e.g., ntp-client.js).

**package.json** : Dependencies and configuration for the Node.js project.

**src/** : Source files directory (e.g., ntp-client.ts).

**tsconfig.json** : TypeScript configuration for the project.


This represents the complete structure of the project after setting up Git and adding the necessary files for GitHub.


### Usage

Once the client is running, it will fetch the time from the specified NTP server and adjust the system clock with minimal latency.

To use custom parameters (like NTP server or mode), modify the ntp-client.ts file or extend the project with additional CLI arguments.

### Configuration

Default NTP server: pool.ntp.org

Supported Protocols: NTPv4 (RFC 5905), optional NTS (RFC 8915)


### Performance Metrics

The following metrics are calculated:

- **Round-trip delay**

- **Clock offset**

- **Clock dispersion**

- **Stratum level**

- **Reference ID**

### Tests

To run the unit tests, use the following command:

```sh
npm test
```

If you encounter issues with hanging processes after tests complete, you can diagnose open handles using:

```sh
npm test -- --detectOpenHandles
```

This will help identify asynchronous operations that were not properly closed.


### Contributing

Feel free to submit issues, pull requests, or any suggestions to improve the project.


### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgements

Node.js for the runtime.

Alpine Linux for a lightweight OS.

RFC 5905 for NTP specifications.
