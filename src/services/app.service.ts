export interface IMessageGroup {
    id: string,
    name: string,
    messages: Array<IMessage>
}

export interface IMessage {
    id: string,
    date: number,
    message: string,
    closed: boolean
}

class AppService {
    private static STORAGE_KEY = 'app_data'
    constructor() {}

    public getDataFromStorage(): Array<IMessageGroup> {
        const data = localStorage.getItem(AppService.STORAGE_KEY)
        if(!data) return new Array<IMessageGroup>(1)
        return JSON.parse(data)
    }

    public setDataToStorage(data: Array<IMessageGroup>) {
        localStorage.setItem(AppService.STORAGE_KEY, JSON.stringify(data))
    }

}

export const API = new AppService()
