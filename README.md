# tassiaCroche
# 🧶 Formulário de Interesse - Cursos de Amigurumi

Este é um formulário simples feito em HTML, CSS e JavaScript para capturar o interesse de pessoas nos cursos de Amigurumi. Ele envia os dados coletados para um webhook (n8n) e pode ser hospedado facilmente via GitHub Pages.

## 🚀 Funcionalidades

- Captura nome, e-mail, telefone e preferências do visitante.
- Envia os dados para um endpoint (exemplo: webhook n8n).
- Validação básica de campos.
- Mensagens de sucesso ou erro dinâmicas.
- Totalmente responsivo e leve.

## 📦 Como usar

1. **Clone o repositório ou envie os arquivos para um novo repositório no GitHub**:
   - Certifique-se de que o arquivo principal se chame `index.html`.

2. **Ative o GitHub Pages**:
   - Vá em **Settings > Pages**
   - Em "Source", selecione `main` (ou `master`) e a pasta `/root`.
   - O GitHub irá gerar um link como:  
     `https://seunomeusuario.github.io/nome-do-repositorio/`

3. **Configure seu webhook do n8n**:
   - No seu workflow do n8n, use um nó do tipo **Webhook**.
   - Altere o `fetch()` no JavaScript do formulário com a URL do seu webhook.
   - Exemplo:
     ```js
     fetch('https://seun8n.app/webhook/amigurumi', {
       method: 'POST',
       ...
     });
     ```

4. **Teste e compartilhe!**  
   Quando alguém preencher o formulário, os dados serão enviados automaticamente para o n8n.

## ✍️ Personalização

Você pode facilmente adaptar este projeto para outras finalidades como:

- Captação de leads em outros nichos
- Pré-inscrição para cursos
- Formulários para eventos e workshops

## 📄 Licença

Este projeto está sob a licença MIT.  
Sinta-se à vontade para modificar e reutilizar.

---

Feito com 💖 para quem ama Amigurumi!
