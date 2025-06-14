var updateBtns = document.getElementsByClassName('update-cart')
for (i=0;i < updateBtns.length;i++){
    updateBtns[i].addEventListener('click',function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId',productId,'action',action)
        console.log('user:',user)
        if (user === "AnonymousUser"){
            console.log('user not logged in')
        } else {
            updateUserOrder(productId,action)
        }
    })
}

function updateUserOrder(productId,action){
    console.log("user was logged in, success add")
    var url = '/update_item/'
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        body: JSON.stringify({'productId': productId, 'action': action})
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status = ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log('data:', data);
        location.reload();
    })
    .catch((error) => {
        console.error('Fetch error:', error);
    });
}
