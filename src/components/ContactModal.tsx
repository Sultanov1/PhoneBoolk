import {Link} from 'react-router-dom';

const ContactModal = () => {
  return (
    <div className="modal modal-show" style={{display: 'block'}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-between">
            <h3>Contact Modal</h3>
            <button type="button" className="close btn btn-outline-danger" style={{padding: '2px 13px'}}>
              <span className="fs-5" aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body d-flex justify-content-end align-items-end">
            <img src="https://imageio.forbes.com/specials-images/imageserve/5f64397931669e167fc57eaf//960x0.jpg?format=jpg&width=960"
            alt="name" className="rounded mb-3" style={{width: '210px' , height: '170px'}}/>
            <div className='modal-body mb-4'>
              <h2 className="modal-title mb-3">Modal title</h2>
              <p><strong>Phone:</strong>131313213</p>
              <p><strong>Email:</strong>JohnDoe001@gmail.com</p>
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-center align-items-center">
            <Link to="/new" className="btn btn-outline-primary btn-lg" style={{width: '48%'}}>Edit</Link>
            <button type="button" className="btn btn-outline-danger btn-lg" style={{width: '48%'}}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;