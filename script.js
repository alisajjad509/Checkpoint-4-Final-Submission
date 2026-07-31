function addToCart(button){
    const price= parseInt(button.getAttribute('data-price'));
    let cartTotal= parseInt(localStorage.getItem('cartTotal')) || 0;
    cartTotal += price; 
    localStorage.setItem('cartTotal', cartTotal);
    alert(`Item Added! Cart total: ${cartTotal}E`);                 //Alerts user when item is added to cart 
}
function clearCart() {
    localStorage.removeItem(`cartTotal`);
    location.reload();                                              //instantly refreshes page when clear cart button is cleared allowing the cart total to show 0E
}
function toggleBackground(){
    document.body.classList.toggle('alt-bg');
}
if(document.body.classList.contains('alt-bg')){
    localStorage.setItem('theme', 'alt-bg'); }else{
        localStorage.setItem('theme', 'default');
    }



const links= document.querySelectorAll('.faqtoggle');
links.forEach(link => {
    link.addEventListener('click', function (e){
        e.preventDefault();
const answer= this.nextElementSibling;                                  //nextElementSibling grabs the next class right away which 
                                                                        //would be my faqanswer 

document.querySelectorAll('.faqanswer.show').forEach(a=>
    a.classList.remove('show'));
    answer.classList.add('show');
    })
})