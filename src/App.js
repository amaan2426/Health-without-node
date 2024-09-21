import { useState } from 'react';
import './App.css';
import ServiceForm from './Components/ServiceForm';
import ServiceList from './Components/ServiceList';

function App() {
  const [services, setServices] = useState([]);
  const [currentService, setCurrentService] = useState(null);

  const addService = (service) => {
    if (currentService) {
      setServices(services.map(s => (s.id === currentService.id ? { ...service, id: s.id } : s)));
    } else {
      setServices([...services, { ...service, id: Date.now() }]);
    }
  };

  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  const editService = (service) => {
    setCurrentService(service);
  };

  const clearCurrentService = () => {
    setCurrentService(null);
  };

  return (
    <div className="app">
      <h1>Healthcare Services Manager</h1>
      <ServiceForm currentService={currentService} onSubmit={addService} clearCurrentService={clearCurrentService} />
      <ServiceList services={services} onDelete={deleteService} onEdit={editService} />
    </div>
  );
}

export default App;
