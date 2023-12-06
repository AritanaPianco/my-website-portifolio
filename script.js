const presentationName = document.querySelector("#PresentationName")
const presentationBtn = document.querySelector("#PresentationBtn")
const sobreMim = document.querySelector("#sobreMin")
const myPhoto = document.querySelector("#myPhoto")
const title = document.querySelector("#title")
const projectAbout = document.querySelectorAll("#projectAbout")
const projectImg = document.querySelectorAll("#projectImg")


const options = {
    root: null,
    threshold: 0,
    // rootMargin: "10px",     
}

const observer = new IntersectionObserver( (entries,observer) => {
       entries.forEach((entry) => {
        console.log(entry)
           entry.target.classList.toggle("moveName", entry.isIntersecting)
           if(entry.isIntersecting) observer.unobserve(entry.target)

       })                      

},options)
observer.observe(presentationName)



const observer2 = new IntersectionObserver( (entries, observer) => {
     entries.forEach((entry) => {
         entry.target.classList.toggle("moveBtn", entry.isIntersecting)
         if(entry.isIntersecting) observer.unobserve(entry.target)    
     })              
},options)
observer2.observe(presentationBtn)



let observer3 = new IntersectionObserver( (entries,observer) => { 
         entries.forEach((entry) => {
             console.log(entry)
              entry.target.classList.toggle("sobreMe", entry.isIntersecting)
              if(entry.isIntersecting) observer.unobserve(entry.target)   
         })      
   
},options)
observer3.observe(sobreMim)



let observer4 = new IntersectionObserver( (entries,observer) => {
        entries.forEach((entry) => {
              entry.target.classList.toggle("myProfile",entry.isIntersecting) 
              if(entry.isIntersecting) observer.unobserve(entry.target) 
        })
},options)
observer4.observe(myPhoto)


let observer5 = new IntersectionObserver( (entries,observer) => {
            entries.forEach( (entry) => {
                entry.target.classList.toggle("me", entry.isIntersecting)
                if(entry.isIntersecting) observer.unobserve(entry.target)  
            })
},options)
observer5.observe(title)


let observer6 = new IntersectionObserver((entries,observer) => {
              entries.forEach((entry) => {
                  entry.target.classList.toggle("aboutProject",entry.isIntersecting)
                  if(entry.isIntersecting) observer.unobserve(entry.target)
              })
},options)

projectAbout.forEach((oneAbout) => {
      observer6.observe(oneAbout)   
})



let observer7 = new IntersectionObserver((entries,observer) => { 
            entries.forEach((entry) => {
                   entry.target.classList.toggle("projectMolde", entry.isIntersecting)
                   if(entry.isIntersecting) observer.unobserve(entry.target)
            })    
},options)

projectImg.forEach((oneImg) => {
      observer7.observe(oneImg)  
})
