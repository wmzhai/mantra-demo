const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import MainLayout from '../main_layout';
import Header from '../header';

describe('core.components.main_layout', () => {
  it('包含组件: 应该包含一个Header组件', () => {
    const el = shallow(<MainLayout />);
    expect(el.contains(<Header />)).to.be.equal(true);
  });

  it('应该渲染子节点', () => {
    const Comp = () => (<p>Hello</p>);
    const el = shallow(
      <MainLayout content={() => (<Comp />)}/>
    );

    expect(el.contains(<Comp />)).to.be.equal(true);
  });
});
