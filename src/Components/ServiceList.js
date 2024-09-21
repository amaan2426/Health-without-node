import React from 'react';

const ServiceList = ({ services, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Healthcare Services</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.name}</td>
              <td>{service.description}</td>
              <td>Rs. {service.price}</td>
              <td>
                <button onClick={() => onEdit(service)} className='EditBut'>Edit</button>
                <button onClick={() => onDelete(service.id)} className='DelBut'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceList;