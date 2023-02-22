###PROJETO LARAVEL 10 + VUEJS

Passos para instalar:

1- Clone o projeto

2- Entre na pasta do projeto

3- Execute o comando composer install

4- Execute o comando php artisan jwt:secret

5- Execute o comando npm install

6- Verifique os dados do seu env para conexão com o banco de dados.

7- Com os dados corretos no env rode o comando php artisan migrate

8- rode o comando npm run watch

9- rode o comando php artisan serve

10- Acesse localhost:8000/ ou localhost:8000/login para acessara page de login, caso não possua usuario, acesse localhost:8000/register ou clique no botão de criar conta da pagina de login.

11- Já dentro da dashboard teremos 2 abas uma de Autor e outra de livro, levei em consideração que só poderia existir um livro se houvesse um autor, ou seja a aba de livro só aparece quando houver autor.


###UPDATES NECESSÁRIOS

Aqui nesse projeto eu faria melhorias no frontend, como toast para os errors e um design mais bonito (mas não estava muito criativo então usei templates prontos que encontrei). faria mais verificações tanto front quanto backend dos dados que esta bem basico. Também tomaria mais cuidado com os redirects quando acontece errors (como tomei cuidado com as verificações as brechas de errors são poucas).