import { registerBlockType, createBlock } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import "./style.scss";
import Edit from "./edit";
import save from "./save";
import v1 from "./v1";
import v2 from "./v2";

import metadata from "./block.json";

registerBlockType(metadata.name, {
	edit: Edit,
	save,
	deprecated: [v2, v1],
	variations: [
		{
			name: "create-block/gradient-text-box",
			title: __("Gradient Text Box"),
			icon: "wordpress",
			attributes: {
				gradient: "cool-to-warm-spectrum",
			},
		},
	],
	transforms: {
		from: [
			{
				type: "block",
				blocks: ["core/paragraph"],
				transform: ({ content, align }) => {
					return createBlock(metadata.name, {
						text: content,
						textAlignment: align,
					});
				},
			},
			{
				type: "enter",
				regExp: /textbox/i,
				transform: () => {
					return createBlock(metadata.name);
				},
			},
			{
				type: "prefix",
				prefix: "textbox",
				transform: () => {
					return createBlock(metadata.name);
				},
			},
		],
		to: [
			{
				type: "block",
				blocks: ["core/paragraph"],
				isMatch: ({ text }) => (text ? true : false),
				transform: ({ text, textAlignment }) => {
					return createBlock("core/paragraph", {
						content: text,
						align: textAlignment,
					});
				},
			},
		],
	},
});
