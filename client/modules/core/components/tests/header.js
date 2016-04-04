const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Header from '../header';
import Navigation from '../navigation';

describe('core.components.header', () => {
  it('包含组件:应该包含导航栏', () => {
    const el = shallow(<Header />);
    expect(el.contains(<Navigation />)).to.be.equal(true);
  });

  it('包含链接:应该包含一个到home的链接', () => {
    const el = shallow(<Header />);
    const homeLink = el.find('a').at(0);
    expect(homeLink.prop('href')).to.be.equal('/');
  });
});
