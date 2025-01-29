import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>
    ),
    p: ({ children }) => (
      <p className="text-gray-600 leading-relaxed mb-4">{children}</p>
    ),
    strong: ({ children }) => (
      <strong className="block text-gray-900 font-bold mb-2">{children}</strong>
    ),
    ul: ({ children }) => <ul className="list-none pl-0 mb-6">{children}</ul>,
    li: ({ children }) => (
      <li className="text-gray-600 mb-2 pl-4 before:content-['-'] before:mr-2 before:text-gray-400">
        {children}
      </li>
    ),
    ...components,
  };
}
