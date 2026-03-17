results = [{ name: "open login", status: "passed", durationMs: 400 }, { name: "fill form", status: "failed", durationMs: 700 }, { name: "submit", status: "skipped", durationMs: 0 }]
let totalSteps = 0;
let passedSteps = 0;
let failedSteps = 0;
let skippedSteps = 0;
let failedTest = []
let totalDuration= 0
for (let i=0; i<results.length; i++){
    const result = results[i];

    if (result.status === "passed") {
        passedSteps++;
    }
    else if (result.status === "failed") {
        failedSteps++;
        failedTest.push(result.name);
    }
    else if (result.status === "skipped") {
        skippedSteps++;
    }
    if(result.durationMs > 0){
        totalDuration = result.durationMs + totalDuration;
    }
    totalSteps++;
    
}
console.log(`Total Steps: ${totalSteps}`);
console.log(`Total Duration: ${totalDuration} ms`);
console.log(`Passed Steps: ${passedSteps}`);
console.log(`Failed Steps: ${failedSteps}`);
console.log(`Skipped Steps: ${skippedSteps}`);
console.log(`Failed Test: ${failedTest.join(", ")}`);