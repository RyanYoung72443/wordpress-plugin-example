/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hooks that are used to function text and media elements.
 * It provides all the necessary props.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#mediaupload
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#richtext
 */
import { MediaUpload, RichText } from '@wordpress/block-editor';

/**
 * React hooks that are used to function text and media elements.
 * It provides all the necessary props.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#mediaupload
 */
import { Button } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * Import utilities functions to simplify setting attributes
 */
import { changeAttribute, changeMediaAttribute } from '../utilities';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({
	attributes: { testimonialText, testimonialName, testimonialImage },
	setAttributes,
}) {
	return (
		<div className="testimonial-block">
			<blockquote>
				<RichText
					placeholder="Add text for testimonial..."
					onChange={(e) =>
						setAttributes(changeAttribute('testimonialText', e))
					}
					value={testimonialText}
				/>
			</blockquote>
			<div class="testimonial-info">
				<img src={testimonialImage} />
				<MediaUpload
					onSelect={(e) =>
						setAttributes(
							changeMediaAttribute(
								'testimonialImage',
								e,
								'medium'
							)
						)
					}
					type="image"
					render={({ open }) => (
						<Button
							onClick={open}
							icon="format-image"
							showTooltip="true"
							label="Add Image"
						/>
					)}
				/>
				<p>
					<RichText
						placeholder="Name... AnyCompany... Title..."
						onChange={(e) =>
							setAttributes(changeAttribute('testimonialName', e))
						}
						value={testimonialName}
					/>
				</p>
			</div>
		</div>
	);
}
