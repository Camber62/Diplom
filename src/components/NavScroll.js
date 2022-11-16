


document.querySelectorAll('a.yacor').forEach(link=>{
    link.addEventListener('click' , function (e){
        e.preventDefault()


        const href=this.getAttribute('href').substring(1)

        const scrollTarget=document.getElementById(href)
        const  topOffSet=0
        const elementPosition = scrollTarget.getBoundingClientRect().top
        const offsetPosition=elementPosition-topOffSet



        window.scrollBy({
            top:offsetPosition,
            behavior:'smooth',
        })
    })
})

