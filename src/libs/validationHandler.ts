import e, { query } from 'express';

export default function(config) {
     return (req, res, next) => {
          let eror = {
               key: '',
               location: '',
               Message: ''
          };
          console.log('---------inside validation handel');
          const ErrorArr: object[] = [];
          const keyArray: string[] = Object.keys(config);
          keyArray.forEach((element) => {


                    const valKey = config[element];
                    const reqLocation = valKey.in;

                    // if ( !Object.keys(req[valKey.in]).includes(element) ) {
                    //      console.log('--------!key', element);
                    //      ErrorArr.push(eror = {
                    //           key : element,
                    //           location: config[element].in,
                    //           Message: config[element].errorMessage || 'Wrong Key'
                    //      });
                    //      return;
                    // }
                    if (valKey.required && !(req[reqLocation][element])) {
                         console.log('--------req', element);
                         ErrorArr.push(eror = {
                              key: element,
                              location: config[element].in,
                              Message: config[element].errorMessage || 'Key Required'
                         });
                         return;
                    }


                    if (!valKey.required && !(req[reqLocation][element])) {
                         console.log('--------default val', element);
                         req[reqLocation][element] = config[element].default;
                         console.log(element, req[reqLocation][element]);
                    }

                    if (valKey.number) {
                         if (!(Number.isInteger(Number(req[reqLocation][element])))) { // add && check name
                              console.log('--------number', element);
                              ErrorArr.push(eror = {
                                   key: element,
                                   location: config[element].in,
                                   Message: config[element].errorMessage || 'Number is Wrong'
                              });
                         }
                         return;
                    }

                    if (valKey.string) {
                         if (!(typeof req[reqLocation][element] === 'string')) {
                              console.log('--------string', element);
                              ErrorArr.push(eror = {
                                   key: element,
                                   location: config[element].in,
                                   Message: config[element].errorMessage || 'String is wrong'
                              });
                         }
                         return;
                    }

                    if (valKey.regex) {
                         const reg = valKey.regex;
                         const testVal = req[reqLocation][element];
                         // console.log(reg);
                         console.log(testVal);
                         console.log('regex test result', reg.test(testVal));
                         if (reg.test(testVal) === false) {
                              console.log('--------regex', element);
                              ErrorArr.push(eror = {
                                   key: element,
                                   location: config[element].in,
                                   Message: config[element].errorMessage && 'Regex error'
                              });
                         }
                         return;
                    }

                    if (valKey.isObject) {
                         if (!(typeof req[reqLocation][element] === 'object')) {
                              console.log('--------object', element);
                              ErrorArr.push(eror = {
                                   key: element,
                                   location: config[element].in,
                                   Message: config[element].errorMessage || 'Object error'
                              });
                         }
                         return;
                    }
                    // console.log(ErrorArr);
               });
          console.log('Erron array--------',ErrorArr);
          if (ErrorArr.length !== 0) {
               res.send(ErrorArr);
          }
          else {
               next();
          }
     };
}
