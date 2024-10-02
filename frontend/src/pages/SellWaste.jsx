import React, { useState } from 'react';
import { Titles } from '../components/Titles';
import plastic from '../assets/plastic.png';
import paper from '../assets/paper.png';
import ewaste from '../assets/e-waste.png';
import clothes from '../assets/clothes.png';

export const SellWaste = () => {
  const [showModal, setShowModal] = useState(false);
  const [pickupData, setPickupData] = useState({
    userId: 123,
    pickupAddress: {
      addressID: 1,
      address: "45 MG Road",
      city: "Mumbai",
      state: "Maharashtra",
      zip: "400001",
      country: "India",
    },
    pickupDate: "2024-10-10",
    pickupTime: "10:00 AM",
    items: [],
    specialInstructions: "Please call me 30 minutes before arrival.",
    contactNumber: "9876543210",
  });

  const handleItemClick = (itemType) => {
    setPickupData((prevData) => ({
      ...prevData,
      items: [...prevData.items, { itemType, quantity: 1 }], // default quantity of 1
    }));
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send pickupData to the backend
    console.log("Submitting data: ", pickupData);
    // Here you can add your API call to send data
    setShowModal(false); // Close the modal after submission
  };

  return (
    <div className='container'>
      <Titles heading="Pick a Category for Your Recyclable Items" textColor="text-olive" />
      <div className="row">
        <div className="col-md-6 my-2">
          <div onClick={() => handleItemClick("Plastic Waste")} className='text-decoration-none'>
            <div className='rounded-3 border-olive'>
              <img src={plastic} alt="" className='img-fluid rounded-3' />
              <p className='text-center fw-semibold text-olive'>Plastic Waste</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 my-2">
          <div onClick={() => handleItemClick("Paper Waste")} className='text-decoration-none'>
            <div className='rounded-3 border-olive'>
              <img src={paper} alt="" className='img-fluid rounded-3' />
              <p className='text-center fw-semibold text-olive'>Paper Waste</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 my-2">
          <div onClick={() => handleItemClick("E-Waste")} className='text-decoration-none'>
            <div className='rounded-3 border-olive'>
              <img src={ewaste} alt="" className='img-fluid rounded-3' />
              <p className='text-center fw-semibold text-olive'>E-Waste</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 my-2">
          <div onClick={() => handleItemClick("Clothes")} className='text-decoration-none'>
            <div className='rounded-3 border-olive'>
              <img src={clothes} alt="" className='img-fluid rounded-3' />
              <p className='text-center fw-semibold text-olive'>Clothes</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5"></div>

      {/* Modal for Pickup Form */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ display: 'block' }} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Schedule Pickup</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  {/* Pickup Address Fields */}
                  <h6>Pickup Address</h6>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" required
                      value={pickupData.pickupAddress.address}
                      onChange={(e) => setPickupData({
                        ...pickupData,
                        pickupAddress: { ...pickupData.pickupAddress, address: e.target.value }
                      })} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" required
                      value={pickupData.pickupAddress.city}
                      onChange={(e) => setPickupData({
                        ...pickupData,
                        pickupAddress: { ...pickupData.pickupAddress, city: e.target.value }
                      })} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="state" className="form-label">State</label>
                    <input type="text" className="form-control" id="state" required
                      value={pickupData.pickupAddress.state}
                      onChange={(e) => setPickupData({
                        ...pickupData,
                        pickupAddress: { ...pickupData.pickupAddress, state: e.target.value }
                      })} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="zip" className="form-label">Zip Code</label>
                    <input type="text" className="form-control" id="zip" required
                      value={pickupData.pickupAddress.zip}
                      onChange={(e) => setPickupData({
                        ...pickupData,
                        pickupAddress: { ...pickupData.pickupAddress, zip: e.target.value }
                      })} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="country" className="form-label">Country</label>
                    <input type="text" className="form-control" id="country" required
                      value={pickupData.pickupAddress.country}
                      onChange={(e) => setPickupData({
                        ...pickupData,
                        pickupAddress: { ...pickupData.pickupAddress, country: e.target.value }
                      })} />
                  </div>

                  {/* Pickup Date and Time */}
                  <div className="mb-3">
                    <label htmlFor="pickupDate" className="form-label">Pickup Date</label>
                    <input type="date" className="form-control" id="pickupDate" required
                      value={pickupData.pickupDate}
                      onChange={(e) => setPickupData({ ...pickupData, pickupDate: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="pickupTime" className="form-label">Pickup Time</label>
                    <input type="time" className="form-control" id="pickupTime" required
                      value={pickupData.pickupTime}
                      onChange={(e) => setPickupData({ ...pickupData, pickupTime: e.target.value })} />
                  </div>

                  {/* Contact Number and Special Instructions */}
                  <div className="mb-3">
                    <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                    <input type="tel" className="form-control" id="contactNumber" required
                      value={pickupData.contactNumber}
                      onChange={(e) => setPickupData({ ...pickupData, contactNumber: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="specialInstructions" className="form-label">Special Instructions</label>
                    <textarea className="form-control" id="specialInstructions" rows="3"
                      value={pickupData.specialInstructions}
                      onChange={(e) => setPickupData({ ...pickupData, specialInstructions: e.target.value })} />
                  </div>
                  <button type="submit" className="btn btn-primary">Schedule Pickup</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
