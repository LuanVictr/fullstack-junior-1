# Teste tecnico Naranja Labs Desenvolvedor Fullstack Junior

## Informações

- **Nome completo:** Luan Victor de Araujo Silva
- **Linkedin:** https://www.linkedin.com/in/luanvictor-/
- **Github:** https://github.com/LuanVictr
- **Telefone:** [(88)998605296](https://wa.me/+5599998605296)
- **Email:** [luanvictordev@gmail.com](mailto:luanvictordev@gmail.com)

## Front End

Para executar o projeto, utilize um dos comandos abaixo:

```bash
npm run dev
# or
npm run build
#and
npm run start
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador para ver a pagina hero clonada.

## Back End

Você pode testar todas as rotas desenvolvidas importando o arquivo [naranja_labs_routes.json](./naranja_labs_routes.json) para seu software de requisições preferido. Ex: Insomnia, Postman.

### Rotas Desenvolvidas

#### URL base

A URL base para todas as requisições é `http://localhost:3000/api`.


#### 1. Listar todos os Jobs

- **Endpoint:** `/jobs`
- **Método:** GET
- **Descrição:** Retorna uma lista de todos os jobs disponíveis.
- **Exemplo de Resposta:**

```json
{
  "jobs": [
    {
      "id": 1,
      "job": "Full Stack Developer",
      "level": "Junior",
      "status": "open"
    },
    {
      "id": 2,
      "job": "Frontend Developer",
      "level": "Junior",
      "status": "closed"
    },
    // Outros jobs...
  ]
}
```

#### 2. Obter detalhes de um Job específico

- **Endpoint:** `/jobs/{id}`
- **Método:** GET
- **Descrição:** Retorna os detalhes de um job específico com base no ID fornecido.
- **Parâmetros de URL:** 
  - `[id]`: ID do job a ser recuperado.
- **Exemplo de Resposta bem-sucedida:**

```json
{
  "job": {
    "id": 2,
    "job": "Frontend Developer",
    "level": "Junior",
    "status": "closed"
  }
}
```

- **Exemplo de Resposta de erro (quando o job não é encontrado):**

```json
{
  "error": "No job found with id 12"
}
```

#### 3. Listar Jobs por nível

- **Endpoint:** `/jobs?level={nível}`
- **Método:** GET
- **Descrição:** Retorna uma lista de jobs com o nível especificado.
- **Parâmetros de Consulta (Query Parameters):** 
  - `{nível}`: Nível do job (ex: Junior, Senior).
- **Exemplo de Resposta bem-sucedida:**

```json
{
  "jobs": [
    {
      "id": 1,
      "job": "Full Stack Developer",
      "level": "Junior",
      "status": "open"
    },
    {
      "id": 2,
      "job": "Frontend Developer",
      "level": "Junior",
      "status": "closed"
    },
    // Outros jobs...
  ]
}
```

**Exemplo de Resposta de erro (quando não há jobs para o nível especificado):**

```json
{
  "message": "We have no currently jobs for level mid-level"
}
```

#### 4. Submeter Candidatura

- **Endpoint:** `/job/submit`
- **Método:** POST
- **Descrição:** Submete uma candidatura para uma vaga de emprego.
- **Corpo da Requisição (Request Body):** 
  - `name` (string, obrigatório): Nome do candidato.
  - `age` (number, obrigatório): Idade do candidato.
  - `phone` (string, obrigatório): Número de telefone do candidato.
  - `state` (string, obrigatório): Estado do candidato.
  - `city` (string, obrigatório): Cidade do candidato.
- **Exemplo de Corpo da Requisição:**

```json
{
    "name": "João da Silva",
    "age": 30,
    "phone": "(11) 99999-9999",
    "state": "São Paulo",
    "city": "São Paulo"
}
```

- **Exemplo de Resposta bem-sucedida:**

```json
{
  "message": "Thank you for your application, João da Silva"
}
```

- **Exemplo de Resposta de erro (quando o corpo da requisição está ausente ou incompleto):**

```json
{
  "error": "Missing candidate's data from body"
}
```

- **Exemplo de Resposta de erro (quando falta uma informação específica no corpo da requisição):**

```json
{
  "error": "Missing candidate's age info"
}
```

### Mensagem do desenvolvedor

Obrigado por considerar meu teste tecnico.

Eu poderia ter implementado mais coisas ma ia fugir muito do escopo do teste, como por exemplo adicionar o celebrate para validação ou o AntDesign, chakaraUi para dar uma componentizada em alguns itens da parte de frontend para deixar o mais responsivel possivel.

Espero que tenham gostado do projeto tanto quanto eu gostei de fazer, e espero que nos conversemos denovo em breve.




