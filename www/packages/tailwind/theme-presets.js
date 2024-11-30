const light = {
  "--docs-bg-base": "rgba(255, 255, 255, 1)",
  "--docs-bg-base-hover": "rgba(244, 244, 245, 1)",
  "--docs-bg-base-pressed": "rgba(228, 228, 231, 1)",
  "--docs-bg-subtle": "rgba(250, 250, 250, 1)",
  "--docs-bg-subtle-hover": "rgba(244, 244, 245, 1)",
  "--docs-bg-subtle-pressed": "rgba(228, 228, 231, 1)",
  "--docs-bg-component": "rgba(250, 250, 250, 1)",
  "--docs-bg-component-pressed": "rgba(228, 228, 231, 1)",
  "--docs-bg-component-hover": "rgba(244, 244, 245, 1)",
  "--docs-bg-switch-off": "rgba(228, 228, 231, 1)",
  "--docs-bg-switch-off-hover": "rgba(212, 212, 216, 1)",
  "--docs-bg-interactive": "rgba(59, 130, 246, 1)",
  "--docs-bg-overlay": "rgba(24, 24, 27, 0.4)",
  "--docs-bg-disabled": "rgba(244, 244, 245, 1)",
  "--docs-bg-highlight": "rgba(239, 246, 255, 1)",
  "--docs-bg-highlight-hover": "rgba(219, 234, 254, 1)",
  "--docs-bg-field": "rgba(250, 250, 250, 1)",
  "--docs-bg-field-hover": "rgba(244, 244, 245, 1)",
  "--docs-bg-field-component": "rgba(255, 255, 255, 1)",
  "--docs-bg-field-component-hover": "rgba(250, 250, 250, 1)",

  "--docs-fg-base": "rgba(24, 24, 27, 1)",
  "--docs-fg-subtle": "rgba(82, 82, 91, 1)",
  "--docs-fg-muted": "rgba(161, 161, 170, 1)",
  "--docs-fg-disabled": "rgba(212, 212, 216, 1)",
  "--docs-fg-on-color": "rgba(255, 255, 255, 1)",
  "--docs-fg-on-inverted": "rgba(255, 255, 255, 1)",
  "--docs-fg-interactive": "rgba(59, 130, 246, 1)",
  "--docs-fg-interactive-hover": "rgba(37, 99, 235, 1)",
  "--docs-fg-error": "rgba(225, 29, 72, 1)",

  "--docs-border-base": "rgba(228, 228, 231, 1)",
  "--docs-border-strong": "rgba(212, 212, 216, 1)",
  "--docs-border-interactive": "rgba(59, 130, 246, 1)",
  "--docs-border-error": "rgba(225, 29, 72, 1)",
  "--docs-border-danger": "rgba(190, 18, 60, 1)",
  "--docs-border-transparent": "rgba(255, 255, 255, 0)",
  "--docs-border-menu-top": "rgba(228, 228, 231, 1)",
  "--docs-border-menu-bot": "rgba(255, 255, 255, 1)",

  "--docs-button-inverted": "rgba(39, 39, 42, 1)",
  "--docs-button-inverted-hover": "rgba(63, 63, 70, 1)",
  "--docs-button-inverted-pressed": "rgba(82, 82, 91, 1)",
  "--docs-button-neutral": "rgba(255, 255, 255, 1)",
  "--docs-button-neutral-hover": "rgba(244, 244, 245, 1)",
  "--docs-button-neutral-pressed": "rgba(228, 228, 231, 1)",
  "--docs-button-danger": "rgba(225, 29, 72, 1)",
  "--docs-button-danger-hover": "rgba(190, 18, 60, 1)",
  "--docs-button-danger-pressed": "rgba(159, 18, 57, 1)",
  "--docs-button-transparent": "rgba(255, 255, 255, 0)",
  "--docs-button-transparent-hover": "rgba(244, 244, 245, 1)",
  "--docs-button-transparent-pressed": "rgba(228, 228, 231, 1)",

  "--docs-tags-neutral-bg": "rgba(244, 244, 245, 1)",
  "--docs-tags-neutral-bg-hover": "rgba(228, 228, 231, 1)",
  "--docs-tags-neutral-text": "rgba(82, 82, 91, 1)",
  "--docs-tags-neutral-icon": "rgba(161, 161, 170, 1)",
  "--docs-tags-neutral-border": "rgba(228, 228, 231, 1)",
  "--docs-tags-purple-bg": "rgba(237, 233, 254, 1)",
  "--docs-tags-purple-bg-hover": "rgba(221, 214, 254, 1)",
  "--docs-tags-purple-text": "rgba(91, 33, 182, 1)",
  "--docs-tags-purple-icon": "rgba(167, 139, 250, 1)",
  "--docs-tags-purple-border": "rgba(221, 214, 254, 1)",
  "--docs-tags-blue-bg": "rgba(219, 234, 254, 1)",
  "--docs-tags-blue-bg-hover": "rgba(191, 219, 254, 1)",
  "--docs-tags-blue-text": "rgba(30, 64, 175, 1)",
  "--docs-tags-blue-icon": "rgba(96, 165, 250, 1)",
  "--docs-tags-blue-border": "rgba(191, 219, 254, 1)",
  "--docs-tags-green-bg": "rgba(209, 250, 229, 1)",
  "--docs-tags-green-bg-hover": "rgba(167, 243, 208, 1)",
  "--docs-tags-green-text": "rgba(6, 95, 70, 1)",
  "--docs-tags-green-icon": "rgba(16, 185, 129, 1)",
  "--docs-tags-green-border": "rgba(167, 243, 208, 1)",
  "--docs-tags-orange-bg": "rgba(255, 237, 213, 1)",
  "--docs-tags-orange-bg-hover": "rgba(254, 215, 170, 1)",
  "--docs-tags-orange-text": "rgba(154, 52, 18, 1)",
  "--docs-tags-orange-icon": "rgba(249, 115, 22, 1)",
  "--docs-tags-orange-border": "rgba(254, 215, 170, 1)",
  "--docs-tags-red-bg": "rgba(255, 228, 230, 1)",
  "--docs-tags-red-bg-hover": "rgba(254, 205, 211, 1)",
  "--docs-tags-red-text": "rgba(159, 18, 57, 1)",
  "--docs-tags-red-icon": "rgba(244, 63, 94, 1)",
  "--docs-tags-red-border": "rgba(254, 205, 211, 1)",

  // TODO change code block design to use contrast
  // we currently need those for the subtle code blocks
  "--docs-code-bg-base": "rgba(24, 24, 27, 1)",
  "--docs-code-bg-header": "rgba(31, 41, 55, 1)",
  "--docs-code-border": "rgba(55, 65, 81, 1)",

  "--docs-contrast-bg-base": "rgba(24, 24, 27, 1)",
  "--docs-contrast-bg-base-pressed": "rgba(63, 63, 70, 1)",
  "--docs-contrast-bg-base-hover": "rgba(39, 39, 42, 1)",
  "--docs-contrast-bg-subtle": "rgba(39, 39, 42, 1)",
  "--docs-contrast-bg-highlight": "rgba(63, 63, 70, 1)",
  "--docs-contrast-bg-alpha": "rgba(9, 9, 11, 0.8)",
  "--docs-contrast-fg-primary": "rgba(255, 255, 255, 0.88)",
  "--docs-contrast-fg-secondary": "rgba(255, 255, 255, 0.56)",
  "--docs-contrast-border-base": "rgba(255, 255, 255, 0.16)",
  "--docs-contrast-border-top": "rgba(9, 9, 11, 1)",
  "--docs-contrast-border-bot": "rgba(255, 255, 255, 0.10)",

  "--docs-alpha-white-alpha-6": "rgba(255, 255, 255, 0.06)",
  "--docs-alpha-white-alpha-12": "rgba(255, 255, 255, 0.12)",
}

const dark = {
  "--docs-bg-base": "rgba(33, 33, 36, 1)",
  "--docs-bg-base-hover": "rgba(39, 39, 42, 1)",
  "--docs-bg-base-pressed": "rgba(63, 63, 70, 1)",
  "--docs-bg-subtle": "rgba(24, 24, 27, 1)",
  "--docs-bg-subtle-hover": "rgba(33, 33, 36, 1)",
  "--docs-bg-subtle-pressed": "rgba(39, 39, 42, 1)",
  "--docs-bg-component": "rgba(39, 39, 42, 1)",
  "--docs-bg-component-pressed": "rgba(255, 255, 255, 0.16)",
  "--docs-bg-component-hover": "rgba(255, 255, 255, 0.1)",
  "--docs-bg-switch-off": "rgba(63, 63, 70, 1)",
  "--docs-bg-switch-off-hover": "rgba(82, 82, 91, 1)",
  "--docs-bg-interactive": "rgba(96, 165, 250, 1)",
  "--docs-bg-overlay": "rgba(24, 24, 27, 0.72)",
  "--docs-bg-disabled": "rgba(39, 39, 42, 1)",
  "--docs-bg-highlight": "rgba(23, 37, 84, 1)",
  "--docs-bg-highlight-hover": "rgba(30, 58, 138, 1)",
  "--docs-bg-field": "rgba(255, 255, 255, 0.04)",
  "--docs-bg-field-hover": "rgba(255, 255, 255, 0.08)",
  "--docs-bg-field-component": "rgba(33, 33, 36, 1)",
  "--docs-bg-field-component-hover": "rgba(39, 39, 42, 1)",

  "--docs-fg-base": "rgba(244, 244, 245, 1)",
  "--docs-fg-subtle": "rgba(161, 161, 170, 1)",
  "--docs-fg-muted": "rgba(113, 113, 122, 1)",
  "--docs-fg-disabled": "rgba(82, 82, 91, 1)",
  "--docs-fg-on-color": "rgba(255, 255, 255, 1)",
  "--docs-fg-on-inverted": "rgba(24, 24, 27, 1)",
  "--docs-fg-interactive": "rgba(96, 165, 250, 1)",
  "--docs-fg-interactive-hover": "rgba(147, 197, 253, 1)",
  "--docs-fg-error": "rgba(251, 113, 133, 1)",

  "--docs-border-base": "rgba(255, 255, 255, 0.08)",
  "--docs-border-strong": "rgba(255, 255, 255, 0.16)",
  "--docs-border-interactive": "rgba(96, 165, 250, 1)",
  "--docs-border-error": "rgba(251, 113, 133, 1)",
  "--docs-border-danger": "rgba(190, 18, 60, 1)",
  "--docs-border-transparent": "rgba(255, 255, 255, 0)",
  "--docs-border-menu-top": "rgba(255, 255, 255, 0.08)",
  "--docs-border-menu-bot": "rgba(255, 255, 255, 0.08)",

  "--docs-button-inverted": "rgba(82, 82, 91, 1)",
  "--docs-button-inverted-hover": "rgba(113, 113, 122, 1)",
  "--docs-button-inverted-pressed": "rgba(161, 161, 170, 1)",
  "--docs-button-neutral": "rgba(255, 255, 255, 0.04)",
  "--docs-button-neutral-hover": "rgba(255, 255, 255, 0.08)",
  "--docs-button-neutral-pressed": "rgba(255, 255, 255, 0.12)",
  "--docs-button-danger": "rgba(159, 18, 57, 1)",
  "--docs-button-danger-hover": "rgba(190, 18, 60, 1)",
  "--docs-button-danger-pressed": "rgba(225, 29, 72, 1)",
  "--docs-button-transparent": "rgba(255, 255, 255, 0)",
  "--docs-button-transparent-hover": "rgba(255, 255, 255, 0.08)",
  "--docs-button-transparent-pressed": "rgba(255, 255, 255, 0.12)",

  "--docs-tags-neutral-bg": "rgba(255, 255, 255, 0.08)",
  "--docs-tags-neutral-bg-hover": "rgba(255, 255, 255, 0.12)",
  "--docs-tags-neutral-text": "rgba(212, 212, 216, 1)",
  "--docs-tags-neutral-icon": "rgba(113, 113, 122, 1)",
  "--docs-tags-neutral-border": "rgba(255, 255, 255, 0.06)",
  "--docs-tags-purple-bg": "rgba(46, 16, 101, 1)",
  "--docs-tags-purple-bg-hover": "rgba(91, 33, 182, 1)",
  "--docs-tags-purple-text": "rgba(196, 181, 253, 1)",
  "--docs-tags-purple-icon": "rgba(167, 139, 250, 1)",
  "--docs-tags-purple-border": "rgba(91, 33, 182, 1)",
  "--docs-tags-blue-bg": "rgba(23, 37, 84, 1)",
  "--docs-tags-blue-bg-hover": "rgba(30, 58, 138, 1)",
  "--docs-tags-blue-text": "rgba(147, 197, 253, 1)",
  "--docs-tags-blue-icon": "rgba(96, 165, 250, 1)",
  "--docs-tags-blue-border": "rgba(30, 58, 138, 1)",
  "--docs-tags-green-bg": "rgba(2, 44, 34, 1)",
  "--docs-tags-green-bg-hover": "rgba(6, 78, 59, 1)",
  "--docs-tags-green-text": "rgba(52, 211, 153, 1)",
  "--docs-tags-green-icon": "rgba(16, 185, 129, 1)",
  "--docs-tags-green-border": "rgba(6, 78, 59, 1)",
  "--docs-tags-orange-bg": "rgba(67, 20, 7, 1)",
  "--docs-tags-orange-bg-hover": "rgba(124, 45, 18, 1)",
  "--docs-tags-orange-text": "rgba(253, 186, 116, 1)",
  "--docs-tags-orange-icon": "rgba(251, 146, 60, 1)",
  "--docs-tags-orange-border": "rgba(124, 45, 18, 1)",
  "--docs-tags-red-bg": "rgba(76, 5, 25, 1)",
  "--docs-tags-red-bg-hover": "rgba(136, 19, 55, 1)",
  "--docs-tags-red-text": "rgba(253, 164, 175, 1)",
  "--docs-tags-red-icon": "rgba(251, 113, 133, 1)",
  "--docs-tags-red-border": "rgba(136, 19, 55, 1)",

  // TODO change code block design to use contrast
  // we currently need those for the subtle code blocks
  "--docs-code-bg-base": "rgba(9, 9, 11, 1)",
  "--docs-code-bg-header": "rgba(24, 24, 26, 1)",
  "--docs-code-border": "rgba(46, 48, 53, 1)",

  "--docs-contrast-bg-base": "rgba(39, 39, 42, 1)",
  "--docs-contrast-bg-base-pressed": "rgba(82, 82, 91, 1)",
  "--docs-contrast-bg-base-hover": "rgba(63, 63, 70, 1)",
  "--docs-contrast-bg-subtle": "rgba(47, 47, 50, 1)",
  "--docs-contrast-bg-highlight": "rgba(82, 82, 91, 1)",
  "--docs-contrast-bg-alpha": "rgba(63, 63, 70, 0.9)",
  "--docs-contrast-fg-primary": "rgba(250, 250, 250, 1)",
  "--docs-contrast-fg-secondary": "rgba(255, 255, 255, 0.56)",
  "--docs-contrast-border-base": "rgba(82, 82, 91, 1)",
  "--docs-contrast-border-top": "rgba(24, 24, 27, 1)",
  "--docs-contrast-border-bot": "rgba(255, 255, 255, 0.08)",
}

module.exports = {
  ":root": light,
  ".dark": dark,
  // eslint-disable-next-line prettier/prettier
  "[data-theme=\"dark\"]": dark,
}
