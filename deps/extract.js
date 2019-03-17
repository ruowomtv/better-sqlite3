'use strict';
const path = require('path');
const tar = require('tar');
const fs = require('fs');

const dest = process.argv[2];

[
  'sqlite3.c',
  'sqlite3.h',
  'sqlite3ext.h',
].forEach(function(it){
  var buf = fs.readFileSync(__dirname + '/sqlite3/' + it)
  fs.writeFileSync(dest + '/' + it, buf)
})
