"use strict" 

class AddressBook {
    constructor(contacts) {
        this.contacts = [new Contact ("justin", "jp@gmail.com", "222-222-2222", "fan")];
    }
    add(info) {
        this.contacts.push(info);
        
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    print() {

        for (let i = 0; i < this.contacts.length; i++) {
            console.log(`${i}. ${this.contacts[i].name} E:${this.contacts[i].email} P:${this.contacts[i].phone} R:${this.contacts[i].relation}`);
        }
        
    }
}

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

let addressBook = new AddressBook ();


while (true) {
    let choice = prompt(`add, delete, print, or quit`);
        if (choice === "add") {
            let name = prompt("Name?");
            let email = prompt("Email?");
            let phone = prompt("Phone?");
            let relation = prompt("Relation?");
            let contact = new Contact(name, email, phone, relation);
            addressBook.add(contact);
        
        } else if (choice === "delete") {
            let del = prompt ("Index to delete?");
            addressBook.deleteAt(del);

        } else if (choice === "print") {
            addressBook.print();

        } else if (choice === "quit") {
            break;
        }
}