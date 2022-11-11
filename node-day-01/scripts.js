/* 
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
 */

// callback

/*
const fs = require('fs')
console.log('Primeiro comando.')
fs.readFile('./text.txt',callback)
function callback(err,content){
    if (err) return console.error('erro')
    console.log(String(content))
}
console.log('Segundo comando.')
console.log('Terceiro comando.')

// utilizando programação assíncrona
setTimeout(() => (console.log('testando o setTimeout')), 3000)
console.log('comando que está após setTimeout')
 */
// utilizando programação síncrona

/* 
function sum(){
  const result = 1+1
  if(result === 2){
    success()
  }else{
    erro()
  }
}
function success(){
  console.log('Sucesso! A soma é 2.')
}
function erro(){
  console.log('A soma não é 2. Alguma coisa deu errado...')
}

sum()
console.log('testando exibição...')
 */

// transformando em callback (programação assíncrona)

/* 
function sum(callback, callbackError){
  const result = 1+1
  if(result === 2){
    callback()
  }else{
    callbackError()
  }
}

sum(
  () => (console.log('Sucesso! A soma é 2.')),
  () => (console.log('A soma não é 2. Alguma coisa deu errado...'))
)
console.log('testando exibição...')
 */

// Promise - é uma classe; a tradução significa promessa
// then()
// resolve e reject

const promise = new Promise((resolve,reject)=> {
  const result = 1+2
  if(result === 2){
    resolve('Sucesso! A soma é 2.')
  }else{
    reject('A soma não é 2. Alguma coisa deu errado...')
  }
})

promise.then(
  ((resultado)=>(console.log(resultado))),
  ((erro)=>(console.log(erro)))
)

// voltando para calback

/* 
const name = 'Paulo Sampaio'

function whoIsTheBest(callback,callbackError){
  if(name != 'Paulo Sampaio'){
    callbackError('Tá errado. Não tem como!')
  }else{
    callback({
      name: name,
      message: `humildemente o melhor`
    })
  }
}
whoIsTheBest( 
  ((success)=>(console.log(`${success.name} é ${success.message}.`))) ,
  ((error)=>(console.log(error))) 
)
 */

// transformando em Promise

const name = 'Paulo Sampaio'

const p = new Promise((resolve, reject) => {
  if(name != 'Paulo Sampaio'){
    reject('Tá errado. Não tem como!')
  }else{
    resolve({
      name: name,
      message: `humildemente o melhor`
    })
  }
})

p.then( 
  ((success)=>(console.log(`${success.name} é ${success.message}.`))) ,
  ((error)=>(console.log(error))) 
)
