"use strict";

var Client = require('ssh2').Client;

var conn = new Client();
conn.on('ready', function () {
  //ready
  console.log('ready sftp...'); //sftp

  conn.sftp(function (err, sftp) {
    //throw if error
    //if(err) throw err;
    //file path
    var local = "./test.txt";
    var remote = "./test_up.txt"; //upload

    sftp.fastPut(local, remote, {}, function (err) {
      if (err) {
        console.log("upload error.");
      } else {
        console.log("uploaded.");
      }
    });
  }); //connection
}).connect({
  host: 'localhost',
  port: 22,
  username: 'zer0',
  //privateKey:require('fs').readFileSync('/Users/hoge/.ssh/id_rsa'),
  passphrase: 'zer0'
});