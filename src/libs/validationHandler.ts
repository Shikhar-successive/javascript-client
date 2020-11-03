import e from 'express';

export default function(config) {
     return function(req, res, next) {
          let eror = {
               key : '',
               location: '',
               Message: ''
          };

          const ErrorArr: object[] = [];
          const key_arr: string[] = Object.keys(config);
          key_arr.forEach(function(element) {


               const valKey = config[element];
               const req_location = valKey.in;
              
               if ( !Object.keys(req[valKey.in]).includes(element) ) {
                    console.log('--------!key', element);
                    ErrorArr.push(eror = {
                         key : element,
                         location: config[element].in,
                         Message: config[element].errorMessage || 'Wrong Key'
                    });
               }

               if (valKey.required && !(req[req_location][element]) ) {
                    console.log('--------req', element);
                    ErrorArr.push(eror = {
                                   key : element,
                                   location: config[element].in,
                                   Message: config[element].errorMessage || 'Key Required'
                    });
               }


               if ( !valKey.required && !(req[req_location][element]) ) {
                    console.log('--------default val', element);
                    req[req_location][element] = config[element].default;
                    console.log(element, req[req_location][element]);
               }

               if (valKey.number) {
                    if ( !(Number.isInteger(Number(req[req_location][element]))) ) {     // add && check name
                         console.log('--------number', element);
                         ErrorArr.push(eror = {
                              key : element,
                              location: config[element].in,
                              Message: config[element].errorMessage || 'Number is Wrong'
                         });
                    }
               }

               if (valKey.string) {
                    if (!(typeof req[req_location][element] === 'string')) {
                         console.log('--------string', element);
                         ErrorArr.push(eror = {
                              key : element,
                              location: config[element].in,
                              Message: config[element].errorMessage || 'String is wrong'
                         });
                    }
               }

               if (valKey.regex) {
                    const reg = valKey.regex;
                    const testVal = req[req_location][element];
                    if (!reg.test(testVal)) {
                         console.log('--------regex', element);
                         ErrorArr.push(eror = {
                              key : element,
                              location: config[element].in,
                              Message: config[element].errorMessage || 'Regex error'
                         });
                    }
               }

               if (valKey.isObject) {
                    if (!(typeof req[req_location][element] === 'object')) {
                         console.log('--------object', element);
                         ErrorArr.push(eror = {
                              key : element,
                              location: config[element].in,
                              Message: config[element].errorMessage || 'Object error'
                         });
                    }

               }
               console.log(ErrorArr);

          } );
              if (ErrorArr.length !== 0) {
                   res.send(ErrorArr);
              }
              else {
                   next();
              }
     };
}
