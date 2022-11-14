# organizadorDeTarefas-back

Praticando Ts
-------------------------------------------------------------------------------------------------------

Back-end organizador de tarefas <br/>
Criado com intuito de praticar Ts de forma consistente e reproduzindo ao maximo oque e realizado no mercado<br>
tecnologias utilizadas JavaScript | node.js | TS | express | postgresSQL  

-------------------------------------------------------------------------------------------------------
## link

utilizando este link de acesso a api para você acessa as rotas

- https://organizadordetarefasback007.herokuapp.com

-------------------------------------------------------------------------------------------------------

## Rotas e utilidades
Rotas do usuario
- post("/creatuser") criação de usuario objeto no formato {name,passoword}
- post("/loginuser") login do usuario cadastrado objeto no formato {name,passoword}
- get("/users") busca todos os usuarios cadastrados
- delete("/users") (rota autenticada por Bearer token no headers.authorization) deleta o proprio usuario se for dono da conta objeto no formato {name}
- patch("/users") (rota autenticada por Bearer token no headers.authorization) mudar nome do usuario se for dono da conta objeto no formato {name}

Rotas das atribuições
- post("/assignment") (rota autenticada por Bearer token no headers.authorization) criação de atribuição objeto no formato {name, assignment ,date }
- get("/assignment") busca todas as atribuições
- delete("/assignment") (rota autenticada por Bearer token no headers.authorization) deleta a atribuiçao se for o criador dela objeto no formato {name}"nome da atribuição"
- patch("/assignment") atualiza o status da atribuição para feita ou não feita ou o inverso objeto no formato {name}"nome da atribuição"
- get("/assigcount") retorna quantas atribuições estão prontas e não prontas

Rotas das responsabilidades
- post("/responsible/:id") (rota autenticada por Bearer token no headers.authorization) passando o id da atribuição via req.params.id associa a atribuição a seu usuario
- get("/responsiblecont") retorna quantas atribuições tem por pessoa cadastrada
- get("/responsible") retorna o id da atribuição e o nome se estive vinculado ao nome do usuario 
- delete("/responsible/:id") (rota autenticada por Bearer token no headers.authorization) passando o id da atribuição via req.params.id deleta a resposabilidade se estiver associado ao seu usuario

-------------------------------------------------------------------------------------------------------
## Criando o banco local e rodando o servidor organizadorDeTarefas-back localmente

- Primeiro faça um git clone https://github.com/EduardoVSR1995/organizadorDeTarefas-back para sua maquina;
- Com postgresSQL instalado na sua maquina crie o banco local com o comando CREATE DATABASE "organizador" ;
- Acesse com o comando \c organizador;
- Copie todo o conteudo do arquivo dump.sql e execute o no seu terminal;
- Logo apos a criação do banco crie um arquivo .env na raiz(onde esta o arquivo package.json) do projeto seguindo o padrâo .env.exenple;
- Com o terminal aberto na pasta raiz execute o comando npm i -y para instalar os pacotes nessesarios;
- Para utilizar o projeto como desenvolvedor na pasta raiz rode o projeto com o comando npx nodemon src/server.ts;
- Para utilizar os comandos acima coloque o link da sua rota local; 


 
