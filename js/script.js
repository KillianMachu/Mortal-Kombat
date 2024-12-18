document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);

    // Affichage des éléments sur au début
    const intro = () => {
        const timeline = gsap.timeline({
            defaults: { ease: "power2.inOut", duration: 1 },
            onComplete: () => {
                document.querySelector(".background").classList.remove("hidden");
                animateBackground();
            }
        });

        timeline
            .from("#mortal-kombat-logo", {
                opacity: 0
            })
            .to("#mortal-kombat-logo", {
                opacity: 1
            })
            .to("#mortal-kombat-logo", {
                opacity: 0
            })
            .from(".intro>h1", {
                opacity: 0
            })
            .to(".intro>h1", {
                opacity: 1
            })
            .to(".intro>h1", {
                opacity: 0
            })
            .from("#logo-accueil-site", {
                opacity: 0
            })
            .to("#logo-accueil-site", {
                opacity: 1
            })
            .to("#logo-accueil-site", {
                opacity: 0
            }, 9)
    }

    // Animation de la planche de BD
    const animateBackground = () => {
        const timeline = gsap.timeline({
            defaults: { ease: "power2.inOut", duration: 1 },
            onComplete: () => {
                document.querySelector(".content").classList.remove("hidden");
                content();
            }
        });

        timeline
            .from(".background", {
                yPercent: 200,
            })
            .to({}, { duration: 1 })
            .to(".background", {
                scale: 5,
                borderRadius: "0px",
            })
            .to(".vignette", {
                opacity: 0,
                duration: 0.5
            }, 2);

    };

    // Animation des différentes vignettes de la page
    const content = () => {

        gsap.fromTo("#case1",
            { yPercent: -130, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );

        // Animation des 2 premières vignettes
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#cases-1-2",
                start: "top top",
                end: "+=200%",
                pin: true,
                scrub: true,
            }
        });

        timeline.fromTo("#case2",
            { yPercent: 130, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );

        timeline.to({}, { duration: .2 });

        // Animation des vignettes 3 et 4
        const timeline2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#cases-3-4",
                start: "top top",
                end: "+=200%",
                pin: true,
                scrub: true,
            }
        });

        timeline2.fromTo("#case3",
            { xPercent: 130, opacity: 0 },
            { xPercent: -50, opacity: 1, duration: 1, ease: "power2.out" }
        );

        timeline2.to("#case3",
            { xPercent: -230, opacity: 0, duration: 1, ease: "power2.out" },
            "+=1"
        );

        timeline2.to({}, { duration: 1 });

        timeline2.fromTo("#case4",
            { xPercent: 130, opacity: 0 },
            { xPercent: -50, opacity: 1, duration: 1, ease: "power2.out" },
            "-=2"
        );

        // Animation des vignettes 5 et 6
        const timeline3 = gsap.timeline({
            scrollTrigger: {
                trigger: "#cases-5-6",
                start: "top top",
                end: "+=300%",
                pin: true,
                scrub: true,
            }
        });
    
        timeline3.fromTo("#case5",
            { xPercent: 130, opacity: 0 },
            { xPercent: 50, opacity: 1, duration: 1, ease: "power2.out" }
        );
        
        timeline3.to("#case5", {
            scale: 1.5,
            x: 100,
            y: -200,
            duration: 2,
            ease: "power2.out"
        });
        
        timeline3.to("#case5", {
            scale: 1.5,
            x: -100,
            y: 200,
            duration: 2,
            ease: "power2.out"
        });
        
        timeline3.to("#case5", {
            scale: 1,
            x: 0,
            y: 0,
            duration: 1,
            ease: "power2.out"
        });
        
        timeline3.to("#case5",
            { xPercent: -230, opacity: 0, duration: 1, ease: "power2.out"},
            "+=1"
        );
        
        timeline3.to({}, { duration: 1 });
        
        timeline3.fromTo("#case6",
            { xPercent: 130, opacity: 0 },
            { xPercent: -50, opacity: 1, duration: 1, ease: "power2.out" },
            "-=2"
        );

        // Animation de la vignette 7
        const timeline4 = gsap.timeline({
            scrollTrigger: {
                trigger: "#cases-7",
                start: "top top",
                end: "+=200%",
                pin: true,
                scrub: true,
            },
            onComplete: () => {
                document.querySelector(".bottom").classList.remove("hidden");
            }
        });
        
        timeline4.fromTo("#case7", 
            { scale: 5, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
        );

        ScrollTrigger.refresh();
    };

    // Bouton pour revoir l'histoire depuis l'animation du début
    const restartAnimations = () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        gsap.globalTimeline.clear();

        document.querySelector(".background").classList.add("hidden");
        document.querySelector(".content").classList.add("hidden");
        document.querySelector(".bottom").classList.add("hidden");

        intro();
    };

    document.querySelector("#restart-button").addEventListener("click", restartAnimations);

    intro();
});