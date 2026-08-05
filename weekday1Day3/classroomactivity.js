//global scope
const browserversion = "chrome"

function getBrowserVersion() 
{
    if (browserversion === "chrome")
    { 
        let browserversion = "chrome version 150"
    
    console.log("Inside function", browserversion)
    }
    console.log("Outside function", browserversion)
    
}
getBrowserVersion()
