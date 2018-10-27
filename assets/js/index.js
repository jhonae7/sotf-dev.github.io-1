(() => {
  // Variables
  const form = document.querySelector('form')
  const validate_form = document.getElementById('validate-form')
  const icon = document.querySelector('#add-contact i')
  const btn_add = document.getElementById('add-contact')
  const btn_cancel = document.getElementById('cancel-contact')
  const contact_list = document.getElementById('contact-list')

  //Form variables
  const first_name = document.getElementById('first_name');
  const last_name = document.getElementById('last_name');
  const email = document.getElementById('email');
  const address = document.getElementById('address');
  const city = document.getElementById('city');
  const phone = document.getElementById('phone');

  /*
   * Add Contact click
   */
  btn_add.addEventListener('click', () => {
    if (form.classList.contains('d-none')) {
      showFormView()
    } else {

      //Save data form and validate
      if (validateForm()) {
        validate_form.classList.add('d-none')
        hideFormView()
        // add code create contact
      } else {
        validate_form.classList.remove('d-none')
      }
    }
  })

  /*
   * Cancel Contact
   */
  btn_cancel.addEventListener('click', () => {
    hideFormView()
  })

  /*
   * Validate Form field
   */
  const validateForm = () => {
    let _return = 0
    document.querySelectorAll('input.form-control').forEach((value) => {
      if (value.value !== '') {
        _return += 1
      }
    })

    return (_return === 6)
  }

  /*
   * Animate btn add contact
   */
  const showFormView = () => {
    form.classList.remove('d-none')
    form.classList.add('d-block')
    icon.classList.remove('fa-plus')
    icon.classList.add('fa-check')
    btn_add.classList.remove('btn-primary')
    btn_add.classList.add('btn-success')
    btn_cancel.classList.remove('d-none')
    contact_list.classList.add('d-none')
  }

  const hideFormView = () => {
    form.classList.remove('d-block')
    form.classList.add('d-none')
    icon.classList.remove('fa-check')
    icon.classList.add('fa-plus')
    btn_add.classList.remove('btn-success')
    btn_add.classList.add('btn-primary')
    btn_cancel.classList.add('d-none')
    contact_list.classList.remove('d-none')
  }
})()

