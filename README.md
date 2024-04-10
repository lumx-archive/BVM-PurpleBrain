# BVM deploy smart contracts

Projeto com demonstracao de como implementar seus proprios contratos na rede BVM para o bounty 2 e desafio 2.

Para ter acesso a configuracao da rede BVM #1 (NOS Testnet) entre na documentacao pelo site: https://docs.bvm.network/bvm/quickstart/connect-to-bitcoin-l2s 

OBS. Caso necessite de token $BVM para deployar seus proprios contratos entre na comunidade https://discord.gg/uBVuf8JpKt e solicite ao afonsod.eth. 

Antes de solicitar faca o teste deployando na rede da sepolia ou qualquer outra rede teste, pegue um pouco de faucet na rede que desejar em: https://www.alchemy.com/faucets/ 


## Foundry:

```shell
cd foundry
```

- compile seus contratos:

```shell
forge build
```

- Depois de efetuar as mudancas no seu arquivo foundry.toml, abastaecer sua carteira com o token nativo da testnet especifica e inserir sua Private_key no .env, rodar em seu terminal:

```shell
forge script script/Counter.s.sol:Deploy --rpc-url sepolia --broadcast
```

```shell
forge script script/Counter.s.sol:Deploy --rpc-url bvm --broadcast
```

## Hardhat:

- Faca o compile pelo hardhat:

```shell
npx hardhat compile
```

- Para fazer o deploy com hardhat, devemos configurar nosso hardhat.config.js e executar no nosso terminal:

```shell
npx hardhat ignition deploy ./ignition/modules/Lock.js --network sepolia
```

- Abaixo outro comandos para testes do hardhat e deploy:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
