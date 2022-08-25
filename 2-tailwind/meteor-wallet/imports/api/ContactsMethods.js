import { ContactsCollection } from './ContactsCollection';

Meteor.methods({
    'contacts.insert'({name, email, imageURL}){
        if(!name){
            throw new Meteor.Error("Name is required.");
        }
        return ContactsCollection.insert({name, email, imageURL, createdAt: new Date()});
    }
})
