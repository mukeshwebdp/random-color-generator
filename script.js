const colorText = document.querySelector('h2')

function randomColorGenerator(){
    const hexValue = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i<6; i++){
        color += hexValue[Math.floor(Math.random()*16)];
    }
    return color;
}
        
    // background color changing function
    let intervalID;
    const startChangingColor = function(){
        if(intervalID == null){
            intervalID = setInterval(changeBgColor,1000) 
        }
        function changeBgColor(){
            document.body.style.backgroundColor = randomColorGenerator()
            colorText.innerText = `Color code : ${randomColorGenerator()}`;
        }
    }

    // code stop
    const stopChangingColor = function(){
        clearInterval(intervalID)
        // it is used to memory flush;
        intervalID = null
    }
    document.querySelector('.start').addEventListener('click',startChangingColor)
    document.querySelector('.stop').addEventListener('click',stopChangingColor)