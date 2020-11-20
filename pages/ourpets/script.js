const itemPic = document.querySelectorAll('.item_pic');
itemPic.forEach(item=> {
    item.style.backgroundImage =  `url('../../assets/pets-${item.nextElementSibling.textContent.toLowerCase()}.png')`
})