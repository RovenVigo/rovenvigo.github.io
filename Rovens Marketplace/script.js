if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready() // code that makes javascript always load
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem) // function that removes cart items in the cart
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged) // quantity input function
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked) // button function to add to cart buttons
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal() // purchase button and alert when clicked
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()   // function that removes cart items
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }   
    updateCartTotal()   // only lets numbers into the quantity input
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()						// event that when add to cart button is clicked it puts the shop items into the cart
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]  // 
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

var espstars = 0;
	var stratstars = 0;
	
	function rate1() {
        
		
		if (espstars !== 1) {
		document.getElementById('star1').src = 'https://image.flaticon.com/icons/svg/148/148839.svg';
		
		
		document.getElementById('star2').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star3').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star4').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star5').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		
		
		espstars = 1;
		console.log(espstars);
		}
		
		else {
		document.getElementById('star1').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		espstars = 0;
		console.log(espstars);
        }
		
        
	}

	function rate2() {
		if (espstars !== 2) {
		espstars = 2;
		console.log(espstars);
		document.getElementById('star1').src = 'https://image.flaticon.com/icons/svg/148/148839.svg'; 
        document.getElementById('star2').src = 'https://image.flaticon.com/icons/svg/148/148839.svg';
        
		document.getElementById('star3').src = 'https://image.flaticon.com/icons/svg/149/149220.svg'; 
		document.getElementById('star4').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star5').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
        }
		
		else {
		document.getElementById('star1').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star2').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		espstars = 0;
		console.log(espstars);
		}
}  
    function rate3() {
		
		if (espstars !== 3) {
		espstars = 3;
		console.log(espstars);
		document.getElementById('star1').src = 'https://image.flaticon.com/icons/svg/148/148839.svg'; 
		document.getElementById('star2').src = 'https://image.flaticon.com/icons/svg/148/148839.svg';
		document.getElementById('star3').src = 'https://image.flaticon.com/icons/svg/148/148839.svg';
     
	    document.getElementById('star4').src = 'https://image.flaticon.com/icons/svg/149/149220.svg'; 
        document.getElementById('star5').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
        }
		
		else {
		document.getElementById('star1').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star2').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star3').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		espstars = 0;
		console.log(espstars);
		}
}   
    function rate4() {
		if (espstars !== 4) {
		espstars = 4;
		console.log(espstars);
		document.getElementById('star1').src = 'https://image.flaticon.com/icons/svg/148/148839.svg'; 
		document.getElementById('star2').src = 'https://image.flaticon.com/icons/svg/148/148839.svg';
		document.getElementById('star3').src = 'https://image.flaticon.com/icons/svg/148/148839.svg';
		document.getElementById('star4').src = 'https://image.flaticon.com/icons/svg/148/148839.svg';
		
		document.getElementById('star5').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		}
		
		else {
		document.getElementById('star1').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star2').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star3').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star4').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		espstars = 0;
		console.log(espstars);
		}
}
   
   function rate5() {
		if (espstars !== 5) {
		espstars = 5;
		console.log(espstars);
		document.getElementById('star1').src = 'https://image.flaticon.com/icons/svg/148/148839.svg'; 
		document.getElementById('star2').src = 'https://image.flaticon.com/icons/svg/148/148839.svg';
		document.getElementById('star3').src = 'https://image.flaticon.com/icons/svg/148/148839.svg';
		document.getElementById('star4').src = 'https://image.flaticon.com/icons/svg/148/148839.svg';
		document.getElementById('star5').src = 'https://image.flaticon.com/icons/svg/148/148839.svg';
		}
		
		else {
		document.getElementById('star1').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star2').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star3').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star4').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star5').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		espstars = 0;
		console.log(espstars);
		}
}    
	function rate11() {
        if (stratstars !== 1) {
		stratstars = 1;
		document.getElementById('star11').src = 'https://image.flaticon.com/icons/svg/148/148839.svg';
		
		
		document.getElementById('star22').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star33').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star44').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star55').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		}
		
		else {
		document.getElementById('star11').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		stratstars = 0;
		console.log(espstars);
		}

		
        
	}

	function rate22() {
		if (stratstars !== 2) {
		stratstars = 2;
		document.getElementById('star11').src = 'https://image.flaticon.com/icons/svg/148/148839.svg'; 
        document.getElementById('star22').src = 'https://image.flaticon.com/icons/svg/148/148839.svg';
        
		document.getElementById('star33').src = 'https://image.flaticon.com/icons/svg/149/149220.svg'; 
		document.getElementById('star44').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star55').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
        }
		else {
		document.getElementById('star11').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star22').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		stratstars = 0;
		console.log(espstars);
		}
}  
    function rate33() {
		if (stratstars !== 3) {
		stratstars = 3;
		document.getElementById('star11').src = 'https://image.flaticon.com/icons/svg/148/148839.svg'; 
		document.getElementById('star22').src = 'https://image.flaticon.com/icons/svg/148/148839.svg';
		document.getElementById('star33').src = 'https://image.flaticon.com/icons/svg/148/148839.svg';
     
	    document.getElementById('star44').src = 'https://image.flaticon.com/icons/svg/149/149220.svg'; 
        document.getElementById('star55').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
        }
		else {
		document.getElementById('star11').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star22').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star33').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		stratstars = 0;
		console.log(espstars);
		}
}   
    function rate44() {
		if (stratstars !== 4) {
		stratstars = 4;
		document.getElementById('star11').src = 'https://image.flaticon.com/icons/svg/148/148839.svg'; 
		document.getElementById('star22').src = 'https://image.flaticon.com/icons/svg/148/148839.svg';
		document.getElementById('star33').src = 'https://image.flaticon.com/icons/svg/148/148839.svg';
		document.getElementById('star44').src = 'https://image.flaticon.com/icons/svg/148/148839.svg';
		
		document.getElementById('star55').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		}
		
		 else {
		document.getElementById('star11').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star22').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star33').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star44').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		stratstars = 0;
		console.log(espstars);
		}
		
		
}
   
   function rate55() {
		if (stratstars !== 5) {
		stratstars = 5;
		document.getElementById('star11').src = 'https://image.flaticon.com/icons/svg/148/148839.svg'; 
		document.getElementById('star22').src = 'https://image.flaticon.com/icons/svg/148/148839.svg';
		document.getElementById('star33').src = 'https://image.flaticon.com/icons/svg/148/148839.svg';
		document.getElementById('star44').src = 'https://image.flaticon.com/icons/svg/148/148839.svg';
		document.getElementById('star55').src = 'https://image.flaticon.com/icons/svg/148/148839.svg';
		}
		else {
		document.getElementById('star11').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star22').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star33').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star44').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		document.getElementById('star55').src = 'https://image.flaticon.com/icons/svg/149/149220.svg';
		stratstars = 0;
		console.log(espstars);
		}
}

