export const formatPrice = (price, currency = 'EUR', locale = 'de-DE') => {
	if (price === null || price === undefined) {
		return '';
	}

	let formattedPrice = new Intl.NumberFormat(locale, {
		style: 'currency',
		currency,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(price);

	// Заміняємо коми на крапки
	formattedPrice = formattedPrice.replace(/,/g, '.');

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
