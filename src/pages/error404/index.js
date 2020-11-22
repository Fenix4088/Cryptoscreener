export default class Page {

    constructor(match) {
        this.match = match;
    }

    render() {
        const element = `<h1>ErrorPage</h1>`;
        return element;
    }

    destroy() {
        console.log('Destroy page error404');
    }
}