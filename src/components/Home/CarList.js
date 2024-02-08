import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Parent from '../Parent';

const CarList = () => {
    const formDetails = useSelector((state) => state.details.brandDetails);
    const [currentPage, setCurrentPage] = useState(1);
    const [modelFilter, setModelFilter] = useState('');
    const [colorFilter, setColorFilter] = useState('');
    const [locationFilter, setLocationFilter] = useState('');
    const [ownersFilter, setOwnersFilter] = useState('');
    const [manufactureFilter, setManufactureFilter] = useState('');
    const [transmissionFilter, setTransmissionFilter] = useState('');
    const [insuranceFilter, setInsuranceFilter] = useState('');
    const [externalFitmentsFilter, setExternalFitmentsFilter] = useState('');
    const [kmsFilter, setKmsFilter] = useState('');
  
    const itemsPerPage = 10;
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
    const filteredItems = formDetails.filter((car) => (
      car.model.toLowerCase().includes(modelFilter.toLowerCase()) &&
      car.color.toLowerCase().includes(colorFilter.toLowerCase()) &&
      car.location.toLowerCase().includes(locationFilter.toLowerCase()) &&
      car.noOfOwners.toLowerCase().includes(ownersFilter.toLowerCase()) &&
      car.yearOfManufacture.toLowerCase().includes(manufactureFilter.toLowerCase()) &&
      car.transmission.toLowerCase().includes(transmissionFilter.toLowerCase()) &&
      car.insuranceValidUntil.toLowerCase().includes(insuranceFilter.toLowerCase()) &&
      car.externalFitments.toLowerCase().includes(externalFitmentsFilter.toLowerCase()) &&
      car.kms.toLowerCase().includes(kmsFilter.toLowerCase())
    ));
  
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h3>Saved Details</h3>
      <div className="container">
        <div className="row">
            <div className="col-md-2 mb-3">
                <input
                type="text"
                placeholder="Filter by model"
                value={modelFilter}
                onChange={(e) => setModelFilter(e.target.value)}
                />
            </div>
            <div className="col-md-2 mb-3">
                <input
                type="text"
                placeholder="Filter by color"
                value={colorFilter}
                onChange={(e) => setColorFilter(e.target.value)}
                />
            </div>
            <div className="col-md-2 mb-3">
                <input
                type="text"
                placeholder="Filter by location"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                />
            </div>
            <div className="col-md-2 mb-3">
            <input
              type="text"
              placeholder="Filter by Owners"
              value={ownersFilter}
              onChange={(e) => setOwnersFilter(e.target.value)}
            />
          </div>
          <div className="col-md-2 mb-3">
            <input
              type="text"
              placeholder="Filter by Manufacture Year"
              value={manufactureFilter}
              onChange={(e) => setManufactureFilter(e.target.value)}
            />
          </div>
          <div className="col-md-2 mb-3">
            <input
              type="text"
              placeholder="Filter by Transmission"
              value={transmissionFilter}
              onChange={(e) => setTransmissionFilter(e.target.value)}
            />
          </div>
          <div className="col-md-2 mb-3">
            <input
              type="text"
              placeholder="Filter by Insurance Valid Until"
              value={insuranceFilter}
              onChange={(e) => setInsuranceFilter(e.target.value)}
            />
          </div>
          <div className="col-md-2 mb-3">
            <input
              type="text"
              placeholder="Filter by External Fitments"
              value={externalFitmentsFilter}
              onChange={(e) => setExternalFitmentsFilter(e.target.value)}
            />
          </div>
          <div className="col-md-2 mb-3">
            <input
              type="text"
              placeholder="Filter by KMS"
              value={kmsFilter}
              onChange={(e) => setKmsFilter(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="row">
            {currentItems.map((car, index) => (
            <div key={index} className="col-md-2 mb-3">
                <div className="card">
                <div className="card-body">
                    <p className="card-text"><strong>Model:</strong> {car.model}</p>
                    <p className="card-text"><strong>Color:</strong> {car.color}</p>
                    <p className="card-text"><strong>Location:</strong> {car.location}</p>
                    <p className="card-text"><strong>No of Owner:</strong> {car.noOfOwners}</p>
                    <p className="card-text"><strong>Year of Manufacture:</strong> {car.yearOfManufacture}</p>
                    <p className="card-text"><strong>Transmission:</strong> {car.transmission}</p>
                    <p className="card-text"><strong>Insurance Valid Until:</strong> {car.insuranceValidUntil}</p>
                    <p className="card-text"><strong>External Fitments:</strong> {car.externalFitments}</p>
                    <p className="card-text"><strong>KMS:</strong> {car.kms}</p>
                    <hr />
                </div>
                </div>
            </div>
            ))}
        </div>

        <div>
            {filteredItems.length > itemsPerPage && (
            <div className="pagination">
                {[...Array(Math.ceil(filteredItems.length / itemsPerPage))].map((_, index) => (
                <button
                    key={index}
                    className={`btn btn-secondary ${currentPage === index + 1 ? 'active' : ''}`}
                    onClick={() => paginate(index + 1)}
                >
                    {index + 1}
                </button>
                ))}
            </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Parent(CarList);
