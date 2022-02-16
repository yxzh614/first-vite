export const GetService = (name: string) => new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('get ' + name);
    }, 100);
})