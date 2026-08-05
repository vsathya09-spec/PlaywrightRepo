//function to launch browser
function launchBrowser(browserName)
{
    if (browserName === "chrome") {
        console.log("Chrome browser launched")
    }
else {
    console.log("Firefox browser launched")
}
}
launchBrowser("chrome")

//runTests
function runTests(testType){
    switch (testType) {
        case "smoke":
            console.log("Smoke tests executed")
            break;
        case "regression":
            console.log("Regression tests executed")
            break;
        default:
            console.log("No tests executed")
    }
}
runTests("smoke")