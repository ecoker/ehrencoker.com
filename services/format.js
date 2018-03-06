/**
* @function capitalize
* @param  {string} str original str value
* @return {string} capitalized str
*/
export function capitalize(str='') {
  return str.split(/\s|_/).map((splitStr)=>{
    return splitStr.charAt(0).toUpperCase() + splitStr.slice(1).toLowerCase()
  }).join(' ')
}
