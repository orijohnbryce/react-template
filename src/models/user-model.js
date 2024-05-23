export class UserModel {
    constructor(userObject) {
        this.firstName = userObject.firstName;
        this.lastName = userObject.lastName;
        this.email = userObject.email;
        this.password = userObject.password;
    }
}