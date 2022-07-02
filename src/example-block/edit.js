import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	__experimentalBoxControl as BoxControl,
	PanelBody,
	RangeControl,
} from "@wordpress/components";
import "./editor.scss";

const { __Visualizer: BoxControlVisualizer } = BoxControl;

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { text, textAlignment, style, shadow, shadowOpacity } = attributes;

	return (
		<>
			<InspectorControls>
				{shadow && (
					<PanelBody title={__("Shadow Setting", "text-box")}>
						<RangeControl
							label={__("Shadow Opacity", "text-box")}
							value={shadowOpacity}
							min={10}
							max={40}
							step={10}
							onChange={(newOpacity) =>
								setAttributes({ shadowOpacity: newOpacity })
							}
						/>
					</PanelBody>
				)}
			</InspectorControls>
			<BlockControls
				controls={[
					{
						icon: "admin-page",
						title: __("Shadow", "text-box"),
						onClick: () => setAttributes({ shadow: !shadow }),
						isActive: shadow,
					},
				]}
			>
				<AlignmentToolbar
					value={textAlignment}
					onChange={(newAlignment) =>
						setAttributes({ textAlignment: newAlignment })
					}
				/>
			</BlockControls>
			<div
				{...useBlockProps({
					className: `text-box-align-${textAlignment} ${
						shadow ? `has-shadow shadow-opacity-${shadowOpacity}` : ""
					}`,
				})}
			>
				<RichText
					className="text-box-title"
					onChange={(newText) => setAttributes({ text: newText })}
					value={text}
					placeholder={__("Your Text", "text-box")}
					tagName="p"
					allowedFormats={[]}
				/>
				<BoxControlVisualizer
					values={style && style.spacing && style.spacing.padding}
					showValues={style && style.visualizers && style.visualizers.padding}
				/>
			</div>
		</>
	);
}
