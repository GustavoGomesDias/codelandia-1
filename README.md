# Home de um blog feito em html

## To Do
- [ ] Passar o path total para as imagens
  - [Explicação](https://stackoverflow.com/questions/65711511/github-pages-not-showing-icons-and-images-of-my-css)
  - Para o search.svg que tá no header.css, ficaria assim:
  ```css
  ...
  header div.search_container form button.search_button {
    background: url('/codelandia-1/assets/icons/search.svg') center no-repeat;
    ...
  }
  ...
  ```
- [ ] Bug na hora do clear
  - O x some mesmo que ainda tenha texto lá;
  - Na vercel o x não está limpando o campo de pesquisa
