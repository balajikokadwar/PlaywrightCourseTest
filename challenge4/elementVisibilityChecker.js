let isPresent = true;
let isDisplayed = true;
let isEnabled = false;

let ele_status = "";
let action = "";


if (isPresent === false) {
    ele_status = "NOT FOUND";
    action = "Element is not present in DOM. Check locator or page load.";
}
else if (isPresent === true && isDisplayed === false) {
    ele_status = "HIDDEN";
    action = "Element exists but is hidden. Wait for visibility.";
}
else if (isPresent === true && isDisplayed === true && isEnabled === false) {
    ele_status = "DISABLED";
    action = "Element is visible but disabled. Wait for enable state or check preconditions.";
}
else if (isPresent === true && isDisplayed === true && isEnabled === true) {
    ele_status = "READY";
    action = "Element is ready for interaction.";
}

let severity = (isPresent === false) 
    ? "CRITICAL" 
    : (isDisplayed === false || isEnabled === false) 
        ? "WARNING" 
        : "OK";

console.log(`ele_status: ${ele_status} Severity: ${severity} Action: ${action}`);