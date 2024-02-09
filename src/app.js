/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  var quien = [
    "Mi gato",
    "Mi perro",
    "Un oso polar",
    "Juan el carnicero",
    "Tu abuela"
  ];
  var quienAleatorio = quien[Math.floor(Math.random() * quien.length)];
  var queHizo = [
    "se comió a",
    "se fué de Fiesta con",
    "salió de paseo con",
    "le habló a",
    "miró por la ventana a"
  ];
  var queHizoAleatorio = queHizo[Math.floor(Math.random() * queHizo.length)];
  var conQueObjeto = [
    "mi portatil",
    "mi coche",
    "una manzana",
    "un gato volador",
    "Vin Diesel"
  ];
  var conQueObjetoAleatorio =
    conQueObjeto[Math.floor(Math.random() * conQueObjeto.length)];
  var cuando = [
    "ayer",
    "hace un mes",
    "en año nuevo",
    "mientras veia una peli",
    "saltando en paracaidas"
  ];
  var cuandoAleatorio = cuando[Math.floor(Math.random() * cuando.length)];
  var excusaCompleta =
    quienAleatorio +
    " " +
    queHizoAleatorio +
    " " +
    conQueObjetoAleatorio +
    " " +
    cuandoAleatorio;

  var fotos = [
    "https://files.cults3d.com/uploaders/14533590/illustration-file/4c99badc-2e58-4d60-8fe0-2103d9175320/Jerry_Riendo.png",
    "https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/LC7ECDPFNRLHJBALGOUDKITM5Y.jpg",
    "https://phantom-elmundo.unidadeditorial.es/38d479b38af00f9b09ab67bd57842ef6/f/jpg/assets/multimedia/imagenes/2021/06/21/16242646252486.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx1ESY2vAvH3fqOc8TJw4vBEyb3_0wjsu70m5ekzj0WN2g1g7GL2xSkJ3haRBLUvcCRf0&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYDHzLFtuAK_SNWbNgIOHgvD1sMUpv9dLuDUSSaoyGg&s"
  ];
  var imagenAleatoria = fotos[Math.floor(Math.random() * fotos.length)];
  document.getElementById("imagen").src = imagenAleatoria;
  document.getElementById("excuse").innerHTML = excusaCompleta;
  console.log("Hello Rigo from the console!");
};
