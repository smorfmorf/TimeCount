const styles = new Map();

function loadStyle(url) {
    if (styles.has(url)) {
        //если они уже есть возвращаем положительный промис
        return styles.get(url);
    }

    const stylePromise = new Promise((resolve) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = url;
        link.addEventListener("load", () => {
            resolve();
        });
        document.head.append(link);
    });
    styles.set(url, stylePromise);

    return stylePromise;
}

export default loadStyle;
