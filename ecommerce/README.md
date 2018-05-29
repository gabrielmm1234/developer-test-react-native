# Aplicativo de Ecommerce

## Introdução

Essa aplicativo foi desenvolvido como teste para processo seletivo, usando o react-native, um framework desenvolvido pelo Facebook para fazer aplicativos nativos de IOS e Android, utilizando a linguagem Javascript.

A ideia é que o aplicativo simule um ecommerce, onde o usuário pode ver uma lista de produtos, quando clicar em um produto é redirecionado para uma tela onde vê detalhes como nome, preço, quantidade em estoque e uma breve descrição do que é o produto. O usuário também tem a opção de adicionar um produto ao carrinho, e quando for para a tela do carrinho vê uma lista com todos os produtos, e caso clique em um produto vai ver a tela com informações sobre o produto, e tem a opção de adicionar mais uma unidade ao carrinho ou de remover do carrinho.

## Iniciando o Projeto
Para iniciar o projeto foi utilzado o comando 'create-react-native-app' que é o comando recomendado na documentação do framework. Após gerar a pasta com os arquivos, temos a opção de testar utilizando o expo, emulador do celular e no próprio celular.
Neste projeto foi utilizado o expo, que gera um QR code e com o aplicativo expo no celular, após ler o QR code o expo instala o app no aparelho. O uso do expo é para facilitar um pouco o processo, e deixar mais rápido o desenvolvimento.

## Bibliotecas Externas

A princípio foi instalado o Expo, e react-native-vector-icons para criar os ícones do header, também foi utilizado react-native-elements que possui alguns componentes prontos usados para estilização (como o componente Pricing e Card), o react-native-router-flux para fazer a navegação entre telas, redux e react-redux, e o redux-thunk para tratar funções assíncronas.

## Organização das Pastas

O react-native já gera algumas pastas como padrão, nesse projeto foi adicionada a pasta 'src' e dentro temos a pasta de 'components' onde foi salvo os componentes criados, e a pasta 'pages' que são as telas que possuem componentes, nesse caso temos a page Home onde mostra a lista de produtos, e a page Cart onde temos a lista de produtos do carrinho.
Pasta 'redux' onde fica a definição da store (conceito do redux), pasta de actions e reducers.
Pasta 'settings' onde temos arquivos para facilitar mudanças no futuro, onde temos as labels das páginas, definição das rotas, e constantes para user no type das actions (redux).
Para alguns components temos o index (a definição do componente) e um arquivo style para escrever o estilo de cada componente.


## Rodando a aplicação
1 - Baixe o projeto do github, com o comando git clone ou baixe o arquivo comprimido.

2 - Entre na pasta ecommerce do projeto e rode o comando 'npm install'.

3 - Utilizando o expo, basta digitar no terminal o comando 'yarn start', ou ('npm start' também funciona), e após uns segundos vai aparecer um QR code na tela, e com o aplicativo expo no celular basta escanear o QR code e o app vai funcionar no próprio aparelho celular.
    