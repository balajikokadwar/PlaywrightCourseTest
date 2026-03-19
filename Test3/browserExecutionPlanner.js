allBrowsers = ["chromium", "firefox", "webkit"]
blockedBrowsers = ["firefox"]
let runnable = []
let blocked = []
let plan
function browserPlanner(){
    for(let browser of allBrowsers){
        if(blockedBrowsers.includes(browser)){
            blocked.push(browser)
        }else{
            runnable.push(browser)
        }
    }
    plan = `Run on: ${runnable.join(", ")} | skip: ${blocked.join(", ")}`
    return {runnable: runnable, blocked: blocked, plan: plan}
}
let executionPlanner = browserPlanner()
console.log(executionPlanner)