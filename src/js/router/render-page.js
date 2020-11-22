export default async function (path, match) {
    const {default: Page} = await import(/* webpackChunkName: "[request]" */ `../../pages/${path}/index.js`);

    const page = new Page(match);

    const element = await page.render();

    const appContainer = document.querySelector("#content");
    appContainer.innerHTML = "";
    appContainer.append(element);

    return page;
}