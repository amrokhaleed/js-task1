var productItems = document.querySelectorAll('.products li');
var clickedProductsDiv = document.getElementById('clickedProducts');
var totalPriceDiv = document.getElementById('totalPrice');
var showPriceButton = document.getElementById('showPrice');
var totalPrice = 0;

productItems.forEach(function(item) {
    item.onclick = function() {
        totalPrice += +(item.getAttribute("price"));
        clickedProductsDiv.style.opacity = 1;
        clickedProductsDiv.innerHTML += item.textContent + " ";
        if (clickedProductsDiv != "") {
            showPriceButton.style.opacity = 1;
        }
    }
})
showPriceButton.onclick = function() {
    totalPriceDiv.innerHTML = totalPrice;
    totalPriceDiv.style.opacity = 1;
}