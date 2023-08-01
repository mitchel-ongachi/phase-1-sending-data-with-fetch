function submitData(name, email) {
    const url = 'http://localhost:3000/users';
  
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ name, email })
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(responseData) {
      return responseData;
    })
    .catch(function(error) {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = error.message;
      document.body.appendChild(errorMessage);
    });
  }
submitData();  