import React from "react";
import { useSubscribe,useFind } from 'meteor/react-meteor-data';
import { ContactsCollection } from "../api/ContactsCollection";


export const ContactList = () => {
    const isLoading = useSubscribe('allContacts');
    const contacts = useFind(() => {
      return ContactsCollection.find({}, {sort:{createdAt: -1}});
    });

    //const contacts = useTracker(() => {
        //return ContactsCollection.find({}, {sort:{createdAt: -1}}).fetch();//Tracker
    //}) 

    if(isLoading()){
      return <p>Loading..</p>
    }
    
    return (
      <>
        <h3>Contact List</h3>
        {contacts.map(contact =>(
            <li key={contact.email}>{contact.name} - {contact.email}</li>
        ))}

      </>
   )
}