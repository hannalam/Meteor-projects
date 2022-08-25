import { ContactsCollection } from "./ContactsCollection"
import { Meteor } from "meteor/meteor";

Meteor.public('allContacts', function publishAllContacts(){
    return ContactsCollection.find(); //Cursor  //Live Query
});