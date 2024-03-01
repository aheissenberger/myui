'use client'

import { useMyTheme } from "./MyThemeProvider.mjs";

export function MyComponent() {
  const theme = useMyTheme()
  return <div >Name: {JSON.stringify(theme)}</div>;
}
