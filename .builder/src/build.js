
let fs = require('fs');
let path = require('path');
let exec = require('child_process').exec;

let parseCompoundArrayToHTML = require('./func/mottoEx.js');

let mottoArray = require('../../assets/data/motto.js');

let mottoHTML = parseCompoundArrayToHTML(mottoArray);

