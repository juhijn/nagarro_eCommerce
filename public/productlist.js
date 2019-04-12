$(() => {
  function refreshList() {
    $.get('/products', (data) => {
      $('#productlist').empty()
      for (let product of data) {
        $('#productlist').append(
          `<tr>
              <td>${product.name}</td>
              <td>${product.price}</td>
              <td>${product.vendorname}</td>
              <td>${product.quantity}</td>
              <td> <a href='/products/${product.id}'><button style="color:red;"><b> &#9747;</b></button></a></td> 
            </tr>`
        )
      }
    })
    $.get('/vendors', (data) => {
      $('#venderlist').empty()
      //data.sort()
      for (let vendor of data) {
        $('#venderlist').append(
            `<option id="${vendor.name}" value="${vendor.name}">${vendor.name}</option>`
          // `<tr>  <td>${vendor.name} </td>  priority <td>${vendor.priority}</td> </tr>`
        )
      }
    })
  }

  refreshList()

  $('#addproduct').click(() => {
    $.post(
      '/products',
      {
        name: $('#productname').val(),
        price: $('#price').val(),
        vendorname: $('#venderlist').val(),
        quantity: $('#quantity').val()

      },
      (data) => {
        if (data.success) {
          refreshList()
        } else {
          alert('Some error occurred')
        }
      }
    )
  })

})
