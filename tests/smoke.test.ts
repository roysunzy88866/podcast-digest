import { describe, it, expect } from 'vitest'

// 闸门冒烟测试:只为验证「测试门真的拦红放绿」。第一个真实切片落地后由真测试取代。
describe('提交测试门冒烟', () => {
  it('测试门在岗', () => {
    expect(1 + 1).toBe(2)
  })
})
