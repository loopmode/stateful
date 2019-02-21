export default function dummyCall({
    successRate = 0.5,
    min = 0,
    max = 2000
} = {}) {
    const duration = Math.floor(min + Math.random() * (max - min));
    const fail = Math.random() > successRate;
    console.log(
        `dummyCall -> will ${fail ? 'fail' : 'succeed'} in ${duration}ms`
    );

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`dummyCall -> ${fail ? 'fail' : 'success'}`);
            if (fail) {
                return reject({ status: 400 });
            }
            return resolve({ status: 200 });
        }, duration);
    });
}
