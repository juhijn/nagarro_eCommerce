$(() => {

    function refreshList() {
      $.get('/cart', (data) => {
        $('#cartlist').empty()
        //data.sort()
        for (let cart of data) {
          $('#cartlist').append(
              `<tr>
              <td>${cart.pId}</td>
            </tr>`
          )
        }
      })
    }
  
    refreshList()
  
    // $('#viewcart').click(() => {
    //   $.get(
    //     '/products',
    //     {
    //       name: $('#productname').val(),
    //       price: $('#price').val(),
    //       vendorname: $('#vendorname').val(),
    //       quantity: $('#quantity').val()

    //     },
    //     (data) => {
    //       if (data.success) {
    //         refreshList()
    //       } else {
    //         alert('Some error occurred')
    //       }
    //     }
    //   )
    // })
  
  })
  