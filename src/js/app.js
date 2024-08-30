// TODO: write your code here
import GameSavingLoader from './GameSavingLoader';

(async () => {
    try {
        const savingObj = await GameSavingLoader.load();
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(savingObj);
        }, 10)
    })
    } catch (e) {
        console.log(e)
    }
})();