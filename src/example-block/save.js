import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { text, textAlignment, shadow, shadowOpacity } = attributes;

	return (
		<RichText.Content
			{...useBlockProps.save({
				className: `text-box-align-${textAlignment} ${
					shadow ? `has-shadow shadow-opacity-${shadowOpacity}` : ""
				}`,
			})}
			tagName="p"
			value={text}
		/>
	);
}
