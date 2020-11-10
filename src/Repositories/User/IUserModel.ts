import IversionableDocument from '../versionable/IVersionableDocument';

interface IUserModel extends IversionableDocument {
     id: string;
     name: string;
     email: string;
     role: string;
     password: string;
}

export default IUserModel;