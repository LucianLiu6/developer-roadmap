import MarkdownIt from 'markdown-it';

function replaceVariables(markdown, variables = {}) {
  const allVariables = {
    ...variables,
    currentYear: (/* @__PURE__ */ new Date()).getFullYear().toString()
  };
  return markdown.replace(/@([^@]+)@/g, (match, p1) => {
    return allVariables[p1] || match;
  });
}
function markdownToHtml(markdown, isInline = true) {
  try {
    const md = new MarkdownIt({
      html: true,
      linkify: true
    });
    const defaultRender = md.renderer.rules.link_open || // @ts-ignore
    function(tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };
    md.renderer.rules.link_open = function(tokens, idx, options, env, self) {
      tokens[idx].attrSet("target", "_blank");
      return defaultRender(tokens, idx, options, env, self);
    };
    if (isInline) {
      return md.renderInline(markdown);
    } else {
      return md.render(markdown);
    }
  } catch (e) {
    return markdown;
  }
}
function sanitizeMarkdown(markdown) {
  return markdown.replace(/\\\[([^\\]+)\\\]\(([^\\]+)\)/g, "[$1]($2)");
}

export { markdownToHtml as m, replaceVariables as r, sanitizeMarkdown as s };
