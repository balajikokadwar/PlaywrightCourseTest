let maxretry = 5
let attemp= 0
do {
    randomval = Math.random()
    console.log("Random value generated: " + randomval)
    if(randomval > 0.6) {
        console.log(`Attempt: ${attemp+1} SUCCESS (Response 200 OK) API`)
        break
    }else {
        console.log(`Attempt: ${attemp+1} failed (Timeout/Error)`)
    }
    attemp++
}while(attemp < maxretry)
