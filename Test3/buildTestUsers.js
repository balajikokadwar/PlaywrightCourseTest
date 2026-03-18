let names = ["Amit Kumar", "Neha Singh"]
let roles = ["admin", "viewer"]
let userObject = []
for(let i in names) {
    let userName = names[i].split(" ").join("_").toLowerCase()
    userObject.push({ "username":userName,"email":`${userName}@playwrightbatch.com`,"role":roles[i]})
}
console.log(userObject)