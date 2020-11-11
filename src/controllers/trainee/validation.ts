const config = {
     create: {
          name: {
               required: true,
               regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
               in: ['body'],
               errorMessage: 'Name is required',
               }
          },

          Newcreate: {
               createdBy: {
                    required: true,
                    string: true,
                    in: ['body'],
                    errorMessage: 'Name is required',
                    }
               },

          delete: {
               id: {
                    required: true,
                    string: true,
                    errorMessage: 'Id is required',
                    in: ['body']
                    },
               deletedBy: {
                    required: true,
                    string: true,
                    errorMessage: 'deletedby is required',
                    in: ['body']
                    }
          },

          post: {
               role: {
                    required: true,
                    in: ['body'],
                    errorMessage: 'Role is required',
                    }
          },

          get: {
               skip: {
                    required: false,
                    default: 0,
                    number: true,
                    in: ['query'],
                    errorMessage: 'Skip is invalid',
               },
               limit: {
                    required: false,
                    default: 10,
                    number: true,
                    in: ['query'],
                    errorMessage: 'Limit is invalid',
               }
               },


          update: {
               originalId: {
                    required: true,
                    string: true,
                    in: ['body']
               },
               updatedBy: {
                    required: true,
                    string: true,
                    in: ['body']
               }
          }
     };

export default config;