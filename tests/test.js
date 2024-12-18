document.addEventListener("DOMContentLoaded", (event) => {

    const scrollHorizontalInit = () => {
    
        gsap.registerPlugin(ScrollTrigger);
        
        const container = document.querySelector("#container")
        const sections = document.querySelectorAll(".section")
      
        const stIds_ = {
            pin: 'gallery-pin',
            scroll: 'gallery-scroll',
        }
    
        const horizontalTween = gsap.to(container, {
            x: () => -(container.scrollWidth - window.innerWidth),
            ease: 'none',
            scrollTrigger: {
                id: stIds_.scroll,
                trigger: container.parentElement,
                start: 'top top',
                end: () => `+=${(container.scrollWidth - window.innerWidth)}`,
                scrub: true,
                invalidateOnRefresh: true,
                pin: true,
                markers: true
            },
        })
    
        ScrollTrigger.refresh()
    }
    
    scrollHorizontalInit()
    })