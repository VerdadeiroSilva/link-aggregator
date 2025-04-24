
export default function extract($, schema) {
    const result = {};
    for (const key in schema) {
        const def = schema[key];

        if (typeof def === 'string') {
            result[key] = $(def).first().text().trim();
        }

        else if (typeof def === 'object') {
            const {
                selector,
                attr,
                multiple = false
            } = def;

            if (multiple) {
                result[key] = $(selector).map((i, el) => {
                    const elem = $(el);
                    return attr ? elem.attr(attr) : elem.text().trim();
                }).get();
            } else {
                const elem = $(selector).first();
                result[key] = attr ? elem.attr(attr) : elem.text().trim();
            }
        }
    }
    return result;
}