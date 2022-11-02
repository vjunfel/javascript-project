const emojisEl = document.querySelectorAll(".emoji");
const starsEl = document.querySelectorAll(".star");


starsEl.forEach((starEl, index) => {
    starEl.addEventListener('click', ()=>{
        console.log('clicked', index);
        updateRating(index)
    });
})

function updateRating(index){
    starsEl.forEach((starEl, ndx) =>{
        if(ndx < index +1){
            starEl.classList.add('active')
        } else {
            starEl.classList.remove('active');
        }
    });
    emojisEl.forEach((emojiEl) => {
        emojiEl.style.transform = `translateX(-${index * 50}px)`;
    })
}

updateRating(4);
