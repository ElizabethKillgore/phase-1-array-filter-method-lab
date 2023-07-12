// Code your solution here
function findMatching(drivers, name) {
  const filteredArray = drivers.filter(function (driver) {
        return driver.toLowerCase() === name.toLowerCase()
})  

return filteredArray

}

function fuzzyMatch(drivers, firstLetterName) {
    
    const filteredDrivers = drivers.filter(function (driver){
        if (firstLetterName === driver.substring(0, 2)) {
            return driver
         } else {
            return undefined
            }
        })
  return filteredDrivers
        
}

function matchName(drivers, name) {
    const filterObjects = drivers.filter(function (object) {
        console.log(object.name)
        if (name === object.name) {
            return object
        } else {
            return undefined
        }
        
    })
    return filterObjects
}