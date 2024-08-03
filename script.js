

let typingEffect = new Typed('#text',{
    strings: ["Web Developer", " UI/UX Designer"],
    loop:true,
    typeSpeed: 100,
    backspeed:50,
    backDealy:1000
})


const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})



//  const sections = document.querySelectorAll('section[id]')

//  function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.navbar a[href*=' + sectionId + ']').classList.add('active-link')
//         }
//         else{
//             document.querySelector('.navbar a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     })

//  }
//  window.addEventListener('scroll', scrollActive)






 












