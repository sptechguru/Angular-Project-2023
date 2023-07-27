 import {greet} from './greet'

 describe('greet',()=>{
  it('Should include the name in this msg',()=>{
    expect(greet('santosh')).toContain('santosh');
  })

 })
