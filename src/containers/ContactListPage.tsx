const ContactListPage = () => {
  return (
    <div className='container'>
      <h1 className='my-3'>Contacts</h1>
      <div className='list-group'>
        <div className='list-group-item list-group-item-action'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfrT8Vjk9QJrwwSwwBUzizJ2vPTiZ9Y6lcA&s" alt="img" className='rounded-circle me-2'/>
          <span className='ms-5 fs-1'>John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default ContactListPage;