const ssh2 = require('ssh2');
const readinput = require('readline-sync');
const connection = new ssh2();
connection.on('error', function(err){
  // not ready at all
  console.log("test err??");
});

connection.on('ready', function(){
  // ready to go
  const execSync = require('child_process').execSync;
  let flag = true;

  while (flag === true) {
    var name = readinput.question("$");
    if (name === "END") {flag = false;};
    let result =  execSync(name).toString();
    console.log(result);
  };

  console.log("connect end");
  connection.end();
});
connection.connect({
  host: 'localhost',
  user: 'zer0',
  password: 'zer0'
});