import React, {FormEvent, useState} from 'react';
import {ApiContact} from '../types';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {createContact} from '../store/contactThunk';
import {useNavigate} from 'react-router-dom';
import notAvailable from '../assets/notAvailable.jpg';
import {toast} from 'react-toastify';
import Spinner from '../components/Spinner';
import {isSelectLoading} from '../store/contactSlice';

const ContactFormPage = () => {
  const dispatch = useAppDispatch();
  const isCreating = useAppSelector(isSelectLoading);
  const navigate = useNavigate();
  const [contact, setContact] = useState<ApiContact>({
    name: '',
    phone: '',
    email: '',
    photo: '',
  });

  const photoPreview = contact.photo || notAvailable;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setContact((prevState) => ({...prevState, [name]: value}));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try  {
      dispatch(createContact(contact)).unwrap;
    } catch (e) {
      toast.error('Error! Something went wrong!');
    }


    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="contact-inline">
      <h1 className="mb-4">Add new contact</h1>
      <div className="form-group mb-3">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={contact.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          className="form-control"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
          placeholder="Number"
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={contact.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="photo">Photo</label>
        <input
          type="text"
          name="photo"
          className="form-control"
          value={contact.photo}
          onChange={handleChange}
          placeholder="image"
          required
        />
      </div>
      <div className="mt-3">
        <label htmlFor="photo" className="mb-1">Preview Photo</label>
        <img src={photoPreview} alt={contact.name} className="img-thumbnail d-block" style={{maxWidth: '200px'}}/>
      </div>
      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary mt-3">
          Save the Contact
          {isCreating  && <Spinner/>}
        </button>
      </div>
    </form>
  );
};


export default ContactFormPage;