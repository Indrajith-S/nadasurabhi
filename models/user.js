const fs= require('fs');
const path= require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'users.json'
);

const getuserfromfile = cb =>{
    fs.readFile(p, (err,fileContent) =>{
        if (err){
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

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



module.exports = class User {
    constructor(u,p) {
      this.username = u;
      this.password = p;
    }
  
    save() {
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
    console.log(getuserfromfile);
    }
}