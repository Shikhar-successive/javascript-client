import e, { query } from 'express';

export default function(config) {
     return (req, res, next) => {
          let eror = {
               key: '',
               location: '',
               Message: ''
          };

          const ErrorArr: object[] = [];
          const key_arr: string[] = Object.keys(config);
          key_arr.forEach(function (element) {


               const valKey = config[element];
               const req_location = valKey.in;

               // if ( !Object.keys(req[valKey.in]).includes(element) ) {
               //      console.log('--------!key', element);
               //      ErrorArr.push(eror = {
               //           key : element,
               //           location: config[element].in,
               //           Message: config[element].errorMessage || 'Wrong Key'
               //      });
               //      return;
               // }
               if (valKey.required && !(req[req_location][element])) {
                    console.log('--------req', element);
                    ErrorArr.push(eror = {
                         key: element,
                         location: config[element].in,
                         Message: config[element].errorMessage || 'Key Required'
                    });
                    return;
               }


               if (!valKey.required && !(req[req_location][element])) {
                    console.log('--------default val', element);
                    req[req_location][element] = config[element].default;
                    console.log(element, req[req_location][element]);
               }

               if (valKey.number) {
                    if (!(Number.isInteger(Number(req[req_location][element])))) { // add && check name
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
                    if (!(typeof req[req_location][element] === 'string')) {
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
                    const testVal = req[req_location][element];
                    console.log(reg);
                    console.log(reg.test(testVal));
                    if (!reg.test(testVal)) {
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
                    if (!(typeof req[req_location][element] === 'object')) {
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
          if (ErrorArr.length !== 0) {
               res.send(ErrorArr);
          }
          else {
               next();
          }
     };
}
