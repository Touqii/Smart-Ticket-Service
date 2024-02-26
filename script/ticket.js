// changing the background color of clicked seat and appending child element :

const allSeat = document.getElementsByClassName('add-seat');
for(const clickedSeat of allSeat){
    clickedSeat.addEventListener('click', function(event){
        event.target.style.backgroundColor = 'green';
        const seatName = event.target.innerText;
        const selectedContainer = document.getElementById("selected-seat-container");

        event.target.setAttribute("disabled", false);

         // limitation of seat count ;

         if (getConvertedValue("seat-count")+1>4){
            alert("tumi boisa thako");
            return;
         }

        // update seat count ;

        const seatCount = getConvertedValue("seat-count");
        document.getElementById('seat-count').innerText = seatCount + 1;

        // update seat left;
        const leftCount = getConvertedValue("left-count");
        document.getElementById('left-count').innerText = leftCount - 1;

    



        const div = document.createElement("div");
        div.classList.add("flex");
        div.classList.add("justify-between");

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.innerText = seatName;
        p2.innerText = "Economoy";
        p3.innerText = "550";
        const price = p3.innerText; 

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        selectedContainer.appendChild(div);

        updateTotalPrice(price);
        updateGrandTotal();
    })
}



function getConvertedValue(id){
    const seat = document.getElementById(id).innerText
    const convertedSeat = parseInt(seat);
    return convertedSeat;
}


// update cost ;
function updateTotalPrice(value){
    const totalPrice = getConvertedValue("total-price");
    const sum = totalPrice + parseInt(value);
    document.getElementById('total-price').innerText = sum; 

}

// update grand total ;
function updateGrandTotal() {
    const totalPrice = getConvertedValue("total-price");
    document.getElementById("grand-total").innerText = totalPrice;

}

// check coupon code ;
function updateGrandTotal(check){
    const totalPrice = getConvertedValue("total-price");
    if (check==undefined) {
        document.getElementById("grand-total").innerText = totalPrice;
    }
    else {
        const couponCode = document.getElementById('coupon-code').value;
        if (couponCode == "NEW15") {
            const discount = totalPrice * 0.15;
            document.getElementById("grand-total").innerText = totalPrice - discount;
        } else if (couponCode == "Couple 20") {
            const discount = totalPrice * 0.20;
            document.getElementById("grand-total").innerText = totalPrice - discount;
        }
        else {
            alert('please enter a valid coupon code');
        }
    }
}

