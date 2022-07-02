import { useBlockProps, RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import metadata from "./block.json";
import { removeAttribute } from "../utilities";

const v1 = {
	supports: {
		html: false,
		color: {
			background: true,
			text: true,
			gradients: true,
		},
		spacing: {
			padding: true,
		},
	},
	attributes: {
		...removeAttribute(metadata.attributes, "textAlignment"),
		alignment: {
			type: "string",
			default: "left",
		},
		text: {
			type: "string",
			source: "html",
			selector: "h4",
		},
	},
	migrate: (attributes) => {
		return {
			...removeAttribute(attributes, "alignment"),
			textAlignment: attributes.alignment,
		};
	},
	save: ({ attributes }) => {
		const { text, alignment, shadow, shadowOpacity } = attributes;

		return (
			<RichText.Content
				{...useBlockProps.save({
					className: `text-box-align-${alignment} ${
						shadow ? `has-shadow shadow-opacity-${shadowOpacity}` : null
					}`,
				})}
				tagName="h4"
				value={text}
			/>
		);
	},
};

export default v1;
