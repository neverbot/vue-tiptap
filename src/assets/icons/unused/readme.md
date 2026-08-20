# Unused icons

Icons kept for reference, not shipped.

They come from the original TipTap 1 demo (`tiptap.scrumpy.io`), copied
in `dcf0de0` along with the SCSS. None of them has a matching button in
`src/components/Editor.vue` or a registered extension: tables, images,
links, mentions and checklists were never implemented here.

They live in this subdirectory because `src/components/InlineSvg.vue`
globs `../assets/icons/*.svg` eagerly, and `*` does not cross a
directory separator — so anything in here stays out of the bundle
while remaining in the repo. Moving them out cut `dist/` from 29 kB to
13 kB.

To use one, move it back up one level and add the matching button plus
its TipTap extension. Nothing else needs changing; the glob picks it up
automatically.
