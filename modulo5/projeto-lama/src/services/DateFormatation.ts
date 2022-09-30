function padTo2Digits(num: number) {
    return num.toString().padStart(2, "0");
  }

export class DateFormatation {
    
    formatDate = (date: Date) => {
        return [
            padTo2Digits(date.getDate() + 1),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
        ].join("/");
      }

      removeHours = (date: Date) => {
        return [
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate() + 1),
        ].join("-");
      }
}

