export const sortAfterStringAsc = (array: any[], category: string) => {
  return array.sort((a: any, b: any) => a[category].localeCompare(b[category]))
}
export const sortAfterStringDesc = (array: any[], category: string) => {
  return array.sort((a: any, b: any) => b[category].localeCompare(a[category]))
}
export const sortAfterDateAsc = (array: any[], category: string) => {
  return array.sort((a: any, b: any) => a[category].seconds.toString().localeCompare(b[category].seconds.toString()))
}
export const sortAfterDateDesc = (array: any[], category: string) => {
  return array.sort((a: any, b: any) => b[category].seconds.toString().localeCompare(a[category].seconds.toString()))
}

export const findDuplicates = (arr:any) => arr.filter((item:any, index:any) => arr.indexOf(item) !== index)