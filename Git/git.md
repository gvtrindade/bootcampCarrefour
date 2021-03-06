# Git
- Sistema distribuido e seguro
- Utiliza o SHA1, algoritmo de encriptação
  - Gera identificadores de 40 digitos
  - Garante segurança e facilidade de acesso aos dados
- Trabalha com objetos que possuem metadados, além do conteúdo
  - blobs: mantém informações sobre os arquivos
  - trees: mantém informações sobre blobs e outras trees
  - commit: mantém informações sobre a árvore principal, possui um parente, autor, mensagem, data e hora de criação
- Arquivos possuem estados ao serem incluidos em um projeto
  - Untracked: arquivos novos
  - Tracked: arquivos existentes no repositorio remoto
    - Unmodified: estado após o commit
    - Modified: modificados em relação ao remoto
    - Staged: prontos para serem commitados
- Principais comandos
  - init: cria um novo projeto
  - add: adiciona arquivos para serem commitados
  - commit: prepara os arquivos adicionados para serem mandados para o repositório remoto
  - push: manda o commit para o repositório
  - pull: baixa a versão mais recente do código do repositório remoto