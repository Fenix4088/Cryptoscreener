export default class Page {

    constructor(match) {
        this.match = match;
    }

    render() {
        const element = `<h1>itemPage</h1>`;
        return element;
    }

    destroy() {
        console.log('Destroy page itemPage');
    }
}