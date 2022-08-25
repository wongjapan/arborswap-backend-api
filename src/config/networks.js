module.exports = {
  bsc: {
    name: "Binance Smart Chain",
    chainId: "56",
    rpc: "https://bsc-dataseed1.ninicoin.io/",
    explorer: "https://bscscan.com/",
    dex: {
      factory: "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
      router: "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
    },
    currency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18,
      address: "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
    },
    usd: {
      address: "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
      decimals: 18,
      pair: "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
    },
    stable: [
      "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
      "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
      "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
      "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
    ],
    multicall: "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
  },
};
