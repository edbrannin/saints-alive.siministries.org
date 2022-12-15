#!/usr/bin/env node

const fs = require('fs').promises;
const yaml = require('yaml');

const INPUT_FILE = 'src/_data/saints_alive_saints.json';
const OUTPUT_FILE = 'src/_data/saints_alive_index.json';

const SAINT_PAGE_DIR = 'src/pages/saints-alive/saint/';

/**
 *
 * @param {string} inPath
 * @returns {object[]}
 */
const readFile = async (inPath = INPUT_FILE) => {
  const text = await fs.readFile(inPath);
  return JSON.parse(text);
};

const saintPermalink = ({ slug }) => `saints-alive/saint/${slug}/index.html`;
const saintReference = (saint) => {
  if (!saint) {
    return undefined;
  }
  return {
    href: saint.permalink ? saint.permalink : saintPermalink(saint),
    title: saint.title,
  };
};

const main = async () => {
  const saints = await readFile(INPUT_FILE);
  const index = [
    {
      permalink: 'saints-alive/what-is-a-saint/index.html',
      title: 'What is a saint?',
      next: saintReference(saints[0]),
    },
  ];

  await fs.mkdir(SAINT_PAGE_DIR, { recursive: true });

  for (let idx = 0; idx < saints.length; idx += 1) {
    const saint = saints[idx];

    delete saint.rawHtml;
    delete saint.crumbs;
    delete saint.groupPath;
    delete saint.path;
    delete saint.href;
    delete saint.isToc;
    delete saint.level;

    saint.permalink = saintPermalink(saint);
    saint.layout = 'saint';

    saint.prev = saintReference(saints[idx - 1] || index[0]);
    saint.next = saintReference(saints[idx + 1]);

    const { markdown, ...more} = saint;
    const result = `---\n${yaml.stringify(more)}---\n${markdown}`;
    const outPath = `src/pages/saints-alive/${saint.slug}.md`;
    console.log(`Will write to ${outPath}`);

    // eslint-disable-next-line no-await-in-loop
    await fs.writeFile(outPath, result, { encoding: 'utf-8' });

    index.push(more);
  }
  await fs.writeFile(OUTPUT_FILE, JSON.stringify(index, null, 2), { encoding: 'utf-8' });
};

if (!module.parent) {
  main();
}
