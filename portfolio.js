gsap.registerPlugin(ScrollTrigger, Draggable);

const slider = document.querySelector(".skills-container");

const animation = gsap.to(slider, {
    xPercent: -50,
    duration: 23,
    repeat: -1,
    ease: "none"
});

slider.addEventListener("mouseenter", () => {
    gsap.to(animation, { timeScale: 0.2, duration: 0.5 });
});

slider.addEventListener("mouseleave", () => {
    gsap.to(animation, { timeScale: 1, duration: 0.5 });
});

Draggable.create(slider, {
    type: "x",
    bounds: ".skills-section",
    onPress: () => {
        animation.pause();
    },
    onRelease: () => {
        animation.play();
        gsap.to(animation, { timeScale: 1, duration: 0 });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, Draggable);
    
    let mm = gsap.matchMedia();

    mm.add({
        isDesktop: "(min-width: 1025px)",
        isTablet: "(min-width: 769px) and (max-width: 1024px)",
        isMobile: "(max-width: 768px)"
    }, (context) => {
        let {isDesktop, isTablet, isMobile } = context.conditions;
        if(isDesktop){
            let tl = gsap.timeline();
            tl.from("section > h1, section > nav a, .get_start", {
                y: -50,          
                opacity: 0,     
                duration: 1,
                stagger: 0.2,      
                ease: "power2.out" 
            });
            tl.from(".right_side h1, .right_side p, .right_side .about-me", {
                x: -50,          
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,   
                ease: "power2.out"
            }, "-=1");

            tl.from(".left_side img", {
                x: 100,        
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=1");
            tl.from(".right_image img", {
                x:-100,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                trigger: ".right_image",
                start: "top 80%",
                end: "bottom 100%",
                scrub: 2,
                }
            });
            tl.from(".my_content h1,.my_content h2,.my_content h4,.my_content p,.my_content h5", {
                x:100,
                opacity: 0,
                duration: 1,
                stagger:1,
                scrollTrigger: {
                trigger: ".my_content",
                start: "top 80%",
                end: "bottom 100%",
                scrub: 2,
                }
            });
            tl.from(".project-card", {
                scale: 0.4,          
                opacity: 0,
                transformOrigin: "center",
                duration: 1,
                scrollTrigger: {
                    trigger: ".projects-grid",
                    start: "top 80%",
                    end: "top 20%", 
                    scrub: 1,
                }
            });
        }
        if(isTablet){
            let nav = document.getElementById("nav");
            let open_btn = document.getElementById("open_btn");
            let close_btn = document.getElementById("close_btn");



            let tl = gsap.timeline({ paused: true });

            tl.to("#nav", {
                right: 0,
                duration: .9,
                ease: "power2.out"
            });

            tl.from("#nav a, #close_btn", {
                opacity: 0,
                x: 20,
                stagger: 0.1,
                duration: 0.4
            });

            open_btn.addEventListener("click", function () {
                tl.play();
            });

            close_btn.addEventListener("click", function () {
                tl.reverse();
            });

            let tl1 = gsap.timeline();

            tl1.from(".left_side img", {
                scale:.5,
                opacity: 0,
                duration: 1.5,
                ease: "power2.out"
            });
            tl1.from(".right_side h1, .right_side p, .right_side a", {
                scale:.5,
                opacity: 0,
                duration: 1,
               
            });
            tl1.from(".right_image img", {
                y:-100,
                opacity:0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".right_image",
                    start: "top 80%",
                    end: "top 20%", 
                    scrub: 1,
                }
            });
            tl1.from(".my_content h1,.my_content h2,.my_content h4,.my_content p,.my_content h5,.my_content a", {
                x:-100,
                opacity:0,
                duration: 1,
                stagger:1,
                scrollTrigger: {
                    trigger: ".my_content",
                    start: "top 80%",
                    end: "top 20%", 
                    scrub: 1,
                }
            });
            tl.from(".project-card", {
                opacity:0,
                duration: 1,
                stagger:1,
                scrollTrigger: {
                    trigger: ".projects-grid",
                    start: "top 80%",
                    end: "bottom 50%", 
                    scrub: 2,
                }
            });
        }
        if (isMobile) {
            let nav = document.getElementById("nav");
            let open_btn = document.getElementById("open_btn");
            let close_btn = document.getElementById("close_btn");


            let tl = gsap.timeline({ paused: true });

            tl.to("#nav", {
                right: 0,
                duration: .9,
                ease: "power2.out"
            });

            tl.from("#nav a, #close_btn,#nav button", {
                opacity: 0,
                x: 20,
                stagger: 0.1,
                duration: 0.4
            });

            open_btn.addEventListener("click", function () {
                tl.play();
            });

            close_btn.addEventListener("click", function () {
                tl.reverse();
            });

            
            let tl1 = gsap.timeline();

            tl1.from(".left_side img", {
                scale:.5,
                opacity: 0,
                duration: 1.5,
                ease: "power2.out"
            });
            tl1.from(".right_side h1, .right_side p, .right_side a", {
                scale:.5,
                opacity: 0,
                duration: 1,
               
            });
            tl1.from(".right_image img", {
                y:-100,
                opacity:0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".right_image",
                    start: "top 80%",
                    end: "top 20%", 
                    scrub: 1,
                }
            });
            tl1.from(".my_content h1,.my_content h2,.my_content h4,.my_content p,.my_content h5", {
                x:-100,
                opacity:0,
                duration: 1,
                stagger:1,
                scrollTrigger: {
                    trigger: ".my_content",
                    start: "top 80%",
                    end: "top 20%", 
                    scrub: 1,
                }
            });
            tl.from(".project-card", {
                opacity:0,
                duration: 1,
                stagger:1,
                scrollTrigger: {
                    trigger: ".projects-grid",
                    start: "top 80%",
                    end: "bottom 50%", 
                    scrub: 2,
                }
            });
        }
    });
});