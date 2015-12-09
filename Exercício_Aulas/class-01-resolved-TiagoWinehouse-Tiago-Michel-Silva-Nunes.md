# NodeJs - Aula 01 - Exercício

### autor: Tiago Michel Silva Nunes

## 1.  Explique como um processo síncrono e assíncrono roda no Node.js, dê exemplo para cada.

##### As funções síncrona são executas em ordem. Não pode executar outra função pois depende da conclusão de outra função (blocking).

```javascript

try {
    var value = JSON.parse(fs.readFileSync("file.json"));
    console.log(value.success);
}
// Syntax actually not supported in JS but drives the point.
catch(SyntaxError e) {
    console.error("invalid json in file");
}
catch(Error e) {  
    console.error("unable to read file")
}

```
##### Já as funções assíncronas não impode que você realize outras tarefas enquanto a função não seja terminada (non-blocking).

```javascript

fs.readFile("file.json", function(error, value) {
    if ( error ) {
        console.error("unable to read file");
    }
    else {
        try {
            value = JSON.parse(val);
            console.log(val.success);
        }
        catch( e ) {
            console.error("invalid json in file");
        }
    }
});
```

## 2. Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.


##### O interpretador JS que é o V8, também chamado de máquina virtual JS ou engine, desenvolvido pelo time da Google, desenvolvida em linguagem C++, tem como proposta fazer o aceleramento do desempenho de uma aplicação em JavaScript, assim compilando o seu código em formato nativo de máquina antes de executá-lo fazendo que rode em uma velocidade de um código binario compilado.

### Exemplo:

Veja nesse exemplo como leva uma declaração JavaScript para ser executada;

![Nodejs V8](https://www.packtpub.com/sites/default/files/video_screenshots/8270OS_01_Event%20Loop.png)

## 3. Qual a diferença entre um sistema single para um multi-thread?

##### Thread é uma sequencia de instruções sendo executadas em um programa. O processo Single-Thread é uma sequencia de instruções à ser executada para um processo, como exemplo é um processo regular UNIX que o sistema operacional é responsável por agendar e executar esses processos. O processo Multi-thread é um método de muitas execuçẽs repetidas de um processo para diferentes usuários sem ter que formar muitas instancias daquele processo ao nível so sistema operacional.

## 4. Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

##### Essa thread seria incluída a idle thread que tem a função de aguardar uma das 4 requisições que estão sendo executada na thread pool para depois serem executadas.

## 5. Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

##### Fazia um sistema de demostração do lado do servidor e mostrava a diferença que o NODEJS tem no mercado para a demais linguagem de programação. Além de tudo mostra logo que o JavaScript é poderoso!

## 6. Qual a versão do seu node?

```javascript
tiagonunes:~$ node -v
v5.1.1
```

## 7. Qual a versão do seu npm?

```javascript
tiagonunes:~$ npm -v
3.3.12
```










































