import expect from 'expect'
import ArrayUtils from '..//src/utils/array'

describe('ArrayUtils', () => {
    describe('isEmpty', () => {
        it('returns the correct boolean value given the array', () => {
            expect(ArrayUtils.isEmpty(null)).toBe(true)
            expect(ArrayUtils.isEmpty([])).toBe(true)
            expect(ArrayUtils.isEmpty(['one'])).toBe(false)
        })
    })

    describe('splice', () => {
        it('returns the spliced array', () => {
            const array = [1, 2, 3]

            expect(ArrayUtils.splice(null)).toEqual([])
            expect(ArrayUtils.splice([])).toEqual([])
            expect(ArrayUtils.splice([1, 2, 3])).toEqual([])
            expect(ArrayUtils.splice(array, 1)).toEqual([1, 3])
            expect(array).toEqual([1, 2, 3])
        })
    })

    describe('findByMatchingProperties', () => {
        it('returns the objects that matched the properties', () => {
            const array = [{ id: 1, name: 'name1' }, { id: 2, name: 'name2' }]

            expect(ArrayUtils.findByMatchingProperties(array, { id: 3 })).toEqual([])
            expect(ArrayUtils.findByMatchingProperties(array, { id: 1 })).toEqual([{ id: 1, name: 'name1' }])
            expect(ArrayUtils.findByMatchingProperties(array, { id: 1, name: 'name1' })).toEqual([{ id: 1, name: 'name1' }])
        })
    })

    describe('findIndexByObject', () => {
        it('returns the index of the object in an array', () => {
            const array = [{ id: 1, name: 'name1' }, { id: 2, name: 'name2' }]

            expect(ArrayUtils.findIndexByObject(null, { id: 3 })).toBe(-1)
            expect(ArrayUtils.findIndexByObject(null, { id: 3 })).toBe(-1)
            expect(ArrayUtils.findIndexByObject([], { id: 3 })).toBe(-1)
            expect(ArrayUtils.findIndexByObject(array)).toBe(-1)
            expect(ArrayUtils.findIndexByObject(array, { id: 3 })).toBe(-1)
            expect(ArrayUtils.findIndexByObject(array, { id: 1 })).toBe(-1)
            expect(ArrayUtils.findIndexByObject(array, { id: 1, name: 'name1' })).toBe(0)
        })
    })

    describe('head', () => {
        it('returns the first element of an array', () => {
            expect(ArrayUtils.head([])).toEqual(undefined)
            expect(ArrayUtils.head(null)).toEqual(undefined)
            expect(ArrayUtils.head([1,2,3])).toEqual(1)
        })
    })

    describe('tail', () => {
        it('returns the list without its head', () => {
            expect(ArrayUtils.tail([])).toEqual([])
            expect(ArrayUtils.tail(null)).toEqual([])
            expect(ArrayUtils.tail([1,2,3])).toEqual([2, 3])
        })
    })

    describe('last', () => {
        it('returns the last element of an array', () => {
            expect(ArrayUtils.last([])).toEqual(undefined)
            expect(ArrayUtils.last(null)).toEqual(undefined)
            expect(ArrayUtils.last([1,2,3])).toEqual(3)
        })
    })

    describe('where', () => {
        it('returns the index of the element in an array', () => {
            const array = [{ id: 1, name: 'name1' }, { id: 2, name: 'name2' }]

            expect(ArrayUtils.where(null, { id: 3 })).toBe(-1)
            expect(ArrayUtils.where(null, { id: 3 })).toBe(-1)
            expect(ArrayUtils.where([], { id: 3 })).toBe(-1)
            expect(ArrayUtils.where(array)).toBe(-1)
            expect(ArrayUtils.where(array, { id: 3 })).toBe(-1)
            expect(ArrayUtils.where(array, { id: 1 })).toBe(0)
            expect(ArrayUtils.where(array, { id: 1, name: 'name1' })).toBe(0)
        })
    })
})