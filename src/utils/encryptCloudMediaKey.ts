import cryptoJs from 'crypto-js';

export const encryptCloudMediaKey = () => cryptoJs.AES.encrypt(
  Date.now().toString(),
  'cmaNCA2912mdCS!' as string,
).toString();
