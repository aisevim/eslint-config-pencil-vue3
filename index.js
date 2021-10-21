module.exports = {
	env: {
		node: true
	},
	extends: [
		'plugin:vue/vue3-essential',
	],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		// Strongly Recommended
		'vue/attribute-hyphenation': ['error', 'always'],
		'vue/component-definition-name-casing': ['error', 'PascalCase'],
		'vue/html-closing-bracket-newline': ['error', {
			singleline: 'never',
			multiline: 'always'
		}],
		'vue/html-closing-bracket-spacing': ['error', {
			startTag: 'never',
			endTag: 'never',
			selfClosingTag: 'always'
		}],
		'vue/html-indent': ['error', 2, {
			attribute: 1,
			baseIndent: 1,
			alignAttributesVertically: true
		}],
		'vue/html-quotes': ['error', 'double'],
		'vue/html-self-closing': ['error', {
			html: {
				normal: 'never',
				void: 'always'
			}
		}],
		'vue/max-attributes-per-line': ['error', {
			singleline: {
				max: 3,
				allowFirstLine: true
			},
			multiline: {
				max: 1,
				allowFirstLine: false
			}
		}],
		'vue/multiline-html-element-content-newline': 'error',
		'vue/mustache-interpolation-spacing': ['error', 'always'],
		'vue/no-multi-spaces': 'error',
		'vue/no-spaces-around-equal-signs-in-attribute': 'error',
		'vue/no-template-shadow': 'error',
		'vue/one-component-per-file': 'error',
		'vue/prop-name-casing': ['error', 'camelCase'],
		'vue/require-default-prop': 'error',
		'vue/require-explicit-emits': ['error', {
			allowProps: false
		}],
		'vue/require-prop-types': 'error',
		'vue/singleline-html-element-content-newline': ['error', {
			ignoreWhenNoAttributes: true,
			ignoreWhenEmpty: true
		}],
		'vue/v-bind-style': ['error', 'shorthand'],
		'vue/v-on-style': ['error', 'shorthand'],
		'vue/v-slot-style': ['error', {
			atComponent: 'shorthand',
			default: 'shorthand',
			named: 'shorthand'
		}],

		// Recommended
		'vue/attributes-order': 'error',
		'vue/component-tags-order': ['error', {
			order: [['script', 'template'], 'style']
		}],
		'vue/no-lone-template': 'error',
		'vue/no-multiple-slot-args': 'error',
		'vue/no-v-html': 'error',
		'vue/order-in-components': 'error',
		'vue/this-in-template': 'error',

		// Uncategorized
		'vue/block-tag-newline': ['error', {
			blocks: {
				template: {
					singleline: 'consistent',
					multiline: 'always',
					maxEmptyLines: 1
				}
			}
		}],
		'vue/component-api-style': ['error',
			['script-setup', 'composition']
		],
		'vue/component-name-in-template-casing': ['error', 'kebab-case', {
			registeredComponentsOnly: false
		}],
		'vue/custom-event-name-casing': ['error', 'kebab-case'],
		'vue/html-button-has-type': ['error', {
			button: true,
			submit: true,
			reset: true
		}],
		'vue/no-use-computed-property-like-method': 'error',
		'vue/no-deprecated-v-is': 'error',
		'vue/no-duplicate-attr-inheritance': 'error',
		'vue/no-empty-component-block': 'error',
		'vue/no-export-in-script-setup': 'error',
		'vue/no-invalid-model-keys': 'error',
		'vue/no-multiple-objects-in-class': 'error',
		'vue/no-potential-component-option-typo': ['error', {
			presets: ['all']
		}],
		'vue/no-reserved-component-names': ['error', {
			disallowVueBuiltInComponents: true,
			disallowVue3BuiltInComponents: true
		}],
		'vue/no-static-inline-styles': ['error'],
		'vue/no-template-target-blank': ['error', {
			allowReferrer: true,
			enforceDynamicLinks: 'always'
		}],
		'vue/no-this-in-before-route-enter': ['error'],
		'vue/no-unused-properties': ['error', {
			groups: ['props', 'setup']
		}],
		'vue/no-unused-refs': 'error',
		'vue/no-useless-mustaches': 'error',
		'vue/no-useless-v-bind': 'error',
		'vue/no-v-text': 'error',
		'vue/padding-line-between-blocks': ['error', 'always'],
		'vue/require-direct-export': ['error', {
			disallowFunctionalComponentFunction: false
		}],
		'vue/v-on-event-hyphenation': ['error', 'always', {
			autofix: true
		}],
		'vue/v-on-function-call': ['error', 'always'],
		'vue/valid-define-emits': 'error',
		'vue/valid-define-props': 'error',
		'vue/valid-next-tick': 'error',
		'vue/max-len': ['error', {
			code: 140,
			template: 140,
			tabWidth: 2,
			ignoreComments: true,
			ignoreTrailingComments: true
		}]
	}
}
