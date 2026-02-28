testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]
console.log("Total Number of test cases: " + testResults.length)
let passedcount = testResults.filter(result => result === "pass").length
let failedcount = testResults.filter(result => result === "fail").length
console.log("Number of Passed test cases: " + passedcount)
console.log("Number of Failed test cases: " + failedcount)
console.log("Number of Skipped test cases: " + testResults.filter(result => result === "skip").length)  
console.log("Passed percentage: " + (testResults.filter(result => result === "pass").length / testResults.length * 100) + "%")
if(testResults.length === passedcount) {
    console.log("All test cases passed successfully! Ready for release.")
}else if(failedcount <= 2) {
    console.log("Some test cases passed, but there are still failures. Please review the failed test cases.")
}else if(failedcount > 2) {
    console.log("Multiple test cases failed. Significant issues detected. Please investigate and fix the failures.")
}
