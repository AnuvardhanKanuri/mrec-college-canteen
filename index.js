let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let home = document.getElementById('home');
let special = document.getElementById('special');
let about = document.getElementById('about');
let contant = document.getElementById('contant');
let review = document.getElementById('review');
let count = 0;



menu.onclick = ()=>{
    menu.classList.toggle('menu');
    navbar.classList.toggle('active');
    console.log("clicked menu");
}
special.onclick = ()  =>{
  special.classList.add('active');
  home.classList.remove('active');
  about.classList.remove('active');
  contant.classList.remove('active');
  review.classList.remove('active');

}
home.onclick = () =>{
  special.classList.remove('active');
  home.classList.add('active');
  about.classList.remove('active');
  contant.classList.remove('active');
  review.classList.remove('active');
}
about.onclick = () =>{
  special.classList.remove('active');
  home.classList.remove('active');
  about.classList.add('active');
  contant.classList.remove('active');
  review.classList.remove('active');
}
contant.onclick = () =>{
  special.classList.remove('active');
  home.classList.remove('active');
  about.classList.remove('active');
  contant.classList.add('active');
  review.classList.remove('active');
}
review.onclick = () =>{
  special.classList.remove('active');
  home.classList.remove('active');
  about.classList.remove('active');
  contant.classList.remove('active');
  review.classList.add('active');
}

const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const c5 = document.getElementById('c5');
const c6 = document.getElementById('c6');
const c7 = document.getElementById('c7');
const c8 = document.getElementById('c8');
const c9 = document.getElementById('c9');
const c10 = document.getElementById('c10');
const burger = document.getElementById('burger_block');
const samosa = document.getElementById('samosa_block');
const pizza = document.getElementById('pizza_block');
const biriyani = document.getElementById('biriyani_block');
const cool = document.getElementById('cool_block');
const ice = document.getElementById('ice_block');
const cake = document.getElementById('cake_block');
const coffe = document.getElementById('coffe_block');
const sea = document.getElementById('sea_block');
const fruits = document.getElementById('fruit_block');

c1.onclick =()=>{
    c1.classList.toggle('active');
    c2.classList.remove('active');
    c3.classList.remove('active');
    c4.classList.remove('active');
    c5.classList.remove('active');
    c6.classList.remove('active');
    c7.classList.remove('active');
    c8.classList.remove('active');
    c9.classList.remove('active');
    c10.classList.remove('active');
    burger.style.display='none';
    samosa.style.display='block';
    pizza.style.display='none';
    biriyani.style.display='none';
    cool.style.display='none';
    cake.style.display='none';
    coffe.style.display='none';
    sea.style.display='none';
    fruits.style.display='none';
    ice.style.display='none';
    count=1;
}
c2.onclick =()=>{
  c1.classList.remove('active');
  c2.classList.toggle('active');
  c3.classList.remove('active');
  c4.classList.remove('active');
  c5.classList.remove('active');
  c6.classList.remove('active');
  c7.classList.remove('active');
  c8.classList.remove('active');
  c9.classList.remove('active');
  c10.classList.remove('active');
  burger.style.display='block';
  samosa.style.display='none';
  pizza.style.display='none';
  biriyani.style.display='none';
  cool.style.display='none';
  cake.style.display='none';
  coffe.style.display='none';
  sea.style.display='none';
  fruits.style.display='none';
  ice.style.display='none';
  count=2;
}
c3.onclick =()=>{
  c1.classList.remove('active');
  c2.classList.remove('active');
  c3.classList.toggle('active');
  c4.classList.remove('active');
  c5.classList.remove('active');
  c6.classList.remove('active');
  c7.classList.remove('active');
  c8.classList.remove('active');
  c9.classList.remove('active');
  c10.classList.remove('active');
  burger.style.display='none';
  samosa.style.display='none';
  pizza.style.display='block';
  biriyani.style.display='none';
  cool.style.display='none';
  cake.style.display='none';
  coffe.style.display='none';
  sea.style.display='none';
  fruits.style.display='none';
  ice.style.display='none';
  count=3;
}
c4.onclick =()=>{
  c1.classList.remove('active');
  c2.classList.remove('active');
  c3.classList.remove('active');
  c4.classList.toggle('active');
  c5.classList.remove('active');
  c6.classList.remove('active');
  c7.classList.remove('active');
  c8.classList.remove('active');
  c9.classList.remove('active');
  c10.classList.remove('active');
  burger.style.display='none';
  samosa.style.display='none';
  pizza.style.display='none';
  biriyani.style.display='block';
  cool.style.display='none';
  cake.style.display='none';
  coffe.style.display='none';
  sea.style.display='none';
  fruits.style.display='none';
  ice.style.display='none';
  count=4;
}
c5.onclick =()=>{
  c1.classList.remove('active');
  c2.classList.remove('active');
  c3.classList.remove('active');
  c4.classList.remove('active');
  c5.classList.toggle('active');
  c6.classList.remove('active');
  c7.classList.remove('active');
  c8.classList.remove('active');
  c9.classList.remove('active');
  c10.classList.remove('active');
  burger.style.display='none';
  samosa.style.display='none';
  pizza.style.display='none';
  biriyani.style.display='none';
  cool.style.display='block';
  cake.style.display='none';
  coffe.style.display='none';
  sea.style.display='none';
  fruits.style.display='none';
  ice.style.display='none';
  count=5;
}
c6.onclick =()=>{
  c1.classList.remove('active');
  c2.classList.remove('active');
  c3.classList.remove('active');
  c4.classList.remove('active');
  c5.classList.remove('active');
  c6.classList.toggle('active');
  c7.classList.remove('active');
  c8.classList.remove('active');
  c9.classList.remove('active');
  c10.classList.remove('active');
  burger.style.display='none';
  samosa.style.display='none';
  pizza.style.display='none';
  biriyani.style.display='none';
  cool.style.display='none';
  cake.style.display='none';
  coffe.style.display='none';
  sea.style.display='none';
  fruits.style.display='none';
  ice.style.display='block';
  count=6;
}
c7.onclick =()=>{
  c1.classList.remove('active');
  c2.classList.remove('active');
  c3.classList.remove('active');
  c4.classList.remove('active');
  c5.classList.remove('active');
  c6.classList.remove('active');
  c7.classList.toggle('active');
  c8.classList.remove('active');
  c9.classList.remove('active');
  c10.classList.remove('active');
  burger.style.display='none';
  samosa.style.display='none';
  pizza.style.display='none';
  biriyani.style.display='none';
  cool.style.display='none';
  cake.style.display='block';
  coffe.style.display='none';
  sea.style.display='none';
  fruits.style.display='none';
  ice.style.display='none';
  count=7;
}
c8.onclick =()=>{
  c1.classList.remove('active');
  c2.classList.remove('active');
  c3.classList.remove('active');
  c4.classList.remove('active');
  c5.classList.remove('active');
  c6.classList.remove('active');
  c7.classList.remove('active');
  c8.classList.toggle('active');
  c9.classList.remove('active');
  c10.classList.remove('active');
  burger.style.display='none';
  samosa.style.display='none';
  pizza.style.display='none';
  biriyani.style.display='none';
  cool.style.display='none';
  cake.style.display='none';
  coffe.style.display='block';
  sea.style.display='none';
  fruits.style.display='none';
  ice.style.display='none';
  count=8;
}
c9.onclick =()=>{
  c1.classList.remove('active');
  c2.classList.remove('active');
  c3.classList.remove('active');
  c4.classList.remove('active');
  c5.classList.remove('active');
  c6.classList.remove('active');
  c7.classList.remove('active');
  c8.classList.remove('active');
  c9.classList.toggle('active');
  c10.classList.remove('active');
  burger.style.display='none';
  samosa.style.display='none';
  pizza.style.display='none';
  biriyani.style.display='none';
  cool.style.display='none';
  cake.style.display='none';
  coffe.style.display='none';
  sea.style.display='block';
  fruits.style.display='none';
  ice.style.display='none';
  count=9;
}
c10.onclick =()=>{
  c1.classList.remove('active');
  c2.classList.remove('active');
  c3.classList.remove('active');
  c4.classList.remove('active');
  c5.classList.remove('active');
  c6.classList.remove('active');
  c7.classList.remove('active');
  c8.classList.remove('active');
  c9.classList.remove('active');
  c10.classList.toggle('active');
  burger.style.display='none';
  samosa.style.display='none';
  pizza.style.display='none';
  biriyani.style.display='none';
  cool.style.display='none';
  cake.style.display='none';
  coffe.style.display='none';
  sea.style.display='none';
  fruits.style.display='block';
  ice.style.display='none';
  count=10;
}
const menu_next = document.getElementById('nxt');
const menu_prev = document.getElementById('prev');
menu_prev.onclick = ()=>{
  count++;
  if(count<=0){
    count=0;
    burger.style.display='block';
    samosa.style.display='block';
    pizza.style.display='block';
    biriyani.style.display='block';
    cool.style.display='block';
    cake.style.display='block';
    coffe.style.display='block';
    sea.style.display='block';
    fruits.style.display='block';
    ice.style.display='block';
  }
  if(count==1){
    c1.classList.add('active');
    c10.classList.remove('active');
    burger.style.display='none';
    samosa.style.display='block';
    pizza.style.display='none';
    biriyani.style.display='none';
    cool.style.display='none';
    cake.style.display='none';
    coffe.style.display='none';
    sea.style.display='none';
    fruits.style.display='none';
    ice.style.display='none';
  }
  else if(count==2){
    c1.classList.remove('active');
    c2.classList.add('active');

    burger.style.display='block';
    samosa.style.display='none';
    pizza.style.display='none';
    biriyani.style.display='none';
    cool.style.display='none';
    cake.style.display='none';
    coffe.style.display='none';
    sea.style.display='none';
    fruits.style.display='none';
    ice.style.display='none';
  }
  else if(count==3){
    c2.classList.remove('active');
    c3.classList.add('active');

    burger.style.display='none';
    samosa.style.display='none';
    pizza.style.display='block';
    biriyani.style.display='none';
    cool.style.display='none';
    cake.style.display='none';
    coffe.style.display='none';
    sea.style.display='none';
    fruits.style.display='none';
    ice.style.display='none';
  }
  else if(count==4){
    c3.classList.remove('active');
    c4.classList.add('active');

    burger.style.display='none';
    samosa.style.display='none';
    pizza.style.display='none';
    biriyani.style.display='block';
    cool.style.display='none';
    cake.style.display='none';
    coffe.style.display='none';
    sea.style.display='none';
    fruits.style.display='none';
    ice.style.display='none';
  }
  else if(count==5){
    c4.classList.remove('active');
    c5.classList.add('active');

    burger.style.display='none';
    samosa.style.display='none';
    pizza.style.display='none';
    biriyani.style.display='none';
    cool.style.display='block';
    cake.style.display='none';
    coffe.style.display='none';
    sea.style.display='none';
    fruits.style.display='none';
    ice.style.display='none';
  }
  else if(count==6){
    c5.classList.remove('active');
    c6.classList.add('active');

    burger.style.display='none';
    samosa.style.display='none';
    pizza.style.display='none';
    biriyani.style.display='none';
    cool.style.display='none';
    cake.style.display='none';
    coffe.style.display='none';
    sea.style.display='none';
    fruits.style.display='none';
    ice.style.display='block';
  }
  else if(count==7){
    c6.classList.remove('active');
    c7.classList.add('active');

    burger.style.display='none';
    samosa.style.display='none';
    pizza.style.display='none';
    biriyani.style.display='none';
    cool.style.display='none';
    cake.style.display='block';
    coffe.style.display='none';
    sea.style.display='none';
    fruits.style.display='none';
    ice.style.display='none';
  }
  else if(count==8){
    c7.classList.remove('active');
    c8.classList.add('active');

    burger.style.display='none';
    samosa.style.display='none';
    pizza.style.display='none';
    biriyani.style.display='none';
    cool.style.display='none';
    cake.style.display='none';
    coffe.style.display='block';
    sea.style.display='none';
    fruits.style.display='none';
    ice.style.display='none';
  }
  else if(count==9){
    c8.classList.remove('active');
    c9.classList.add('active');

    burger.style.display='none';
    samosa.style.display='none';
    pizza.style.display='none';
    biriyani.style.display='none';
    cool.style.display='none';
    cake.style.display='none';
    coffe.style.display='none';
    sea.style.display='block';
    fruits.style.display='none';
    ice.style.display='none';
  }
  else if(count==10){
    c9.classList.remove('active');
    c10.classList.add('active');

    burger.style.display='none';
    samosa.style.display='none';
    pizza.style.display='none';
    biriyani.style.display='none';
    cool.style.display='none';
    cake.style.display='none';
    coffe.style.display='none';
    sea.style.display='none';
    fruits.style.display='block';
    ice.style.display='none';
  }
  else if(count>10){
    count=0;
  }

}
menu_next.onclick = ()=>{
  count--;
  if (count<=0){
    count=0;
    burger.style.display='block';
    samosa.style.display='block';
    pizza.style.display='block';
    biriyani.style.display='block';
    cool.style.display='block';
    cake.style.display='block';
    coffe.style.display='block';
    sea.style.display='block';
    fruits.style.display='block';
    ice.style.display='block';
    c1.classList.remove('active');

  }
  else if(count<1){
    c1.classList.remove('active');

  }
  else if(count==1){
    c1.classList.add('active');
    c2.classList.remove('active');

    burger.style.display='none';
    samosa.style.display='block';
    pizza.style.display='none';
    biriyani.style.display='none';
    cool.style.display='none';
    cake.style.display='none';
    coffe.style.display='none';
    sea.style.display='none';
    fruits.style.display='none';
    ice.style.display='none';
  }
  else if(count==2){
    c3.classList.remove('active');
    c2.classList.add('active');

    burger.style.display='block';
    samosa.style.display='none';
    pizza.style.display='none';
    biriyani.style.display='none';
    cool.style.display='none';
    cake.style.display='none';
    coffe.style.display='none';
    sea.style.display='none';
    fruits.style.display='none';
    ice.style.display='none';
  }
  else if(count==3){
    c4.classList.remove('active');
    c3.classList.add('active');

    burger.style.display='none';
    samosa.style.display='none';
    pizza.style.display='block';
    biriyani.style.display='none';
    cool.style.display='none';
    cake.style.display='none';
    coffe.style.display='none';
    sea.style.display='none';
    fruits.style.display='none';
    ice.style.display='none';
  }
  else if(count==4){
    c5.classList.remove('active');
    c4.classList.add('active');

    burger.style.display='none';
    samosa.style.display='none';
    pizza.style.display='none';
    biriyani.style.display='block';
    cool.style.display='none';
    cake.style.display='none';
    coffe.style.display='none';
    sea.style.display='none';
    fruits.style.display='none';
    ice.style.display='none';
  }
  else if(count==5){
    c6.classList.remove('active');
    c5.classList.add('active');

    burger.style.display='none';
    samosa.style.display='none';
    pizza.style.display='none';
    biriyani.style.display='none';
    cool.style.display='block';
    cake.style.display='none';
    coffe.style.display='none';
    sea.style.display='none';
    fruits.style.display='none';
    ice.style.display='none';
  }
  else if(count==6){
    c7.classList.remove('active');
    c6.classList.add('active');

    burger.style.display='none';
    samosa.style.display='none';
    pizza.style.display='none';
    biriyani.style.display='none';
    cool.style.display='none';
    cake.style.display='none';
    coffe.style.display='none';
    sea.style.display='none';
    fruits.style.display='none';
    ice.style.display='block';
  }
  else if(count==7){
    c8.classList.remove('active');
    c7.classList.add('active');

    burger.style.display='none';
    samosa.style.display='none';
    pizza.style.display='none';
    biriyani.style.display='none';
    cool.style.display='none';
    cake.style.display='block';
    coffe.style.display='none';
    sea.style.display='none';
    fruits.style.display='none';
    ice.style.display='none';
  }
  else if(count==8){
    c9.classList.remove('active');
    c8.classList.add('active');

    burger.style.display='none';
    samosa.style.display='none';
    pizza.style.display='none';
    biriyani.style.display='none';
    cool.style.display='none';
    cake.style.display='none';
    coffe.style.display='block';
    sea.style.display='none';
    fruits.style.display='none';
    ice.style.display='none';
  }
  else if(count==9){
    c10.classList.remove('active');
    c9.classList.add('active');

    burger.style.display='none';
    samosa.style.display='none';
    pizza.style.display='none';
    biriyani.style.display='none';
    cool.style.display='none';
    cake.style.display='none';
    coffe.style.display='none';
    sea.style.display='block';
    fruits.style.display='none';
    ice.style.display='none';
  }
  else if(count==10){
    c10.classList.remove('active');
    c9.classList.add('active');

    burger.style.display='none';
    samosa.style.display='none';
    pizza.style.display='none';
    biriyani.style.display='none';
    cool.style.display='none';
    cake.style.display='none';
    coffe.style.display='none';
    sea.style.display='none';
    fruits.style.display='block';
    ice.style.display='none';
  }
}
const addtocart = document.querySelectorAll('.add-to-cart');
const cartItemList = document.querySelector('.cart-items');
const carttotal = document.getElementById('cart-total');
const carticon = document.querySelector('.cart-icon');
const sidebar = document.getElementById('sidebar');
let cartBtn = document.getElementById('cartbtn');
let ordering = document.getElementById('ordering');
let payments = document.getElementById('payments');
let closeCartBtn = document.getElementById('close-cart-btn');
let itembill = document.getElementById('itembill');
let totalcost = document.getElementById('totalcost');
let cartitems =[];
let totalAmount= 0;
let nameitem = '';
let wholeAmt = 0;
addtocart.forEach((button, index) =>{
  button.addEventListener("click", ()=> {
    const item ={
      nameid:document.querySelectorAll('.samosas .box-container .box .content .name')[index].textContent,
      price : parseFloat(document.querySelectorAll('.samosas .box-container .box .content .price')[index].textContent.slice(3),),
      quantity:1,
    };
    const exist =cartitems.find(
    (cartItem) => cartItem.nameid===item.nameid,
    );
    if(exist){
      exist.quantity++;
    }
    else{
      cartitems.push(item);
    }
    totalAmount += item.price;
    updatecart();
    alert('item added sucessfully')
    showToast(); // 👈 show toast when item added

  });
  function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000); // Toast disappears after 2 seconds
}

  function updatecart(){
    updatecartitemlist();
    totalprice();
  }
  function totalprice(){
    carttotal.textContent =`Rs :${totalAmount}/-`;
    itembill.textContent = `Rs :${totalAmount}/-`;
    totalcost.textContent = `Rs :${totalAmount+12+50}/-`;
  }
  function updatecartitemlist(){
    cartItemList.innerHTML="";
    cartitems.forEach((item, index)=>{
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item', 'individual-cart-item');
      cartItem.innerHTML = 
      `<span>(${item.quantity}x) ${item.nameid}</span>
      <span class="cart-item-price">RS:${((item.price)*(item.quantity))}
      <button class = "remove-btn" data-index = "${index}"><i class = "fa fa-trash"></i></button></span>`;
      cartItemList.append(cartItem);
      wholeAmt = item.price * item.quantity;
  });
  const removeButtons = document.querySelectorAll('.remove-btn');
  removeButtons.forEach((button) => {
    button.addEventListener('click',(event)=>{
      const index = event.target.dataset.index;
      removeItem(index);
  });
  });
  function removeItem(index){
    const removeItems = cartitems.splice(index, 1)[0];
    totalAmount -= removeItems.price*removeItems.quantity;
    wholeAmt =removeItems.price*removeItems.quantity;
    updatecart();
  }
}
});
cartBtn.onclick = () => {
  sidebar.style.transform = 'scale(1)';
};
closeCartBtn.onclick = ()=>{
  sidebar.style.transform = 'scale(0)';
};
let back = document.getElementById('back');
let place = document.getElementById('place');
let placing = document.getElementById('placing');  
let placed = document.getElementById('placed');
let backhome = document.getElementById('backhome');
ordering.onclick = () => {
  payments.style.transform = "translate(-50%,-50%) scale(1)";
  console.log("ordering");
  sidebar.style.transform = 'scale(0)';
  placed.style.transform = "scale(0)";

};
 
back.onclick = () => {
  payments.style.transform = "scale(0)";
  sidebar.style.transform = 'scale(1)';
  placed.style.transform = "scale(0)";

}  
place.onclick = () =>{
  payments.style.transform = "scale(0)";
  placed.style.transform = 'translate(-50%,-50%) scale(1)';
}
backhome.onclick  =()=>{
  payments.style.transform = "scale(0)";
  sidebar.style.transform = 'scale(0)';
  placed.style.transform = "scale(0)";
}