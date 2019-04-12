$(() => {

  function refreshList() {
    $.get('/shopping', (data) => {
      $('#productlist').empty()

      //data.sort()

      for (let product of data) {
        $('#productlist').append(
          `<tr>
              <td>${product.name}</td>
              <td>${product.price}</td>
              <td>${product.vendorname}</td>
              <td>${product.quantity}</td>
              <td> <a href='/carts/${product.id}'><button style="color:green;"><b> + </b></button></a></td>
            </tr>`
        )
      }
    })
  }

  refreshList()

  $('#adduser').click(() => {
    $.post('/shopping',
      {
        name: $('#username').val()
      },
      (data) => {
        if (data.success) {
          refreshList()
        } else {
          alert('Added')
        }
      }
    )
  })

})