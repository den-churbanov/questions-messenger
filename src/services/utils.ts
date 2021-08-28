export function toDate(timestamp: number, withDay?: boolean, withTime?: boolean, onlyTime?: boolean): string {
    const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const shortDays: Array<string> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const date = new Date(timestamp)
    if (withDay) {
        return `${shortDays[date.getDay()]}, ${date.getDate()} ${shortMonths[date.getMonth()]}`
    }
    if (withTime) {
        return `${shortMonths[date.getMonth()]}
                 ${date.getDate()} 
                 ${date.getHours()}
                 :${date.getMinutes() === 0 ? '00' : date.getMinutes()}`
    }
    if (withDay && withTime) {
        return `${shortMonths[date.getMonth()]}
                 ${date.getDate()} 
                 ${shortDays[date.getDay()]}
                 ${date.getHours()}
                 :${date.getMinutes() === 0 ? '00' : date.getMinutes()}`
    }
    if(onlyTime){
        const mins = Math.round(timestamp /60000 % 60)
        const hours = Math.floor(timestamp/1000/60/60)
        return `${hours}h:${mins}m `
    }
    return `${shortMonths[date.getMonth()]} ${date.getDate()}`
}