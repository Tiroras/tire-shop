export const required = (value: string) => {
  if(value){
    return;
  }
  return "Поле обязательно для заполнения" ;
}

export const maxLengthCreactor = (length: number) => (value: string) => {
  if(value && value.length < length){
    return `Максимальное количество символов: ${length}`
  }
  return;
}

export const minLengthCreactor = (length: number) => (value: string) => {
  if(value && value.length > length){
    return `Минимальное количество символов: ${length}`
  }
  return;
}