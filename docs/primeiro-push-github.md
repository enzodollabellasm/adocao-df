# Publicar o projeto no GitHub

O projeto já tem um repositório Git local e dois commits iniciais. Para ligar esse histórico a um repositório remoto:

1. No GitHub, crie um repositório chamado `adocao-df`. Como o projeto já tem README e histórico local, crie o repositório remoto vazio, sem adicionar README, licença ou `.gitignore`.
2. Abra um terminal dentro da pasta `adocao-df`.
3. Copie a URL HTTPS do repositório recém-criado e execute os comandos abaixo, substituindo o endereço pelo seu.

```bash
git remote add origin https://github.com/SEU-USUARIO/adocao-df.git
git push -u origin main
```

Depois disso, registre as próximas mudanças com `git add`, `git commit -m "descreva a mudança"` e `git push`. Não compartilhe senhas ou tokens no repositório.

O primeiro commit desta pasta foi criado pelo assistente durante a preparação do protótipo. Informe no relatório que o ChatGPT foi usado para apoiar o planejamento e a implementação inicial, e descreva as revisões e alterações que você fizer.
