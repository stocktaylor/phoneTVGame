// Import the phoneTVGame game file.
const ptg = require('./phoneTVGame');

//Import graceful-fs module
const fs = require(`graceful-fs`);

let globalVars = {}



exports.init = () => {
    return new Promise((resolve, reject) => {
        try {
            fs.readFile(`./config.json`, `ascii`, (err, data) => {
                if(err) {
                    reject(err);
                } else {
                    let json = JSON.parse(data);

                    // for(globalVarKey in globalVarKeys) {
                          
                    // }

                    resolve();
                }
            });
        } catch(err) {
            reject(err);
        }
    });

}

exports.ptg = () => {
    return ptg;
}




let hlpFn = {
    isUndefined: (chk) => {
        return typeof chk == `undefined`
    },

    isFunction: (chk) => {
        return typeof chk == `function`;
    },

    jsonIsCyclic: (obj) => {
        if (obj && typeof obj === 'object') {
          if (seenObjects.indexOf(obj) !== -1) {
            return true;
          }
          seenObjects.push(obj);
          for (var key in obj) {
            if (obj.hasOwnProperty(key) && detect(obj[key])) {
              console.log(obj, 'cycle at ' + key);
              return true;
            }
          }
        }
        return false;
      }
}

exports.hlpFn = hlpFn;