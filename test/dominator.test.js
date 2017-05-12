const { getElementById,
        getElementsByClassName,
        getElementsByTagName,
        flattenTreeToArray } = require('../dominator');
const fs = require('fs');

describe('dominator', () => {

  beforeEach( () => {
    // load HTML skeleton from disk and parse into the DOM
    const fixturePath = './test/fixtures/sample-page.html';
    const html = fs.readFileSync(fixturePath, 'utf8');
    document.documentElement.innerHTML = html;
  });

  describe('getElementById()', () => {
    it('finds a valid id', () => {
      const el = getElementById(document.body, 'pushpop');
      expect(el.id).toEqual('pushpop');
      expect(el.textContent).toEqual('Push/pop');
    });
  });

  describe('getElementsByClassName()', () => {
    it('finds all elements matching a class', () => {
      const els = getElementsByClassName(document.body, 'bad-joke');
      expect(els.length).toEqual(2);
      expect(els[1].textContent).toEqual('Yes, yes, time is money.');
    });

    it('finds all elements matching within a multi-named class', () => {
      const els = getElementsByClassName(document.body, 'highlighter-rouge');
      expect(els.length).toEqual(1);
      expect(els[0].className).toEqual('language-javascript highlighter-rouge');
    });
  });

  describe('getElementsByTagName()', () => {
    it('finds all elements matching a tag name', () => {
      const els = getElementsByTagName(document.body, 'H2');
      expect(els.length).toEqual(4);
    });
  });

});