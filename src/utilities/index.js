export const changeMediaAttribute = (attribute, change, size) => {
	const url = change.sizes[size]
		? change.sizes[size].url
		: change.sizes['full'].url;
	return changeAttribute(attribute, url);
};

export const changeAttribute = (attribute, change) => {
	return { [attribute]: change };
};
