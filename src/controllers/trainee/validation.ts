const config = {
          Newcreate: {
               createdBy: {
                    required: true,
                    string: true,
                    in: ['body'],
                    errorMessage: 'createdBy is required',
                    },

               name: {
                    required: true,
                    in: ['body'],
                    errorMessage: 'Name is required',
                    },
               role: {
                    required: true,
                    in: ['body'],
                    errorMessage: 'Role is required',
                    },
               email: {
                    required: true,
                    regex: /^[a-zA-Z0-9+_.-]+@+[a-zA-Z0-9+_.-]+.+[a-zA-Z0-9+_.-]+$/,
                    in: ['body'],
                    errorMessage: 'email is required',
                    },
               password: {
                    required: true,
                    in: ['body'],
                    errorMessage: 'Password is required',
                    }
               },

          delete: {
               id: {
                    required: true,
                    string: true,
                    errorMessage: 'Id is required',
                    in: ['params']
                    },
               deletedBy: {
                    required: false,
                    string: true,
                    default: 'Admin',
                    errorMessage: 'deletedby is required',
                    in: ['body']
                    }
          },

          post: {
               name: {
                    required: true,
                    in: ['body'],
                    errorMessage: 'name is required',
                    },
               email: {
                    required: true,
                    regex: /^[a-zA-Z0-9+_.-]+@+[a-zA-Z0-9+_.-]+.+[a-zA-Z0-9+_.-]+$/,
                    in: ['body'],
                    errorMessage: 'email is required',
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
               },
               sortby: {
                    required: false,
                    default: 'createdAt',
                    string: true,
                    in: ['query'],
                    errorMessage: 'sortby is invalid',
               },
               order: {
                    required: false,
                    default: -1,
                    number: true,
                    in: ['query'],
                    errorMessage: 'order is invalid',
               },
               search: {
                    required: false,
                    default: '',
                    string: true,
                    in: ['query'],
                    errorMessage: 'search is invalid',
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