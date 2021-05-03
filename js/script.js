gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from('.content', {
   y: '-30%',
   opactity: '0',
   duration: 2,
   // ease: Power4.easeOut
})
tl.from('.stagger1', {
   opacity: 0,
   y: -50,
   stagger: .3,
   duration: 2
}, "-=1.5")
tl.from('.hero-design', {
   opacity: 0,
   y: 50,
   duration: 1
}, "-=2")

gsap.from('.circ-anim', {
   stagger: 0.2,
   scale: 0.1,
   duration: 1
})

gsap.from('.transition2', {
   scrollTrigger: {
      trigger: '.transition2',
      // when top of transition2 elements hits bottom of scroll bar then something animates
      start: "top bottom"
   },
   y: 50,
   opacity: 0,
   duration: 1.2,
   stagger: .3
})

gsap.from('.transition3', {
   scrollTrigger: {
      trigger: '.transition3',
      // when top of transition2 elements hits bottom of scroll bar then something animates
      start: "top center"
   },
   y: 50,
   opacity: 0,
   duration: 1.2,
   stagger: .6
})