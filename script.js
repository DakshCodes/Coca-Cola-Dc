
TweenMax.from(".logo", 2, {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})
TweenMax.from("#nav h1", 1, {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})
TweenMax.from("#nav i", 2, {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})


TweenMax.staggerFrom("#nav-prt2 h5", 1, {
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut
}, 0.1)
TweenMax.staggerFrom("#nav-prt2 #line", 1, {
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut
}, 0.1)

TweenMax.from(".search", 1, {
    opacity: 0,
    delay: .5,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.from(".menu", 1, {
    opacity: 0,
    delay: .6,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.from("#left h1", 1, {
    opacity: 0,
    delay: 1,
    y: 20,
    ease: Expo.easeInOut
})
TweenMax.from("#left p", 1, {
    opacity: 0,
    delay: 1.4,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from("button", 1, {
    opacity: 0,
    delay: 1.6,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".line-one", 1, {
    opacity: 0,
    delay: 2,
    y: -800,
    ease: Expo.easeInOut
})
TweenMax.from(".line-two", 1, {
    opacity: 0,
    delay: 2.5,
    y: -800,
    ease: Expo.easeInOut
})

TweenMax.from("#center", 2, {
    opacity: 0,
    delay: 2.6,
    ease: Expo.easeInOut
})
TweenMax.from("#content img", 2, {
    opacity: 0,
    delay: 3,
    y: -800,
    ease: Expo.easeInOut
})


TweenMax.staggerFrom("#right-elems div", 2, {
    opacity: 0,
    delay: 3.4,
    y: 40,
    ease: Expo.easeInOut
}, 0.2)