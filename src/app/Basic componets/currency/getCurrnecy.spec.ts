import {getCurrency} from './getCurrnecy'

describe('getCurrency',()=>{

  it('Should return the supported Get Currenccy ',()=>{
    const result = getCurrency();
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');

  })
})
