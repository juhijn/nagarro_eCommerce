
$(()=>{
    $("#login").click(()=>{
        $.post('/shopping',
        {
            username: $("#name").val(),
            email: $("#email").val()
        },
        (data)=>
        {
            sessionStorage.setItem("userid",data.id);
            alert(`Hi: ${data.username}`);
            refreshList()
        })
    })
    
})
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
                    <td><input type='submit' style="color:green;" value='+' onclick='AddElement(${todo.id})'></td>
                    </tr>`
                    )
            }
        })
    }
    function AddElement(productId)
    {
        
        $.post(
            'cart/add',
            {
                userId:sessionStorage.getItem("userid"),
                productId: productId
            },
            (data) => {
                if (data.success) {
                    alert("This is now in cart");
                      
                } else {
                  alert('Some error occurred')
                }
              }
            )
    }