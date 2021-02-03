export const required = (value: string) => {
  if(value){
    return;
  }
  return "Поле обязательно для заполнения" ;
}

export const maxLengthCreator = (length: number) => (value: string) => {
  if(value && value.length > length){
    return `Максимальное количество символов: ${length}`
  }
  return;
}

export const minLengthCreator = (length: number) => (value: string) => {
  if(value && value.length > length){
    return `Минимальное количество символов: ${length}`
  }
  return;
}