# ENVelope

> **The secure, encrypted, and reliable emailing software**

ENVelope is a next-generation email client and protocol alternative that reimagines how modern communication should work: **secure by default**, **elegantly simple**, and **100% under your control**.

---

## ✨ Features

- **End-to-End Encryption (E2EE)** — Powered by state-of-the-art cryptographic protocols.
- **Decentralized Identity Format** — Users own their addresses and can self-host.
- **Simple, Fast Client** — Lightweight cross-platform app (macOS, Linux, Windows).
- **Open Protocol** — Spec published and available for anyone to implement.
- **Zero Ads, Zero Tracking** — Your data stays yours — forever.
- **Plugin System** — Extend your client with community-driven plugins.
- **Secure Attachments** — Encrypted file transfer baked in.

---

### Message Flow

1. Compose message.
2. E2EE encrypts content client-side.
3. Message travels securely to the recipient’s server.
4. Decryption occurs only on the recipient's device.

---

## 🚀 Quick Start

### Installation

```bash
git clone https://github.com/Hdev-Group/envelope/
cd envelope
npm install
npm run build
```
### Running the client
```bash
npm run dev
```

### Building for prod
```bash
npm run build
npm start
```


### 🔒 Security Design
- End-to-End Encryption (E2EE) for messages and attachments.

- Perfect Forward Secrecy (PFS) with every message.

- Uses X25519, AES-GCM, and HMAC-SHA256.

- Optional self-hosted mailbox servers for total control.

- Open audit logs and verifiable builds.

### 🌐 Protocol Overview

- Be transport-agnostic (can run over HTTP/2, QUIC, or even Bluetooth).

- Ensure minimal metadata leakage.

- Support multiple devices per user (key rotation included).

### 💻 Screenshots
> Coming soon! Stay tuned for beautiful previews of the ENVelope Client.


### ⚠️ Disclaimers
ENVelope is in very early development. Use caution with sensitive data.

Protocol changes may occur without notice until v1.0.

### 👥 Authors
Lead Engineer | Harry Campbell — hdev.uk

### 🔗 Related Projects
ProtonMail — Inspiration for privacy-focused mail
SimpleLogin — Email aliasing service
PGP.js — JS crypto library used internally

### 📅 Roadmap
 Core Messaging

 Encrypted Attachments

 Multi-device Sync

 Mobile Apps (iOS, Android)

 Federation Support

 Plugin Marketplace
