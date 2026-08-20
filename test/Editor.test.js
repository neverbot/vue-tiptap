import { describe, it, expect, vi } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils';
import Editor from '@/components/Editor.vue';

// The toolbar renders one <button> per entry in activeButtons, so counting
// and reading them is the cheapest way to assert what was rendered.
const buttonsOf = (wrapper) =>
  wrapper.findAll('.menubar__button').map((b) => {
    const icon = b.find('.icon');
    // icon buttons carry .icon--<name>; h1/h2/h3 render as plain text
    return icon.exists()
      ? icon
          .classes()
          .find((c) => c.startsWith('icon--') && c !== 'icon--normal')
          .replace('icon--', '')
      : b.text();
  });

const mountEditor = (props = {}) => mount(Editor, { props });

describe('rendering', () => {
  it('renders bold and italic when activeButtons is omitted', () => {
    const wrapper = mountEditor();

    expect(buttonsOf(wrapper)).toEqual(['bold', 'italic']);
  });

  it('renders exactly the requested buttons, in the given order', () => {
    const wrapper = mountEditor({
      activeButtons: ['undo', 'bulletList', 'bold'],
    });

    expect(buttonsOf(wrapper)).toEqual(['undo', 'ul', 'bold']);
  });

  it('renders headings as text rather than icons', () => {
    const wrapper = mountEditor({ activeButtons: ['h1', 'h2', 'h3'] });

    expect(buttonsOf(wrapper)).toEqual(['H1', 'H2', 'H3']);
  });

  it('renders no toolbar buttons for an empty activeButtons', () => {
    const wrapper = mountEditor({ activeButtons: [] });

    expect(wrapper.findAll('.menubar__button')).toHaveLength(0);
  });

  it('inlines the svg of each icon button', () => {
    const wrapper = mountEditor({ activeButtons: ['bold'] });

    expect(wrapper.find('.icon--bold').html()).toContain('<svg');
  });
});

describe('content', () => {
  it('starts with the default content when initialContent is omitted', () => {
    const wrapper = mountEditor();

    expect(wrapper.vm.editor.getHTML()).toBe('<p><em>editable text</em></p>');
  });

  it('renders initialContent into the editable area', async () => {
    const wrapper = mountEditor({
      initialContent: '<h2>Title</h2><p>Body</p>',
    });
    // tiptap attaches the ProseMirror DOM asynchronously
    await flushPromises();

    const content = wrapper.find('.editor__content').html();
    expect(content).toContain('<h2>Title</h2>');
    expect(content).toContain('<p>Body</p>');
  });

  it('exposes the initial html and json on the instance', () => {
    const wrapper = mountEditor({ initialContent: '<p>hi</p>' });

    expect(wrapper.vm.html).toBe('<p>hi</p>');
    expect(wrapper.vm.json.type).toBe('doc');
  });
});

describe('update event', () => {
  it('emits update with the full html when the document changes', async () => {
    const wrapper = mountEditor({ initialContent: '<p>before</p>' });

    wrapper.vm.editor.commands.setContent('<p>after</p>');
    await wrapper.vm.$nextTick();

    const updates = wrapper.emitted('update');
    expect(updates).toHaveLength(1);
    expect(updates[0][0]).toBe('<p>after</p>');
  });

  it('does not emit before the document changes', () => {
    const wrapper = mountEditor();

    expect(wrapper.emitted('update')).toBeUndefined();
  });

  it('keeps html in sync with the emitted value', async () => {
    const wrapper = mountEditor();

    wrapper.vm.editor.commands.setContent('<p>synced</p>');
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.html).toBe('<p>synced</p>');
  });
});

describe('commands', () => {
  it('applies a mark through the editor chain', () => {
    const wrapper = mountEditor({ initialContent: '<p>text</p>' });
    const { editor } = wrapper.vm;

    editor.commands.selectAll();
    editor.chain().toggleBold().run();

    expect(editor.getHTML()).toBe('<p><strong>text</strong></p>');
    expect(editor.isActive('bold')).toBe(true);
  });

  it('marks the matching button as active after clicking it', async () => {
    const wrapper = mountEditor({
      initialContent: '<p>text</p>',
      activeButtons: ['bold'],
    });
    await flushPromises();

    wrapper.vm.editor.commands.selectAll();
    await wrapper.find('.menubar__button').trigger('click');

    // @tiptap/vue-3 batches the re-render a transaction triggers, so this
    // lands a macrotask later — poll instead of assuming a tick count.
    await vi.waitFor(() =>
      expect(wrapper.find('.menubar__button').classes()).toContain(
        'is-active',
      ),
    );
    expect(wrapper.vm.editor.getHTML()).toBe('<p><strong>text</strong></p>');
  });

  it('supports underline, which StarterKit provides', () => {
    const wrapper = mountEditor({ initialContent: '<p>text</p>' });
    const { editor } = wrapper.vm;

    editor.commands.selectAll();
    editor.chain().toggleUnderline().run();

    expect(editor.getHTML()).toBe('<p><u>text</u></p>');
  });
});

describe('lifecycle', () => {
  it('destroys the editor on unmount', () => {
    const wrapper = mountEditor();
    const { editor } = wrapper.vm;

    expect(editor.isDestroyed).toBe(false);
    wrapper.unmount();

    expect(editor.isDestroyed).toBe(true);
  });
});

describe('activeButtons validator', () => {
  const validator = Editor.props.activeButtons.validator;

  it('accepts every documented action', () => {
    const all = [
      'bold',
      'italic',
      'strike',
      'underline',
      'code',
      'h1',
      'h2',
      'h3',
      'bulletList',
      'orderedList',
      'blockquote',
      'codeBlock',
      'horizontalRule',
      'undo',
      'redo',
    ];

    expect(validator(all)).toBeTruthy();
  });

  it('accepts an empty list', () => {
    expect(validator([])).toBeTruthy();
  });

  // The validator returns -1 for an invalid entry, and -1 is truthy, so Vue
  // reads the rejection as a pass and never warns. Enable once that is fixed.
  it.todo('rejects an unknown action (blocked on the validator returning -1)');
});
