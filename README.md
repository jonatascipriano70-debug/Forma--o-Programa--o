# Projeto Final — UC00604 (Frontend)

## Objetivo
Desenvolver um projeto pessoal com frontend completo (HTML, CSS e JavaScript), pronto para integrar backend na UC00605.
O trabalho inicia-se apos HTML/CSS e evolui ate ao fim da UC00604.
No final da UC00604, a componente frontend deve estar concluida e funcional.

## Nota importante (UC00604)
- Sem backend nesta disciplina
- Sem localStorage (dados ficam em memoria)
- Validacao de formularios apenas basica (campos obrigatorios e formatos simples)

## Estrutura do projeto final (fases)

### Fase 0 — Planeamento
- [ ] Escolher o tema do projeto
- [ ] Definir 3 a 5 funcionalidades principais
- [ ] Criar wireframe simples (papel ou digital)
- [ ] Definir cores e tipografia base

### Fase 1 — HTML semantico 
- [ ] Estrutura base (header, nav, main, section, footer)
- [ ] Conteudo real (textos e placeholders coerentes)
- [ ] Formularios com labels
- [ ] Imagens com `alt`

### Fase 2 — CSS e layout
- [ ] Layout com Flexbox e/ou Grid
- [ ] Tipografia consistente
- [ ] Espacamentos coerentes
- [ ] Responsividade (mobile + desktop)

### Fase 3 — JavaScript base
- [ ] Manipulacao do DOM
- [ ] Eventos (clique, submit, input)
- [ ] Atualizar UI dinamicamente
- [ ] Dados em arrays/objetos (estado em memoria)
- [ ] Filtros/ordenacao simples


### Fase 4 — Refinamento 
- [ ] Mensagens de feedback (sucesso/erro)
- [ ] Estados vazios (ex.: "sem dados")
- [ ] Revisao de acessibilidade
- [ ] Limpeza de codigo
- [ ] Validacao basica de formularios

## Opcoes de projeto (escolher 1)

- A) Gestor de Tarefas/Projetos Pessoais
  - Criar, concluir, editar e remover tarefas
  - Filtros por estado e categoria
  - Dados em array/objeto (memoria)

- B) Catalogo de Produtos/Loja Simples
  - Listar produtos com cards (imagem, titulo, preco)
  - Pesquisa e filtro por categoria
  - Carrinho simples em memoria

- C) Quiz Interativo
  - Perguntas em sequencia
  - Validacao de resposta e pontuacao
  - Barra de progresso e feedback

- D) Agenda de Eventos
  - Listar eventos e filtrar por data/categoria
  - Favoritos em memoria
  - Grelha de eventos

- E) Blog/Diario Pessoal
  - Listar posts e filtrar por tag
  - Pagina de detalhe (mock)
  - Dados em array/objeto

- F) Sistema de Reservas
  - Formulario de reserva com validacao
  - Lista de horarios simulados
  - Guardar reservas em memoria

## Requisitos obrigatorios
- HTML semantico e acessivel (labels, alt, hierarquia correta)
- CSS responsivo (Flexbox/Grid, tipografia e espacamentos)
- JavaScript com DOM + eventos + arrays/objetos (estado em memoria)
- Validacao basica de formularios
- Sem erros na consola
- Sem links quebrados
- Pelo menos 3 paginas HTML
- Pelo menos 1 formulario 
- Preparado para integracao backend (na UC00605)
- Pode conter framework de CSS (bootstrap/Tailwindcss)

## Conteudos necessarios (checklist)
- [ ] Navegacao funcional
- [ ] Pelo menos 1 formulario
- [ ] Pelo menos 1 lista/grelha gerada via JavaScript
- [ ] Interacao com feedback visivel (mensagens/contadores)
- [ ] Estados vazios e validacao basica
- [ ] Minimo 3 paginas HTML ligadas entre si
- [ ] Dados modelados (ex.: objeto com id, campos e datas)

## O que significa "validacao de formulario"
- Verificar campos obrigatorios (ex.: nome, email)
- Conferir formatos simples (ex.: email valido)
- Dar feedback visivel (mensagem de erro/sucesso)
- Impedir envio quando ha erros

## Estrutura recomendada de ficheiros
```
/projeto
  index.html
  pagina-lista.html
  pagina-detalhe.html
  styles.css
  script.js
  /assets
  /pages (opcional)
```

## Entregaveis
- Codigo fonte organizado
- README do projeto com:
  - Descricao do projeto
  - Funcionalidades implementadas
  - Instrucoes de uso

## Avaliacao (20 valores)
- HTML valido e semantico: 4
- CSS organizado e responsivo: 4
- JavaScript funcional: 6
- Criatividade e UX: 3
- Apresentacao e explicacao: 3

## Integracao com UC00605
- O backend vai substituir dados em memoria por API + base de dados.
- Autenticacao e utilizadores serao adicionados em UC00605.
- Estrutura de dados deve ser coerente para futura API (ex.: id, createdAt).
