/**
 * Return a function which take object and return value of keyChain
 * ```
 * nestedItem("a.b.c")({ a: { b: { c: 5 }}  }) === 5
 * ```
 * @param {*} keyChain
 *
 * @returns {(obj) => {}} Get the nested Item levele inside.
 */
const nestedItem = (keyChain: string) => (obj: any) => {
    const keyList = keyChain.split('.');
    return Object.keys(keyList).reduce((prev, key) => prev[key], obj);
};

/**
 * Expose state to become a getter.
 *
 * ```
 * const state = {
 *     age: 18,
 *     showBox: true,
 *     rankList: {
 *         rank: 1,
 *         title: "Engineer",
 *         person: {
 *             name: "X"
 *         }
 *     }
 * }
 *
 * const getters = {
 *     ...exposeState(['age','showBox'])
 *     age: state => state.age,          // Avoid repetitive
 *     showBox: state => state.showBox,  // like this
 *
 *     ...exposeState(['name'], "rankList.person")
 *     name: state => state.rankList.person.name    // Result like this
 * }
 *
 * const gettersX = {
 *     ...exposeState(state) //This style do the same as all keys in state
 *     ...exposeState(state, "rankList.person")
 * }
 *
 * ```
 *
 * @param {[] | {}} items can be Array or Object
 * @param {string} moduleName specific nested in state
 *
 * @returns {{ key: state => state.key} }
 */
export const exposeState: any = (items: any, moduleName: string) => {
    if (items && Array.isArray(items)) {
        if (!moduleName)
            return items.reduce(
                (prev, key) => ({ ...prev, [key]: (state: any) => state[key] }),
                {}
            );

        return items.reduce(
            (prev, key) => ({
                ...prev,
                [key]: (state: any) => nestedItem(`${moduleName}.${key}`)(state),
            }),
            {}
        );
    }

    if (typeof items === 'object') {
        return exposeState(Object.keys(items), moduleName);
    }

    return {};
};

export const version = '1.0.0';
