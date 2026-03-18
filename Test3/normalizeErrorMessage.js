let rawMessage = " Locator not found after TIMEOUT "

function normalizeErrorMessage(message) {
    let normalizedMessage = message.trim().toLowerCase();
    normalizedMessage = normalizedMessage.replace(/\s+/g, ' ');

    if(normalizedMessage.includes("timeout")) {
        normalizedMessage = `${normalizedMessage} Category: TIMEOUT`
    }else if(normalizedMessage.includes("locator")) {
        normalizedMessage = `${normalizedMessage} Category: LOCATOR`
    }else {
        normalizedMessage = `${normalizedMessage} Category: GENERAL`
    }
    return normalizedMessage;
}

let normalizedMessage = normalizeErrorMessage(rawMessage);
console.log(normalizedMessage);