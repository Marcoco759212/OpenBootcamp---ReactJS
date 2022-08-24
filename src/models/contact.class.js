export class Contact {

    name = '';
    lastName = '';
    email = '';
    isConected = false;

    constructor (name, lastName, email, isConected){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.isConected = isConected;
    }
}