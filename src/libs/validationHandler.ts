import e from 'express';

export default function(config) {
     return function(req, res, next) {
          let eror = {
               key : "",
               location: "",
               Message:""
          };
          
          let ErrorArr: object[] = [];
          const key_arr: string[] = Object.keys(config);
          key_arr.forEach(function(element)  
          {
               console.log(element)
               
               const valKey = config[element]
               const req_location = valKey.in 
               console.log( Object.keys(req[valKey.in]).includes(element) )
               
               //  console.log(Number.isInteger(req[req_location][element]))
               // ==console.log("-------",!Number(req[req_location][element]))
               
               if( !Object.keys(req[valKey.in]).includes(element) ){
                    console.log("--------!req",element)
                    ErrorArr.push(eror = {
                         key : element,
                         location: config[element].in,
                         Message: config[element].errorMessage
                    })
               }

               if(valKey.required && !(req[req_location][element] ) ){
                    console.log("--------req",element)
                    ErrorArr.push(eror = {
                                   key : element,
                                   location: config[element].in,
                                   Message: config[element].errorMessage
                    })
               }

               
                if( !valKey.required && !(req[req_location][element]) ){
                    console.log("--------!req",element)
                    req[req_location][element] = config[element].default
                    console.log(element, req[req_location][element])
               }
               console.log()
                if(valKey.number){
                    if( !(Number.isInteger(Number(req[req_location][element]))) ){     //add && check name
                         console.log("--------number",element)
                         ErrorArr.push(eror = {
                              key : element,
                              location: config[element].in,
                              Message: config[element].errorMessage
                         })   
                    }
               }
                if(valKey.string){
                    if(!(typeof req[req_location][element] === 'string')) {
                         console.log("--------string",element)
                         ErrorArr.push(eror = {
                              key : element,
                              location: config[element].in,
                              Message: config[element].errorMessage
                         })   
                    }
               }
                if(valKey.isObject){
                    if(!(typeof req[req_location][element] === 'object')) {
                         console.log("--------object",element)
                         ErrorArr.push(eror = {
                              key : element,
                              location: config[element].in,
                              Message: config[element].errorMessage
                         })   
                    }

               }
               console.log(ErrorArr)   
               
          } );
              if(ErrorArr.length != 0){
                   res.send(ErrorArr)
              }
              else{
                   next();
              }
          
          
          
     };
}