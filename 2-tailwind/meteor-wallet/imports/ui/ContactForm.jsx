import React, { useState } from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import { Meteor } from "meteor/meteor";

export const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [imageURL, setImageUrl] = useState("");

    const saveContact = () => {
        //console.log({name, email, imageURL});
        //ContactsCollection.insert({name, email, imageURL});
        Meteor.call('contacts.insert', {name, email, imageURL}, (errorResponse) => {
          if(errorResponse){
            alert(errorResponse.error);
            console.log(errorResponse.error);
          }else{
            setName("");
            setEmail("");
            setImageUrl("");
          }
        });
        
    }

    return (
    <form>
      <div>
        <label htmlFor='name'>
          Name
        </label>
        <input  id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)} 
                type="text"/>
      </div>
      <div>
        <label htmlFor='email'>
          Email
        </label>
        <input  id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                type="email"/>
      </div>
      <div>
        <label htmlFor='imageUrl'>
          Image URL
        </label>
        <input  id="imageUrl" 
                value={imageURL}
                onChange={(e) => setImageUrl(e.target.value)} 
                type="text"/>
      </div>
      <div>
        <button type="button" onClick={saveContact}>Save Contact</button>
      </div>
    </form>
    )
}