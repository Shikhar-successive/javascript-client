import e, { query } from 'express';

export default function (config) {
     return (req, res, next) => {
          let eror = {
               status: '',
               Message: '',
               data: ''
          };
          console.log('---------inside validation handel');
          const ErrorArr: object[] = [];
          const keyArray: string[] = Object.keys(config);
          keyArray.forEach((element) => {


               const valKey = config[element];
               const reqLocation = valKey.in;

               if (valKey.required && !(req[reqLocation][element])) {
                    console.log('--------req', element);
                    ErrorArr.push(eror = {
                         status: 'Bad Request',
                         Message: 'Key not provided/Key Required',
                         data: element
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
                              status: 'Bad Request',
                              Message: 'Key not provided/Key Required',
                              data: element
                         });
                    }
                    return;
               }

               if (valKey.string) {
                    if (!(typeof req[reqLocation][element] === 'string')) {
                         console.log('--------string', element);
                         ErrorArr.push(eror = {
                              status: 'Bad Request',
                              Message: 'Key not provided/Key Required',
                              data: element
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
                              status: 'Bad Request',
                              Message: 'Key not provided/Key Required',
                              data: element
                         });
                    }
                    return;
               }

               if (valKey.isObject) {
                    if (!(typeof req[reqLocation][element] === 'object')) {
                         console.log('--------object', element);
                         ErrorArr.push(eror = {
                              status: 'Bad Request',
                              Message: 'Key not provided/Key Required',
                              data: element
                         });
                    }
                    return;
               }
               // console.log(ErrorArr);
          });
          console.log('Erron array--------', ErrorArr);
          if (ErrorArr.length !== 0) {
               res.status(400).send(ErrorArr);
          }
          else {
               next();
          }
     };
}
