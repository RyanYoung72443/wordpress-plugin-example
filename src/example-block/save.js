import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { text, alignment } = attributes;

console.log(classes);
	return (
		<RichText.Content
			{ ...useBlockProps.save( {
				className: `text-box-align-${ alignment }`,
			} )}
			tagName="h4"
			value={ text }
		/>
	);
}
