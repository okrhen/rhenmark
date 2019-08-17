import React, { FormEvent, useState } from 'react'
import { firebaseDB, firebaseDbTimeStamp } from '../../../config/firebase-config'

const initialState = {
    name: '',
    email: '',
    message: ''
}

const ContactForm = () => {

    const [userInput, setUserInput] = useState(initialState)
    const isContacted = Boolean(localStorage.getItem('contacted') === 'true');
    const onSubmit = (e: FormEvent) => {
        if(e) e.preventDefault()

        if(!isContacted) {
            const identity = userInput.name.replace(/ /g, '')
            firebaseDB.ref().child(`visitors/${identity}`).set({...userInput, createdAt: firebaseDbTimeStamp}, (res) => {
                localStorage.setItem('contacted', 'true');
                setUserInput(initialState)
            });
        }
       
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        event.persist();
         setUserInput({
             ...userInput,
            [event.target.name]: event.target.value
        })
    }

    return(
    <form className="Form" onSubmit={(e) => onSubmit(e)}>
        <div className="Form-group">
            <input type="text" name="name" value={userInput.name} placeholder="Name" className="Form-group-input" onChange={onChange} required/>
        </div>
        <div className="Form-group">
            <input type="email" name="email" value={userInput.email} placeholder="Email Address"  onChange={onChange} className="Form-group-input" required/>
        </div>
        <div className="Form-group">
            <textarea name="message" value={userInput.message} placeholder="Your message (max. 250 chars)" onChange={onChange} className="Form-group-textarea" maxLength={250} required/>
        </div>
        <div className="Form-group">
            <button className="Form-group-btn" type="submit" disabled={isContacted}>{isContacted ? 'Thank you for contacting' : 'Send'}</button>
        </div>
    </form>
)}

export default ContactForm