export const formatPrice = (price, currency = 'EUR', locale = 'de-DE') => {
	if (price === null || price === undefined) {
		return '';
	}

	const formattedPrice = new Intl.NumberFormat(locale, {
		style: 'currency',
		currency,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(price);

	const currencySymbol = new Intl.NumberFormat(locale, {
		style: 'currency',
		currency,
	})
		.formatToParts(0)
		.find((part) => part.type === 'currency').value;

	if (!formattedPrice.startsWith(currencySymbol)) {
		return `${currencySymbol}${formattedPrice
			.replace(currencySymbol, '')
			.trim()}`;
	}

	return formattedPrice;
};
