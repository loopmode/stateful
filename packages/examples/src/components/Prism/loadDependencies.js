export default async function loadDependencies() {
    const Prism = await import(/* webpackChunkName: 'libs/prism' */ 'prismjs');
    await import(/* webpackChunkName: 'libs/prism-theme-okaidia' */ 'prismjs/themes/prism-okaidia.css');
    await import(/* webpackChunkName: 'libs/prism-bash' */ 'prismjs/components/prism-jsx');
    await import(/* webpackChunkName: 'libs/prism-jsx' */ 'prismjs/components/prism-jsx');
    const ReactPrism = await import(/* webpackChunkName: 'libs/prism-react' */ 'react-prism');
    return {
        Prism,
        ReactPrism
    };
}
