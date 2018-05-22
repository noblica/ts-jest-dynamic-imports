
export function testFunc() {
    return import(/* webpackPrefetch: true, webpackChunkName: 'ReactDom' */ './importMe').then(
    dynamic => console.log(dynamic)
  );
}