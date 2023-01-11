/* eslint-disable prettier/prettier */
import { Content } from './content';

describe('Notifiation content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('You received a friend´s solicitation!');
  
    expect(content).toBeTruthy();
  });

  it('should be able to create a notification content with less than 5 charaters', () => {
    expect(() => new Content('aaa')).toThrow();
  });
  
  it('should be able to create a notification content with more than 240 charaters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
})




