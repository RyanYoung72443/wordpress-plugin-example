export const changeMediaAttribute = (attribute, change, size) => {
	const url = change.sizes[size]
		? change.sizes[size].url
		: change.sizes["full"].url;
	return changeAttribute(attribute, url);
};

export const removeAttribute = (attributes, oldAttribute) => {
	const attr = {};
	for (const prop in attributes) {
		if (prop !== oldAttribute) attr[prop] = attributes[prop];
	}
	return attr;
};
