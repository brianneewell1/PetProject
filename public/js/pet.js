const { response } = require("express");

const newFormHandler = async (event) => {
    event.preventDefault();

const petname = document.querySelector('#pet-name');
const species = document.querySelector('#pet-species');
const breed = document.querySelector('#pet-breed');
const zip = document.querySelector('#pet-zip');
const birthdate = document.querySelector('#pet-birthdate');
const weight = document.querySelector('#pet-weight'); 

if (petname && species && breed && zip && birthdate && weight) {
    const response = await fetch('/api/pets', {
        method: 'POST',
        body: JSON.stringify({ petname, species, breed, zip, birthdate, weight }),
        //headers?

    }),
};
    if (response.ok) {
    document.location.replace('/pet');
}       else {
    alert('Failed to create pet');
}
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/pets/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/pet');
      } else {
        alert('Failed to delete pet');
      }
    }
  };
  
  document
    .querySelector('.new-pet-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.pet-list')
    .addEventListener('click', delButtonHandler);