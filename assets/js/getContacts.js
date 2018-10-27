(() => {
  const contacts_uri = 'https://raw.githubusercontent.com/sotf-dev/web-app/dev/assets/contacts.json'
  const contact_list = document.getElementById('contact-list')

  window.fetch(`${ contacts_uri }`, {method: 'GET', mode: 'cors',})
    .then(response => response.json())
    .then((json) => {
        for (let i = 0; i < json.length; i++) {
          markupContact(json[i].name, json[i].last_name, json[i].email, json[i].city, json[i].address, json[i].phone)
        }
      }
    )

  const markupContact = (first_name, last_name, email, city, address, phone) => {
    const markup = '<div class="col-md-6 mt-2">' +
      '<div class="card">' +
      '<div class="card-body">' +
      '<h5 class="card-title font-weight-bold text-center name">' + first_name + ' ' + last_name + '</h5>' +
      '<h6 class="card-subtitle font-weight-bold mb-3 text-muted text-center"><i class="fas fa-phone"></i> ' + phone + '</h6>' +
      '<h6 class="card-subtitle mb-2 text-primary text-center font-weight-bold"><i class="fas fa-envelope-open-text"></i> ' + email + '</h6>' +
      '<h6 class="card-subtitle mb-2 text-muted text-center"><i class="fas fa-map-marker-alt"></i> ' + city + '</h6>' +
      '<p class="card-text text-center mt-4"><i class="fas fa-map-marked-alt"></i> ' + address + '</p>' +
      '<a href="#" class="card-link d-flex justify-content-center">Editar</a>' +
      '</div>' +
      '</div>' +
      '</div>'

    contact_list.innerHTML += markup
  }

})()
