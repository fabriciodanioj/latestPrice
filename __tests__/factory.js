import faker from 'faker';

import { factory } from 'factory-girl';

import Company from '../src/app/models/Company';
//no caso seria apenas para testar se o model está sendo criado?

/** 
 * Tendo o model tem os campos neh?
 * esses campos que tem no company por exemplo
 * para você criar uma empresa, você num precisa informar esses campos?
 * seria isso, ele gera esses campos aleatoriamente para validar
 * se está correto a criação.
 * 
 * ok entendi
 * 
 * mas funciona assim O teste(teste para a vaga) consiste em construir
 * uma simples aplicação que 
 * exibe o valor de ações através de chamadas de API
 * 
 * cara, para você conseguir determinada vaga, seria uma boa opção você construir
 * um banco de dados e a estrutura do jeito que você deve programar, no caso
 * criar uma boa arquitetura deve validar melhor a sua entrada na empresa.
 * 
 * entendeu? sim. Beleza vou te ensinar como você vai fazer uma boa requisição agora.
 */
factory.define('Company', Company, {
  symbol: faker.name.prefix(),
  description: faker.lorem.paragraph(),
  companyName: faker.company.companyName(),
  exchange: faker.lorem.word(),
  website: faker.internet.url(),
  latestPrice: faker.random.number(),
  industry: faker.company.companyName(),
  country: faker.address.country(),
});

export default factory;
