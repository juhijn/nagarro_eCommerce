$(() => {

    function refreshList() {
      $.get('/vendors', (data) => {
        $('#vendorlist').empty()
  
        //data.sort()
  
        for (let vendor of data) {
          $('#vendorlist').append(
              `<tr>
              <td>${vendor.name}</td>
              <td> <a href='/vendors/${vendor.name}'><button style="color:red;"><b> &#9747;</b></button></a></td> 
            </tr>`
            // `<tr>  <td>${vendor.name} </td>  priority <td>${vendor.priority}</td> </tr>`
          )
        }
      })
    }
  
    refreshList()
  
    $('#addvendor').click(() => {
      $.post(
        '/vendors',
        {
          name: $('#vendorname').val()
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
  