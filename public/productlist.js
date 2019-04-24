$(()=>{
    
  refreshList()
  
  refreshVendors()
  $("#add").click(()=>{
      $.post('/products',{
          name: $('#name').val(),
          price:$("#price").val(),
          qty: $("#qty").val(),
          vendorId: $("#Vendor").val()
      },
      (data) => {
          if (data.success) {
              $.get('/products',(data)=>{
                  $('#Products').empty();
                  for(let todo of data){
                      $('#Products').append( 
                          `<tr>
                          <td>${todo.name}</td> 
                          <td>${todo.price}</td> 
                          <td>${todo.qty}</td> 
                          <td>${todo.vendor.name}</td>
                          <td><input type='submit' value='X' style="color:red;" onclick='deleteElement(${todo.id})'></td>
                          </tr>`
                          )
                  }
              })
          } else {
            alert('Some error occurred')
          }
        }
  )})
  
})
function deleteElement(id)
{
  $.post(
      'products/delete',
      {
          id: id
      },
      (data) => {
          if (data.success) {
              $.get('/products',(data)=>{
                  $('#Products').empty();
                  for(let todo of data)
                  {
                      $('#Products').append( 
              `<tr>
              <td>${todo.name}</td> 
              <td>${todo.price}</td> 
              <td>${todo.qty}</td> 
              <td>${todo.vendor.name}</td>
              <td><input type='submit' value='X' onclick='deleteElement(${todo.id})'></td>
              </tr>`
              )
                  }
              })
          } else {
            alert('Some error occurred')
          }
        }
      )
}
function refreshList()
  {
      $.get('/products',(data)=>{
          $('#Products').empty();
          for(let todo of data){
              $('#Products').append( 
                  `<tr>
                  <td>${todo.name}</td> 
                  <td>${todo.price}</td> 
                  <td>${todo.qty}</td> 
                  <td>${todo.vendor.name}</td>
                  <td><input type='submit' value='X' onclick='deleteElement(${todo.id})'></td>
                  </tr>`
                  )
          }
      })
  }
  function refreshVendors()
  {
      $.get('/vendors',(data)=>{
          $('#Vendor').empty();
          for(let todo of data){
              $('#Vendor').append(`<option value=${todo.id}>${todo.name}</option>`)
          }
      })
  }