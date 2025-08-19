const informationDiv = document.querySelectorAll(".hover");
const elip = document.querySelectorAll(".elipses");

informationDiv.forEach(items => {
    items.addEventListener('mouseover', () =>{
        items.classList.add('changeBackground')
        items.style.cursor = "pointer"
    })
})

informationDiv.forEach(items => {
    items.addEventListener('mouseout', () =>{
        items.classList.remove('changeBackground')
        items.style.cursor = "pointer"
    })
})

elip.forEach(elips => {
    elips.addEventListener('mouseover', (e) => {
        elips.style.cursor = "pointer"
        e.stopPropagation()

    })
})