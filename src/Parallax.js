const forImage = 60;
const speed = 0.05;
let positionX = 0, positionY = 0;
let coordXprocent = 0, coordYprocent = 0
let main = document.querySelector('.main')
let image = document.querySelector(".header-main__picture")

function mouseMovement(e) {
    main = document.querySelector('.main')
    image = document.querySelector(".header-main__picture")

    if (image) {
        const parallaxWidth = main.offsetWidth
        const parallaxHeight = main.offsetHeight
    
        const coordX = e.pageX - parallaxWidth / 2
        const coordY = e.pageY - parallaxHeight / 2
    
        coordXprocent = coordX / parallaxWidth * 100
        coordYprocent = coordY / parallaxHeight * 100
    
        setMouseParallaxStyle()
    }
}

function setMouseParallaxStyle() {
    const distX = coordXprocent - positionX
    const distY = coordYprocent - positionY

    positionX = positionX + (distX * speed)
    positionY = positionY + (distY * speed)

    try {
        image.style.cssText = `transform: translate(${positionX / forImage}%, ${positionY / forImage}%);`
    } catch {
        return
    }
}

export default mouseMovement