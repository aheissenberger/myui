'use client'

import React from 'react';
import { MyContext } from './My.context.mjs';
import { MyThemeProvider } from './MyThemeProvider.mjs';
function MyProvider({
    theme,
    children,
    getRootElement = () => document.documentElement,
}) {

    return /* @__PURE__ */ React.createElement(
        MyContext.Provider,
        {
            value: {
                getRootElement,
            }
        },
        /* @__PURE__ */ React.createElement(MyThemeProvider, { theme }, children)
    )
}
export { MyProvider };