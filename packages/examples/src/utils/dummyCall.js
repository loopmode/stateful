export default function dummyCall({
    // probability of success (0.0 - 1.0)
    successRate = 0.5,
    // duration in milliseconds
    min = 100,
    // duration in milliseconds
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
