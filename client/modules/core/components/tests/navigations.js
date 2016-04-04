const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Navigation from '../navigation';

describe('core.components.navigation', () => {
  it('包含链接:应该包含一个到home的链接', () => {
    const el = shallow(<Navigation />);
    const homeLink = el.find('a').at(0);
    expect(homeLink.text()).to.be.equal('Home');
    expect(homeLink.prop('href')).to.be.equal('/');
  });

  it('包含链接:应该包含一个到New Post的链接', () => {
    const el = shallow(<Navigation />);
    const newPostLink = el.find('a').at(1);
    expect(newPostLink.text()).to.be.equal('New Post');
    expect(newPostLink.prop('href')).to.be.equal('/new-post');
  });
});
