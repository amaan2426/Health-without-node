import React, { useState, useEffect } from 'react';

const ServiceForm = ({ currentService, onSubmit, clearCurrentService }) => {
  const [service, setService] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    if (currentService) {
      setService(currentService);
    } else {
      setService({ name: '', description: '', price: '' });
    }
  }, [currentService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!service.name || !service.description || !service.price) {
      alert('Please fill in all fields');
      return;
    }
    onSubmit(service);
    clearCurrentService();
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={service.name} onChange={handleChange} placeholder="Service Name" />
      <input type="text" name="description" value={service.description} onChange={handleChange} placeholder="Description" />
      <input type="number" name="price" value={service.price} onChange={handleChange} placeholder="Price" />
      <button type="submit" className='submit'>{currentService ? 'Update' : 'Add'} Service</button>
      <hr style={{color:"red",width:"100%"}}/>
    </form>
    
  );
};

export default ServiceForm;