# Publicar o portfólio no GitHub Pages

O site usa HTML, CSS e JavaScript puros. Não precisa instalar dependências ou executar uma compilação. Abra `index.html` para usar localmente.

## Enviar os arquivos pelo navegador

1. Entre na sua conta do GitHub e abra o repositório `vitin10bril-crypto/PROJETO-FINAL-DE-DESENVOLVIMENTO-FRONT-END-PARA-WEB`.
2. Extraia o ZIP do portfólio no computador.
3. No repositório, clique em **Add file → Upload files**.
4. Arraste o conteúdo da pasta extraída, incluindo as pastas `css`, `js`, `imagens` e `conteudo`. O arquivo `index.html` precisa ficar na raiz do repositório.
5. Confirme o envio com **Commit changes** na branch `main`.
6. Abra **Settings → Pages**.
7. Em **Build and deployment**, selecione **Deploy from a branch**.
8. Selecione a branch **main**, a pasta **/(root)** e clique em **Save**.
9. Aguarde a publicação. O endereço publicado aparece nessa mesma página, no botão **Visit site**.

O endereço esperado após ativar o Pages é https://vitin10bril-crypto.github.io/PROJETO-FINAL-DE-DESENVOLVIMENTO-FRONT-END-PARA-WEB/ . Ele só fica disponível depois do envio e da publicação.

## Organização

| Arquivo ou pasta | Conteúdo |
| --- | --- |
| `index.html` | Página principal com apresentação, trajetória, estudos, projetos e contato |
| `conteudo/sobre.html` | Apresentação pessoal completa em uma página HTML separada |
| `css/style.css` | Cores, tipografia, layout, responsividade e acessibilidade visual |
| `js/main.js` | Menu mobile, filtros de assuntos, tabuada e navegação ativa |
| `imagens/favicon.png` | Ícone do site |
| `.nojekyll` | Publicação dos arquivos estáticos diretamente no Pages |
| `README.md` | Atividade original de programação preservada |

Para personalizar o texto, edite os arquivos HTML. Para mudar as cores, edite as variáveis no início do CSS. O site usa fontes do Google Fonts e tem fontes alternativas locais. O contato aponta para o perfil do GitHub informado.

A tabuada aceita números inteiros de −1.000 a 1.000 e calcula de 1 a 10. Essa versão foi adaptada para JavaScript a partir da atividade em Python do README original.

Documentação de publicação https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
