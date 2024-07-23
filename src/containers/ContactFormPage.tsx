import React, {FormEvent, useState} from 'react';
import {Contact} from '../types';
import {useAppDispatch} from '../app/hooks';
import {createContact} from '../store/contactThunk';

const ContactFormPage = () => {
  const dispatch = useAppDispatch();
 const [contact, setContact] = useState<Contact>({
   id: '',
   name: '',
   phone: '',
   email: '',
   photo: '',
 });


 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   setContact({
     ...contact,
     [e.target.name]: e.target.value,
   })
 }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createContact(contact));
  }

  return (
    <form onSubmit={handleSubmit} className="contact-inline">
      <h1 className='mb-4'>Add new contact</h1>
      <div className="form-group mb-3">
        <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name='name'
            value={contact.name}
            onChange={handleChange}
            placeholder="Name"/>
        </div>
      <div className="form-group mb-3">
        <label htmlFor="phone">Phone</label>
          <input
            type="text"
            className='form-control'
            name='phone'
            value={contact.phone}
            onChange={handleChange}
            placeholder="Number"/>
      </div>
      <div className="form-group mb-3">
      <label htmlFor="email">Email</label>
          <input
            type="email"
            name='email'
            className='form-control'
            value={contact.email}
            onChange={handleChange}
            placeholder="Email"
          />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="photo">Photo</label>
          <input
            type="text"
            name='photo'
            className="form-control"
            value={contact.photo}
            onChange={handleChange}
            placeholder="image"/>
        </div>
      <button type="submit" className='btn btn-primary mt-3'>Create</button>
    </form>
  );
};



export default ContactFormPage;