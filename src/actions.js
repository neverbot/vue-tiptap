// Single source of truth for the toolbar actions.
//
// Adding a button means adding one entry here: the validator, the prop
// documentation and the rendered toolbar all read from this object.
//
// - `icon` names a file in `assets/icons/`. Use `label` instead to render
//   plain text, as the headings do.
// - `isActive` is optional; undo, redo and horizontalRule have no toggled
//   state, so their buttons never get the `is-active` class.
// - `run` receives an already-focused chain and returns it. The caller
//   ends the chain, so entries stay one expression each.

export const actions = {
  bold: {
    icon: 'bold',
    isActive: (editor) => editor.isActive('bold'),
    run: (chain) => chain.toggleBold(),
  },
  italic: {
    icon: 'italic',
    isActive: (editor) => editor.isActive('italic'),
    run: (chain) => chain.toggleItalic(),
  },
  strike: {
    icon: 'strike',
    isActive: (editor) => editor.isActive('strike'),
    run: (chain) => chain.toggleStrike(),
  },
  underline: {
    icon: 'underline',
    isActive: (editor) => editor.isActive('underline'),
    run: (chain) => chain.toggleUnderline(),
  },
  code: {
    icon: 'code',
    isActive: (editor) => editor.isActive('code'),
    run: (chain) => chain.toggleCode(),
  },
  h1: {
    label: 'H1',
    isActive: (editor) => editor.isActive('heading', { level: 1 }),
    run: (chain) => chain.toggleHeading({ level: 1 }),
  },
  h2: {
    label: 'H2',
    isActive: (editor) => editor.isActive('heading', { level: 2 }),
    run: (chain) => chain.toggleHeading({ level: 2 }),
  },
  h3: {
    label: 'H3',
    isActive: (editor) => editor.isActive('heading', { level: 3 }),
    run: (chain) => chain.toggleHeading({ level: 3 }),
  },
  bulletList: {
    icon: 'ul',
    isActive: (editor) => editor.isActive('bulletList'),
    run: (chain) => chain.toggleBulletList(),
  },
  orderedList: {
    icon: 'ol',
    isActive: (editor) => editor.isActive('orderedList'),
    run: (chain) => chain.toggleOrderedList(),
  },
  blockquote: {
    icon: 'quote',
    isActive: (editor) => editor.isActive('blockquote'),
    run: (chain) => chain.toggleBlockquote(),
  },
  codeBlock: {
    icon: 'code',
    isActive: (editor) => editor.isActive('codeBlock'),
    run: (chain) => chain.toggleCodeBlock(),
  },
  horizontalRule: {
    icon: 'hr',
    run: (chain) => chain.setHorizontalRule(),
  },
  undo: {
    icon: 'undo',
    run: (chain) => chain.undo(),
  },
  redo: {
    icon: 'redo',
    run: (chain) => chain.redo(),
  },
};

export const actionNames = Object.keys(actions);
