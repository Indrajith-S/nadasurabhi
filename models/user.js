const fs = require('fs') ,
 path = require('path') ,
 util = require('util') ;

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'users.json'
);

var getuserfromfile;
function getValues()
{
  fs.readFile(p, function(err,fileContent){
    if (err){
        writeValue([]);
        process.exit(1);
    } else {
        writeValue(JSON.parse(fileContent));
    }
  })
};



function writeValue(contents){
  getuserfromfile = contents;
}
getValues();

// module.exports= class User {
//     constructor(username, password){
//         this.username= username;
//         this.password= password;
//     }

//     save(){
//         getuserfromfile(user=>{
//             users.push(this);
//             fs.writeFile(p, JSON.stringify(users), err=>{
//                 console.log(err);
//             });
//         });
//     }

// };

/**
 * const p = path.join(
          path.dirname(process.mainModule.filename),
          'data',
          'users.json'
        );
        fs.readFile(p, (err, fileContent) => {
            let users = [];
            if (!err) {
              users = JSON.parse(fileContent);
            }
            users.push(this);
            fs.writeFile(p, JSON.stringify(users), err => {
              console.log(err);
            });
      });
 */


module.exports = class User {
    constructor(u,p) {
      this.username = u;
      this.password = p;
    }
  
    checkLogin() {
      const index = getuserfromfile.findIndex(values =>{
        return( values.username ===  this.username && values.password === this.password )
      });
      
      if(index !== -1 ){
        console.log("Logged In")
        return true;
      }
      else{
        console.log("Bhosdike Name shi Dallo")
        return false;
      }
    }


    saveInfo(){
      const p = path.join(
        path.dirname(process.mainModule.filename),
        'data',
        'users.json'
      );
      fs.readFile(p, (err, fileContent) => {
          let users = [];
          if (!err) {
            users = JSON.parse(fileContent);
          }
          users.push(this);
          fs.writeFile(p, JSON.stringify(users), err => {
            console.log(err);
          });
    });
    }
}