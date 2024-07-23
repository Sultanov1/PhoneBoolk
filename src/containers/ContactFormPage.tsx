const ContactFormPage = () => {
  return (
    <form className="contact-inline">
      <h1 className='mb-4'>Add new contact</h1>
      <div className="form-group mb-3">
        <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"/>
        </div>
      <div className="form-group mb-3">
        <label htmlFor="number">Number</label>
          <input
            type="number"
            className='form-control'
            placeholder="Number"/>
      </div>
      <div className="form-group mb-3">
      <label htmlFor="email">Email</label>
          <input
            type="text"
            className='form-control'
            placeholder="Email"
          />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="photo">Photo</label>
          <input
            type="text"
            className="form-control"
            placeholder="image"/>
        </div>
      <button type="submit" className='btn btn-primary mt-3'>Create</button>
    </form>
  );
};



export default ContactFormPage;